"use client";

import { useEffect, useRef, useState } from "react";

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Live Farm Streaming",
      description: "Watch real-time video of your food being produced with 24/7 transparent farm cameras.",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "Direct Ordering & Secure Payments",
      description: "Buy directly from farmers with encrypted transactions and instant payment processing.",
      color: "from-emerald-400 to-green-500",
      bgColor: "from-emerald-50 to-green-50"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Fully Customizable Farming Methods",
      description: "Select organic, pesticide-free, or specific techniques—customize everything to your preferences.",
      color: "from-lime-400 to-green-500",
      bgColor: "from-lime-50 to-green-50"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Fast AI Crop Disease Management",
      description: "Instant AI diagnosis with treatment recommendations and local supplier connections.",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: "15+ Language Local Platform",
      description: "Accessible in multiple languages with region-specific content for global farmers and consumers.",
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      ),
      title: "Batch Verification & Tracking",
      description: "QR code scanning and blockchain verification for complete supply chain transparency.",
      color: "from-teal-400 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Social Learning & Reviews",
      description: "Join a community with verified reviews, shared farming tips, and educational resources.",
      color: "from-indigo-400 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      title: "Works Offline (PWA)",
      description: "Progressive Web App technology ensures core features work even without internet connection.",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    }
  ];

  const consumerBenefits = [
    "See what you eat with live video transparency",
    "Choose your preferred production methods",
    "Verify delivery and track your batch history",
    "Join a trust-based food network with verified reviews"
  ];

  const farmerBenefits = [
    "Earn significantly more per sale (up to 40%)",
    "Get paid promptly with secure transactions",
    "Reach global customers directly without middlemen",
    "Fight crop problems fast with AI diagnosis",
    "Join a supportive farmer community network"
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-block transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <span className="inline-block bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4 border border-emerald-200">
              Complete Platform
            </span>
          </div>
          <h2 className={`text-4xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Key <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Features & Benefits</span> of FormerAI
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Everything you need for transparent, sustainable agriculture
          </p>
        </div>

        {/* Features Grid - 8 items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${feature.bgColor} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 75}ms` }}
            >
              {/* Icon */}
              <div className={`bg-gradient-to-br ${feature.color} text-white p-3 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div 
          className={`transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl shadow-xl p-8 lg:p-12 border border-emerald-100">
            <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              Built for <span className="text-emerald-600">Everyone</span> in the Food System
            </h3>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* For Consumers */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl text-white shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">For Consumers</h4>
                    <p className="text-blue-600 font-medium">Eat with confidence</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {consumerBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                  <p className="text-sm font-semibold text-gray-800 text-center">
                    💙 Trust what's on your plate
                  </p>
                </div>
              </div>

              {/* For Farmers */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-4 rounded-xl text-white shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">For Farmers</h4>
                    <p className="text-green-600 font-medium">Grow your business</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {farmerBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                  <p className="text-sm font-semibold text-gray-800 text-center">
                    🌾 Build a sustainable future
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-4xl font-bold text-emerald-600 mb-2">100%</p>
                <p className="text-gray-600 font-medium">Transparent</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-4xl font-bold text-green-600 mb-2">15+</p>
                <p className="text-gray-600 font-medium">Languages</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-4xl font-bold text-teal-600 mb-2">24/7</p>
                <p className="text-gray-600 font-medium">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
