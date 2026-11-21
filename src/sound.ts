// 8-bit synthetic sound generator + background music controller via Web Audio API & HTML5 Audio
class SoundManager {
  private ctx: AudioContext | null = null;
  private enabled: boolean = false; // Always OFF by default on page load (prevents browser autoplay blocks)
  private bgAudio: HTMLAudioElement | null = null;
  private fadeInterval: number | null = null;
  private pausedByTabSwitch: boolean = false;
  private readonly TARGET_VOLUME: number = 0.4; // ~40% volume so 8-bit SFX stand out cleanly
  private readonly FADE_DURATION: number = 500; // Half a second fade in / out
  private listeners: Set<(enabled: boolean) => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      // Audio stays OFF by default on page load per user specification
      this.enabled = false;
      this.initBackgroundMusic();
      this.initVisibilityListener();
    }
  }

  // Subscribe UI components to audio state changes for guaranteed synchronization
  public subscribe(callback: (enabled: boolean) => void): () => void {
    this.listeners.add(callback);
    callback(this.enabled);
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notifyListeners() {
    this.listeners.forEach((cb) => {
      try {
        cb(this.enabled);
      } catch (err) {
        console.error('Error in sound listener:', err);
      }
    });
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  private initBackgroundMusic() {
    if (typeof window === 'undefined') return;
    try {
      this.bgAudio = new Audio('/music.mp3');
      this.bgAudio.loop = true;
      this.bgAudio.volume = 0; // Starts at 0, ramps up smoothly on toggle
      this.bgAudio.preload = 'auto';

      // Graceful error handling: if file is missing, corrupt, or fails to decode
      this.bgAudio.addEventListener('error', (e) => {
        console.warn('Background music encountered an error or failed to load. 8-bit click sounds will continue normally.', e);
      });
    } catch (e) {
      console.warn('Failed to initialize Audio element for background music:', e);
      this.bgAudio = null;
    }
  }

  // Pause music when tab is hidden, resume when tab is active (only if audio was ON)
  private initVisibilityListener() {
    if (typeof document === 'undefined') return;

    document.addEventListener('visibilitychange', () => {
      if (!this.bgAudio) return;

      if (document.visibilityState === 'hidden') {
        if (this.enabled && !this.bgAudio.paused) {
          this.pausedByTabSwitch = true;
          this.bgAudio.pause();
        }
      } else if (document.visibilityState === 'visible') {
        if (this.enabled && this.pausedByTabSwitch) {
          this.pausedByTabSwitch = false;
          // Resume from the exact same position with volume at target level
          const playPromise = this.bgAudio.play();
          if (playPromise !== undefined) {
            playPromise.catch((err) => {
              console.warn('Could not resume background music on tab focus:', err);
            });
          }
          this.fadeVolume(this.TARGET_VOLUME, 400);
        }
      }
    });
  }

  // Smooth volume ramping over durationMs (~500ms)
  private fadeVolume(targetVol: number, durationMs: number = this.FADE_DURATION, onComplete?: () => void) {
    if (this.fadeInterval !== null) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    if (!this.bgAudio) {
      if (onComplete) onComplete();
      return;
    }

    const stepInterval = 25; // 25ms per step
    const steps = Math.max(1, Math.round(durationMs / stepInterval));
    const startVol = this.bgAudio.volume;
    const diff = targetVol - startVol;
    let step = 0;

    this.fadeInterval = window.setInterval(() => {
      step++;
      if (!this.bgAudio) {
        if (this.fadeInterval !== null) clearInterval(this.fadeInterval);
        this.fadeInterval = null;
        return;
      }

      const nextVol = startVol + (diff * (step / steps));

      if (step >= steps) {
        this.bgAudio.volume = Math.max(0, Math.min(1, targetVol));
        if (this.fadeInterval !== null) clearInterval(this.fadeInterval);
        this.fadeInterval = null;
        if (onComplete) onComplete();
      } else {
        this.bgAudio.volume = Math.max(0, Math.min(1, nextVol));
      }
    }, stepInterval);
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  // Toggle audio ON or OFF
  public toggle(): boolean {
    this.enabled = !this.enabled;

    if (this.enabled) {
      // 1. Resume AudioContext for 8-bit SFX
      this.initCtx();
      this.playToggle(true);

      // 2. Start / resume background music with smooth fade-in
      if (this.bgAudio) {
        if (this.bgAudio.paused) {
          this.bgAudio.volume = 0;
          const playPromise = this.bgAudio.play();
          if (playPromise !== undefined) {
            playPromise.catch((err) => {
              console.warn('Playback prevented by browser policy or file issue:', err);
            });
          }
        }
        this.fadeVolume(this.TARGET_VOLUME, this.FADE_DURATION);
      }
    } else {
      // Turning OFF: smooth fade-out then pause
      if (this.bgAudio) {
        this.fadeVolume(0, this.FADE_DURATION, () => {
          if (!this.enabled && this.bgAudio) {
            this.bgAudio.pause();
          }
        });
      }
    }

    this.notifyListeners();
    return this.enabled;
  }

  // Soft subtle hover beep
  public playHover() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {
      // AudioContext policy suppression safe fallback
    }
  }

  // Crisp retro button click
  public playClick() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(587.33, this.ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(293.66, this.ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {
      // ignore
    }
  }

  // Developer vs Creative Mode switch sound
  public playToggle(isRising: boolean = true) {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      if (isRising) {
        osc.frequency.setValueAtTime(330, now);
        osc.frequency.setValueAtTime(493.88, now + 0.07);
        osc.frequency.setValueAtTime(659.25, now + 0.14);
      } else {
        osc.frequency.setValueAtTime(659.25, now);
        osc.frequency.setValueAtTime(493.88, now + 0.07);
        osc.frequency.setValueAtTime(330, now + 0.14);
      }
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.22);
    } catch {
      // ignore
    }
  }

  // Secret 8-bit coin sound for Gamepad / Easter Egg
  public playCoin() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.35);
    } catch {
      // ignore
    }
  }
}

export const sound = new SoundManager();
