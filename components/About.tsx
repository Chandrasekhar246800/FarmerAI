"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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

  const innovations = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Live Streaming",
      description: "Live streaming farm-to-consumer video, anywhere in the world.",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Direct Orders",
      description: "Order directly—no middlemen, premium prices for farmers.",
      color: "from-green-500 to-lime-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Custom Orders",
      description: "Customize your order—select farming techniques, track progress weekly.",
      color: "from-lime-500 to-emerald-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI Diagnostics",
      description: "AI-powered crop diagnosis and rapid local treatment suggestions.",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const highlights = [
    "See your food produced LIVE",
    "Buy directly from farmers",
    "Customize and track each batch"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            What is <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">FormerAI</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Large Central Summary with Fade-in */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-2xl lg:text-3xl text-gray-700 leading-relaxed max-w-5xl mx-auto font-medium">
            The world's first agricultural transparency platform using{" "}
            <span className="text-emerald-600 font-bold">live streaming</span>,{" "}
            <span className="text-green-600 font-bold">artificial intelligence</span>, and{" "}
            <span className="text-lime-600 font-bold">direct farm-to-table technology</span>.
          </p>
        </div>

        {/* Animated Highlight Bar */}
        <div className="mb-16 overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 rounded-2xl shadow-xl">
          <div className="animate-slide-infinite whitespace-nowrap py-6">
            <span className="inline-flex items-center text-white text-xl lg:text-2xl font-semibold px-8">
              {[...highlights, ...highlights, ...highlights].map((highlight, index) => (
                <span key={index} className="flex items-center">
                  <span>{highlight}</span>
                  <span className="mx-6 text-3xl">•</span>
                </span>
              ))}
            </span>
          </div>
        </div>

        {/* Four Innovation Tiles */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 bg-gradient-to-br ${innovation.color} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {innovation.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {innovation.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                {innovation.description}
              </p>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${innovation.color} opacity-5 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Global Access Stats Block with Fade-in */}
        <div 
          className={`bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 rounded-3xl shadow-2xl p-10 lg:p-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="text-center space-y-8">
            {/* Globe Icon */}
            <div className="flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Main Text */}
            <h3 className="text-3xl lg:text-4xl font-bold text-white">
              Accessible Worldwide
            </h3>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Any mobile, any browser — no restrictions
            </p>

            {/* Device Icons */}
            <div className="flex justify-center items-center gap-8 lg:gap-12 pt-4 flex-wrap">
              {/* Mobile */}
              <div className="text-center group">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl group-hover:bg-white/30 transition-colors">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white font-medium mt-2">Mobile</p>
              </div>

              {/* Tablet */}
              <div className="text-center group">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl group-hover:bg-white/30 transition-colors">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white font-medium mt-2">Tablet</p>
              </div>

              {/* Desktop */}
              <div className="text-center group">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl group-hover:bg-white/30 transition-colors">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white font-medium mt-2">Desktop</p>
              </div>

              {/* Browser */}
              <div className="text-center group">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl group-hover:bg-white/30 transition-colors">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <p className="text-white font-medium mt-2">Any Browser</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
