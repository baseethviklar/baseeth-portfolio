import React, { useState, useEffect } from 'react';
import { Mode } from './types';
import { sound } from './sound';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DotNav } from './components/DotNav';
import { LeftToolbar } from './components/LeftToolbar';
import { GamepadModal } from './components/GamepadModal';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  // Mode state with localStorage persistence
  const [mode, setMode] = useState<Mode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('baseeth_portfolio_mode');
      if (saved === 'developer' || saved === 'creative') {
        return saved;
      }
    }
    return 'developer';
  });

  // Sound state synced with SoundManager
  const [isSoundOn, setIsSoundOn] = useState<boolean>(() => sound.isEnabled());

  // Subscribe to SoundManager state to keep Header, LeftToolbar, and keyboard shortcuts in perfect sync
  useEffect(() => {
    const unsubscribe = sound.subscribe((enabled) => {
      setIsSoundOn(enabled);
    });
    return () => unsubscribe();
  }, []);

  // Modals state
  const [isGamepadOpen, setIsGamepadOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  // Sync mode changes to localStorage
  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('baseeth_portfolio_mode', newMode);
    }
  };

  const handleToggleSound = () => {
    sound.toggle();
  };

  useEffect(() => {
    // Keyboard accessibility shortcuts: Press 'M' to toggle mode, 'S' for sound
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'm' || e.key === 'M') {
        handleModeChange(mode === 'developer' ? 'creative' : 'developer');
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        handleToggleSound();
      } else if (e.key === 'Escape') {
        setIsGamepadOpen(false);
        setIsContactModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode]);

  return (
    <div
      className={`min-h-screen bg-[#0d0d0d] text-[#e0e0e0] font-sans relative selection:bg-[#b6f000] selection:text-black transition-colors duration-500 ${
        mode === 'developer' ? 'theme-developer' : 'theme-creative'
      }`}
    >
      {/* Background Retro Grid Pattern */}
      <div className="fixed inset-0 retro-grid pointer-events-none opacity-40 z-0" />

      {/* Top Header */}
      <Header
        mode={mode}
        setMode={handleModeChange}
        isSoundOn={isSoundOn}
        onToggleSound={handleToggleSound}
      />

      {/* Vertical Navigation & Toolbars */}
      <DotNav />
      <LeftToolbar
        isSoundOn={isSoundOn}
        onToggleSound={handleToggleSound}
        onOpenContact={() => setIsContactModalOpen(true)}
        onOpenGamepad={() => setIsGamepadOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero mode={mode} setMode={handleModeChange} />
        <AboutSection mode={mode} />
        <ExperienceSection mode={mode} />
        <ProjectsSection mode={mode} />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Hidden Interactions */}
      <GamepadModal isOpen={isGamepadOpen} onClose={() => setIsGamepadOpen(false)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
};

export default App;
