import React from 'react';
import { createStyles, Container, Text, Button, Group, useMantineTheme } from '@mantine/core';
import MainLayout from '@/components/Layout';
import { useTranslation } from 'react-i18next';
import { useStore } from '../store';
import { LanguageSwitch } from '@/components/LanguageSwitch';
import { helper } from '@/lib/helper';
import { WagmiProvider } from '@/components/WagmiProvider';

import Hero from '../LandingPage/Hero';
import FirstStep from '../LandingPage/FirstStep';
import Meet from '../LandingPage/Meet';
import Stats from '../LandingPage/Stats';
import Part from '../LandingPage/Part';
import Roadmap from '../LandingPage/Roadmap';
import FAQ from '../LandingPage/FAQ';
import Footer from '../LandingPage/Footer';

export default function HeroTitle() {


  return (
    <MainLayout>
      <Hero />
      <FirstStep />
      <Meet />
      <Stats />
      <Part />
      <Roadmap />
      <FAQ />
      <Footer />
    </MainLayout>
  );
}
