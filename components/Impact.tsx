"use client";

import { useEffect, useRef, useState } from "react";

export default function Impact() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    safety: 0,
    market: 0,
    cost: 0,
    deliveries: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      // Safety counter: 0 to 35
      const safetyInterval = setInterval(() => {
        setCounters((prev) => {
          if (prev.safety >= 35) {
            clearInterval(safetyInterval);
            return prev;
          }
          return { ...prev, safety: prev.safety + 1 };
        });
      }, 40);

      // Market counter: 0 to 200
      const marketInterval = setInterval(() => {
        setCounters((prev) => {
          if (prev.market >= 200) {
            clearInterval(marketInterval);
            return prev;
          }
          return { ...prev, market: prev.market + 5 };
        });
      }, 30);

      // Cost counter: 0 to 40
      const costInterval = setInterval(() => {
        setCounters((prev) => {
          if (prev.cost >= 40) {
            clearInterval(costInterval);
            return prev;
          }
          return { ...prev, cost: prev.cost + 1 };
        });
      }, 45);

      // Deliveries counter: 0 to 20000
      const deliveriesInterval = setInterval(() => {
        setCounters((prev) => {
          if (prev.deliveries >= 20000) {
            clearInterval(deliveriesInterval);
            return prev;
          }
          return { ...prev, deliveries: prev.deliveries + 500 };
        });
      }, 30);

      return () => {
        clearInterval(safetyInterval);
        clearInterval(marketInterval);
        clearInterval(costInterval);
        clearInterval(deliveriesInterval);
      };
    }
  }, [isVisible]);

  const impacts = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      value: `+${counters.safety}%`,
      label: "Improved Food Safety",
      description: "Enhanced trust through transparency",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: `$${counters.market}B+`,
      label: "Global Market Opportunity",
      description: "Farm-to-consumer revolution",
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: `${counters.cost}%`,
      label: "Cost Reduction for Farmers",
      description: "Higher income, direct sales",
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-50"
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: counters.deliveries.toLocaleString() + '+',
      label: "Consumer Deliveries",
      description: "Trusted farm-to-table transactions",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Multi-Language Inclusion",
      description: "Gender equality, youth empowerment, 15+ languages",
      color: "from-teal-500 to-emerald-600",
      bgColor: "from-teal-50 to-emerald-50",
      icons: ['🌍', '♀️', '♂️', '🎓']
    }
  ];

  return (
    <section id="impact" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-block transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              Measurable Results
            </span>
          </div>
          <h2 className={`text-4xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Platform <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Impact & Inclusion</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Real data. Real change. Real people.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {impacts.slice(0, 3).map((impact, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${impact.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`bg-gradient-to-br ${impact.color} text-white p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                {impact.icon}
              </div>

              {/* Value with Counter */}
              <div className="mb-4">
                <p className={`text-5xl lg:text-6xl font-bold bg-gradient-to-br ${impact.color} bg-clip-text text-transparent mb-2`}>
                  {impact.value}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {impact.label}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {impact.description}
                </p>
              </div>

              {/* Progress Bar Animation */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${impact.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: isVisible ? '100%' : '0%',
                    transitionDelay: `${400 + index * 150}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Two Cards - Wider */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {impacts.slice(3, 5).map((impact, index) => (
            <div
              key={index + 3}
              className={`group bg-gradient-to-br ${impact.bgColor} rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${750 + index * 150}ms` }}
            >
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className={`bg-gradient-to-br ${impact.color} text-white p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                  {impact.icon}
                </div>

                <div className="flex-1">
                  {/* Value with Counter */}
                  {impact.value && (
                    <p className={`text-4xl lg:text-5xl font-bold bg-gradient-to-br ${impact.color} bg-clip-text text-transparent mb-2`}>
                      {impact.value}
                    </p>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {impact.label}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    {impact.description}
                  </p>

                  {/* Inclusion Icons */}
                  {impact.icons && (
                    <div className="flex items-center space-x-3">
                      {impact.icons.map((icon, iconIndex) => (
                        <div 
                          key={iconIndex}
                          className={`bg-white p-3 rounded-xl shadow-md text-2xl transform transition-all duration-300 hover:scale-125 ${
                            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                          }`}
                          style={{ transitionDelay: `${900 + iconIndex * 100}ms` }}
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Progress Bar Animation */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mt-6">
                <div 
                  className={`h-full bg-gradient-to-r ${impact.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: isVisible ? '100%' : '0%',
                    transitionDelay: `${850 + index * 150}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline Banner */}
        <div 
          className={`bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 rounded-3xl shadow-2xl p-10 lg:p-16 text-center relative overflow-hidden transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            {/* Icon Group */}
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full animate-bounce animation-delay-2000">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              FormerAI's reach is <span className="underline decoration-4 decoration-yellow-300">local</span>—its impact is <span className="underline decoration-4 decoration-yellow-300">global</span>
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Empowering farmers, protecting consumers, transforming agriculture one community at a time
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <p className="text-3xl font-bold text-white">150+</p>
                <p className="text-white/80 text-sm">Countries</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <p className="text-3xl font-bold text-white">50K+</p>
                <p className="text-white/80 text-sm">Farmers</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <p className="text-3xl font-bold text-white">1M+</p>
                <p className="text-white/80 text-sm">Consumers</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-white/80 text-sm">Languages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
