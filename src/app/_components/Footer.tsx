import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
         <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Content?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Join thousands of content creators who are already leveraging the power of AI to produce engaging, high-quality content at scale.</p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg 
          hover:bg-primary-light transition-colors transform hover:scale-105">
            <Link href={'/sign-up'}>
            Start Your Free Trial
            </Link>
          </button>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 AutoContent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer