'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Expertise } from '@/components/sections/Expertise';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Contact } from '@/components/sections/Contact';
import { CVModal } from '@/components/modals/CVModal';

export default function Home() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenCv = () => {
    setIsCvOpen(true);
  };

  const handleCloseCv = () => {
    setIsCvOpen(false);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">
      {/* Sticky Global Navigation */}
      <Header onOpenCv={handleOpenCv} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        <Hero onOpenCv={handleOpenCv} />
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <Services onSelectService={handleSelectService} />
        <Process />
        <Contact selectedService={selectedService} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Printable CV Modal */}
      <CVModal isOpen={isCvOpen} onClose={handleCloseCv} />
    </div>
  );
}

