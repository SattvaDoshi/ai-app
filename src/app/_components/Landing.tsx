import Link from 'next/link'
import React from 'react'

const Landing = () => {
  return (
    <div>
        <header className="bg-primary text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Unleash the Power of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">AI-Generated</span> Content
          </h1>
          <p className="md:text-xl text-lg text-gray-200 md:text-white mb-10 max-w-2xl mx-auto">
            Transform your ideas into compelling content with our cutting-edge AI technology.
             Save time, boost creativity, and stay ahead of the competition.</p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-primary-light
            transition-colors transform hover:scale-105">
                <Link href={'/sign-up'}>
                Start Creating for Free
                </Link>
            </button>
        </div>
      </header>

    </div>
  )
}

export default Landing