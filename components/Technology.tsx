"use client";

import { useEffect, useRef, useState } from "react";

export default function Technology() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
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

  const technologies = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Cloud Infrastructure",
      subtitle: "AWS/Azure",
      benefit: "99.9% uptime with global scalability and redundancy",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "REST API",
      subtitle: "Secure Backend",
      benefit: "Fast, secure data exchange with industry-standard protocols",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Live Streaming",
      subtitle: "HD Cameras",
      benefit: "Real-time farm video with low latency streaming",
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-50 to-orange-50"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Blockchain",
      subtitle: "Verification",
      benefit: "Immutable batch tracking and transparent supply chain",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI/ML Engine",
      subtitle: "Smart Diagnosis",
      benefit: "Instant crop analysis with 95% accuracy rate",
      color: "from-amber-500 to-yellow-500",
      bgColor: "from-amber-50 to-yellow-50"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile PWA",
      subtitle: "Cross-Platform",
      benefit: "Works offline, installs instantly on any device",
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50"
    }
  ];

  const workflowSteps = [
    {
      icon: "👁️",
      title: "Watch",
      description: "View live farm streams in real-time",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🛒",
      title: "Order",
      description: "Buy directly from farmers",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "⚙️",
      title: "Customize",
      description: "Select farming methods & preferences",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "📍",
      title: "Track",
      description: "Monitor your batch journey",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "⭐",
      title: "Rate",
      description: "Share feedback & reviews",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: "📚",
      title: "Learn",
      description: "Access farming tips & community",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="technology" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-block transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              🔧 Technology Stack
            </span>
          </div>
          <h2 className={`text-4xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            How FormerAI Works – <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Tech Behind Trust</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Enterprise-grade technology powering transparent agriculture
          </p>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-500/50 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`bg-gradient-to-br ${tech.color} text-white p-4 rounded-xl inline-block mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                {tech.icon}
              </div>

              {/* Title & Subtitle */}
              <div className="mb-3">
                <h3 className="text-xl font-bold text-white mb-1">{tech.title}</h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                  {tech.subtitle}
                </p>
              </div>

              {/* Benefit */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {tech.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Platform Summary */}
        <div 
          className={`bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 lg:p-12 mb-16 shadow-2xl transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Enterprise Platform Features
            </h3>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Serverless Architecture</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Secure Payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Global Scale</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">15 Languages</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Syncs Everywhere</span>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Diagram */}
        <div 
          className={`transition-all duration-700 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            User Journey <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Workflow</span>
          </h3>

          {/* Workflow Steps */}
          <div className="relative">
            {/* Connection Lines - Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 -translate-y-1/2 opacity-30"></div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Arrow between steps - Desktop only */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                      <svg className={`w-6 h-6 bg-gradient-to-r ${step.color} bg-clip-text text-transparent animate-pulse`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}

                  {/* Step Card */}
                  <button
                    onClick={() => setActiveStep(activeStep === index ? null : index)}
                    className={`w-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                      activeStep === index
                        ? 'border-emerald-500 shadow-2xl shadow-emerald-500/30 scale-105'
                        : 'border-gray-700/50 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10'
                    } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${1000 + index * 150}ms` }}
                  >
                    {/* Icon */}
                    <div className="text-6xl mb-4 animate-bounce" style={{ animationDelay: `${index * 200}ms` }}>
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-2">
                      {index + 1}. {step.title}
                    </h4>

                    {/* Description - Shows on active */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      activeStep === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-gray-400 text-sm mt-2">
                        {step.description}
                      </p>
                    </div>

                    {/* Click indicator */}
                    <div className={`mt-3 text-emerald-400 text-xs font-semibold ${
                      activeStep === index ? 'opacity-0' : 'opacity-100'
                    } transition-opacity`}>
                      Click for details →
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-300 text-lg mb-6">
              Seamless experience from farm discovery to delivery tracking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Try the Platform
              </a>
              <a
                href="#features"
                className="px-8 py-4 bg-gray-800 text-white border-2 border-emerald-600 rounded-xl font-bold text-lg hover:bg-gray-700 transform hover:scale-105 transition-all duration-200"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
