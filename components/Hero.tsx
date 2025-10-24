export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent">
                FormerAI:
              </span>
              <br />
              <span className="text-gray-800">
                Revolutionizing Global Agriculture Through{" "}
                <span className="text-emerald-600">Transparency</span>
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Watch your food being produced live. Connect directly with farmers. Trust what you eat.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#solutions"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold text-lg hover:from-emerald-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Learn More
              </a>
              <a
                href="#demo"
                className="px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-600 rounded-lg font-semibold text-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Watch a Demo
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">100% Transparent</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Direct Farm Connection</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">AI-Powered</span>
              </div>
            </div>
          </div>

          {/* Right Content - Split Graphic */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Live Streaming Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-green-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1 animate-pulse">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span className="font-semibold">LIVE</span>
                  </div>
                  <svg className="w-20 h-20 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Live Farm Streaming</h3>
                <p className="text-sm text-gray-600">Watch real-time production from farm to harvest</p>
              </div>

              {/* Direct Sales Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-lime-100 to-emerald-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <svg className="w-20 h-20 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Direct Farmer Sales</h3>
                <p className="text-sm text-gray-600">Connect and buy directly from local farmers</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-lime-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M0 32V.5H32" fill="none" stroke="rgb(34 197 94 / 0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}
