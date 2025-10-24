"use client";

import { useEffect, useRef, useState } from "react";

export default function Solutions() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const solutions = [
    {
      title: "Live Farm Transparency",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      description: "Real-time video. Verified production. Scan to see farm history.",
      features: [
        { icon: "📹", text: "24/7 live streaming" },
        { icon: "🔍", text: "QR code batch tracking" },
        { icon: "✅", text: "Verified farm credentials" }
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      demoStat: "95% increase in consumer trust with live transparency"
    },
    {
      title: "Custom Farming Marketplace",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "Consumers specify everything—organic, pesticide-free, local. Get weekly video updates and batch stats.",
      features: [
        { icon: "🌱", text: "Customize farming methods" },
        { icon: "📊", text: "Weekly progress reports" },
        { icon: "🎥", text: "Video batch updates" }
      ],
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-50 to-green-50",
      demoStat: "Farmers earn 40% more through direct-to-consumer sales"
    },
    {
      title: "Local AI AgriTech",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: "Multi-language AI instantly diagnoses crop disease. Connects farmers to local suppliers and educational video guides.",
      features: [
        { icon: "🤖", text: "AI crop diagnosis" },
        { icon: "🌍", text: "Multi-language support" },
        { icon: "📚", text: "Educational resources" }
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      demoStat: "85% faster disease detection saves up to 30% of crops"
    }
  ];

  return (
    <section id="solutions" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-block transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              The FormerAI Solution
            </span>
          </div>
          <h2 className={`text-4xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our Solution: From <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Trust</span> to <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Transformation</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Three revolutionary pillars rebuilding the global food system
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 ${
                hoveredCard === index ? 'scale-105 shadow-2xl -translate-y-2' : 'scale-100'
              }`}>
                {/* Gradient Header */}
                <div className={`bg-gradient-to-br ${solution.gradient} p-8 text-white relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '24px 24px'
                    }}></div>
                  </div>

                  {/* Icon */}
                  <div className={`relative z-10 transform transition-all duration-500 ${
                    hoveredCard === index ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                  }`}>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl inline-block">
                      {solution.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-2xl font-bold mt-6 mb-2">
                    {solution.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  {/* Description */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className={`flex items-center space-x-3 transition-all duration-300 ${
                          hoveredCard === index ? 'translate-x-2' : 'translate-x-0'
                        }`}
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <span className="text-2xl">{feature.icon}</span>
                        <span className="text-gray-600 font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Demo Stat - Hidden by default, shown on hover */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    hoveredCard === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className={`bg-gradient-to-br ${solution.bgGradient} rounded-xl p-4 border-l-4 border-${solution.gradient.split(' ')[0].replace('from-', '')}`}>
                      <div className="flex items-start space-x-2">
                        <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm font-semibold text-gray-800">
                          {solution.demoStat}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 pointer-events-none ${
                  hoveredCard === index ? `border-${solution.gradient.split(' ')[0].replace('from-', '')} opacity-100` : 'border-transparent opacity-0'
                }`}></div>

                {/* Number Badge */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 ${
                  hoveredCard === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                }`}>
                  <span className={`text-2xl font-bold bg-gradient-to-br ${solution.gradient} bg-clip-text text-transparent`}>
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Card Shadow Animation */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} rounded-3xl -z-10 blur-2xl transition-opacity duration-500 ${
                hoveredCard === index ? 'opacity-30' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto border-t-4 border-emerald-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Agriculture Together?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of farmers and millions of conscious consumers building a transparent food future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore All Features
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-600 rounded-lg font-semibold text-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
