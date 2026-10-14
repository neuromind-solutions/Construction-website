import React from 'react';
import HeroSection from '@/components/HeroSection';
import DiagonalMarquee from '@/components/DiagonalMarquee';
import DisciplinesSection from '@/components/DisciplinesSection';
import HowWeBuildTimeline from '@/components/HowWeBuildTimeline';
import SelectedWorkSlider from '@/components/SelectedWorkSlider';
import DrawingToLandmark from '@/components/DrawingToLandmark';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Background blueprint coordinate pattern */}
      <div className="fixed inset-0 blueprint-bg opacity-20 pointer-events-none z-0" />

      <div className="relative z-10">
        <HeroSection />
        <DiagonalMarquee />
        <DisciplinesSection />
        <HowWeBuildTimeline />
        <SelectedWorkSlider />
        <DrawingToLandmark />
        <StatsSection />
        <TestimonialsSection />
      </div>
    </div>
  );
}
