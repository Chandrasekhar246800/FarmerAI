"use client";

import { useEffect, useRef, useState } from "react";

export default function Problems() {
  const [isVisible, setIsVisible] = useState(false);
  const [consumerCount, setConsumerCount] = useState(0);
  const [farmerCount, setFarmerCount] = useState(0);
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

  // Animated counters
  useEffect(() => {
    if (isVisible) {
      // Consumer counter: 0 to 10
      const consumerInterval = setInterval(() => {
        setConsumerCount((prev) => {
          if (prev >= 10) {
            clearInterval(consumerInterval);
            return 10;
          }
          return prev + 1;
        });
      }, 100);

      // Farmer counter: 0 to 30
      const farmerInterval = setInterval(() => {
        setFarmerCount((prev) => {
          if (prev >= 30) {
            clearInterval(farmerInterval);
            return 30;
          }
          return prev + 2;
        });
      }, 80);

      return () => {
        clearInterval(consumerInterval);
        clearInterval(farmerInterval);
      };
    }
  }, [isVisible]);

  const consumerIssues = [
    { icon: "⚠️", text: "Food safety risks and contamination fears" },
    { icon: "🏷️", text: "Fake organic and quality labels" },
    { icon: "🔍", text: "Complete lack of production transparency" },
    { icon: "❌", text: "Growing trust deficit in food supply chains" }
  ];

  const farmerIssues = [
    { icon: "💸", text: "Trapped in endless poverty cycles" },
    { icon: "🤝", text: "Exploitation by middlemen taking unfair cuts" },
    { icon: "🌾", text: "Devastating crop disease and loss" },
    { icon: "🚫", text: "Severe limitations in market access" }
  ];

  return (
    <section id="problems" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-block transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              Critical Issues
            </span>
          </div>
          <h2 className={`text-4xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            The <span className="text-red-600">Food Safety Crisis</span> & <span className="text-orange-600">Farmer Barriers</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            A broken system affecting billions worldwide—consumers and farmers alike
          </p>
        </div>

        {/* Double Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT: For Consumers */}
          <div 
            className={`bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border-t-4 border-red-500 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Icon Header */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">For Consumers</h3>
                <p className="text-red-600 font-medium">Your health at risk</p>
              </div>
            </div>

            {/* Issues List */}
            <div className="space-y-4 mb-8">
              {consumerIssues.map((issue, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <span className="text-2xl flex-shrink-0">{issue.icon}</span>
                  <p className="text-gray-700 text-lg leading-relaxed">{issue.text}</p>
                </div>
              ))}
            </div>

            {/* Stat Counter */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 mb-6 border-l-4 border-red-500">
              <div className="flex items-center justify-between mb-2">
                <span className="text-6xl font-bold text-red-600">{consumerCount}</span>
                <span className="text-4xl font-bold text-red-400">in 10</span>
              </div>
              <p className="text-gray-800 font-semibold text-lg">
                people fall ill from contaminated food annually
              </p>
              <p className="text-gray-600 text-sm mt-2">— World Health Organization (WHO)</p>
            </div>

            {/* Emotional Quote */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-2xl font-bold mb-2 relative z-10">Can you trust what's on your plate?</p>
              <p className="text-red-100 relative z-10">Every meal carries uncertainty in today's food system</p>
            </div>
          </div>

          {/* RIGHT: For Farmers */}
          <div 
            className={`bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border-t-4 border-orange-500 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Icon Header */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">For Farmers</h3>
                <p className="text-orange-600 font-medium">Livelihoods in jeopardy</p>
              </div>
            </div>

            {/* Issues List */}
            <div className="space-y-4 mb-8">
              {farmerIssues.map((issue, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <span className="text-2xl flex-shrink-0">{issue.icon}</span>
                  <p className="text-gray-700 text-lg leading-relaxed">{issue.text}</p>
                </div>
              ))}
            </div>

            {/* Stat Counter */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 mb-6 border-l-4 border-orange-500">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-baseline">
                  <span className="text-6xl font-bold text-orange-600">{farmerCount}</span>
                  <span className="text-3xl font-bold text-orange-600">%</span>
                </div>
                <span className="text-sm text-gray-600 font-semibold">INCOME LOST</span>
              </div>
              <p className="text-gray-800 font-semibold text-lg">
                of farmer income lost to intermediaries and crop disease
              </p>
              <p className="text-gray-600 text-sm mt-2">— Industry Research Data</p>
            </div>

            {/* Middleman Illustration */}
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-6 relative overflow-hidden">
              <h4 className="font-bold text-gray-800 mb-4 text-lg">The Middleman Problem:</h4>
              
              {/* Visual representation of money flow */}
              <div className="flex items-center justify-between space-x-2 mb-4">
                <div className="text-center flex-1">
                  <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-xl">
                    🌾
                  </div>
                  <p className="text-xs font-semibold text-gray-700">Farmer</p>
                  <p className="text-lg font-bold text-orange-600">$100</p>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-center space-x-1">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-xs">💰</div>
                    <span className="text-gray-400">→</span>
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-xs">💰</div>
                    <span className="text-gray-400">→</span>
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-xs">💰</div>
                  </div>
                  <p className="text-xs text-center text-gray-600 mt-1">Middlemen</p>
                </div>

                <div className="text-center flex-1">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-xl">
                    🛒
                  </div>
                  <p className="text-xs font-semibold text-gray-700">Consumer</p>
                  <p className="text-lg font-bold text-green-600">$250</p>
                </div>
              </div>

              <p className="text-center text-sm text-gray-700 font-medium bg-white/50 rounded-lg p-2">
                Farmers receive only <span className="text-orange-600 font-bold">40%</span> while consumers pay <span className="text-green-600 font-bold">250%</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Urgency Banner */}
        <div 
          className={`mt-12 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 rounded-3xl shadow-2xl p-8 lg:p-12 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            This Crisis Demands Immediate Action
          </h3>
          <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Billions affected. Millions of farmers struggling. One platform ready to change everything.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div>
              <p className="text-4xl font-bold">600M+</p>
              <p className="text-white/80">People sickened annually</p>
            </div>
            <div className="hidden sm:block w-px bg-white/30"></div>
            <div>
              <p className="text-4xl font-bold">420K</p>
              <p className="text-white/80">Deaths from foodborne illness</p>
            </div>
            <div className="hidden sm:block w-px bg-white/30"></div>
            <div>
              <p className="text-4xl font-bold">500M+</p>
              <p className="text-white/80">Smallholder farmers globally</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
