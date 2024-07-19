import React from 'react';
import Billing from './_components/Billing';
import Landing from './_components/Landing';
import Features from './_components/Features';
import Footer from './_components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <nav className="bg-primary text-white md:p-4  py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="/"
            className="flex gap-2 items-center ">
            <Image src='/logo.svg' height={35} width={36} alt='img' />
            <span className='text-white font-extrabold md:text-2xl text-xl'>AutoContent</span>
          </a>
          <button className="bg-white text-primary px-8 py-2 rounded-full font-semibold hover:bg-primary-light
          hover:scale-105 transition-colors">
            <Link href={'/dashboard'}>Login</Link>
          </button>
        </div>
      </nav>

      <Landing />
      <Features />
      <Billing />
      <Footer />
    </div>
  );
};

export default LandingPage;