import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import Bakers from '../components/Bakers';
import Social from '../components/Social';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import WhyUs from '../components/WhyUs';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <Bakers />
      <Social />
      <Testimonials />
      <Gallery />
      <WhyUs />
    </>
  );
}