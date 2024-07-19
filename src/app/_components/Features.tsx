import React from 'react'

const Features = () => {
  return (
    <div>
         <section id="features" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Revolutionize Your Content Creation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-6 text-primary">🧠</div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Advanced AI</h3>
              <p className="text-gray-600">Harness the power of state-of-the-art language models for unparalleled content quality</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-6 text-primary">🎭</div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Versatile Formats</h3>
              <p className="text-gray-600">From blog posts to social media content, create diverse content types with ease</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-6 text-primary">🔗</div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Seamless Usage</h3>
              <p className="text-gray-600">Effortlessly use AI-generated content into your workflow</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features