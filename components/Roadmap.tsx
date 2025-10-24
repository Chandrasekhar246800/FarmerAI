"use client";

import { useState, useEffect, useRef } from "react";

export default function Roadmap() {
  const [isVisible, setIsVisible] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress line
          setTimeout(() => {
            setProgressWidth(100);
          }, 500);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Scroll progress for animated line
    const handleScroll = () => {
      if (timelineRef.current && sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollY = window.scrollY;
        const progress = Math.min(
          Math.max((scrollY - sectionTop + window.innerHeight / 2) / sectionHeight, 0),
          1
        );
        setScrollProgress(progress * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const phases = [
    {
      phase: "Phase 1",
      year: "2025",
      duration: "6 months",
      title: "MVP Launch",
      headline: "Transparency Begins",
      impact: "Established transparency with first live-streamed farms.",
      description: "MVP launch, pilots in 2 countries, live streaming setup",
      details: [
        "Launch pilot programs in India & Kenya",
        "Deploy live streaming infrastructure",
        "Onboard 50+ farmers to platform",
        "Process first 1,000 verified orders",
        "Establish baseline trust metrics",
      ],
      badge: "Pilot Complete in India & Kenya!",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-emerald-400 to-green-500",
      bgColor: "bg-emerald-500",
      borderColor: "border-emerald-400",
      glowColor: "shadow-emerald-500/50",
      lightBg: "bg-emerald-50",
      textColor: "text-emerald-600",
      isCurrent: true,
      achievements: ["✓ Live Streaming Active", "✓ First Pilots Launched", "✓ 50+ Farms Onboarded"],
    },
    {
      phase: "Phase 2",
      year: "2026",
      duration: "1 year",
      title: "Regional Expansion",
      headline: "AI & Custom Farming",
      impact: "AI diagnostics beta launch; 50 new suppliers onboarded.",
      description: "5 countries, custom farming features, AI crop beta, supplier networks",
      details: [
        "Expand to 5 countries across Asia & Africa",
        "Launch custom farming marketplace",
        "Release AI crop diagnosis beta (v1.0)",
        "Build supplier network of 200+ farms",
        "Integrate secure payment systems",
      ],
      badge: "AI Diagnostics Beta Live!",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-teal-400 to-cyan-500",
      bgColor: "bg-teal-500",
      borderColor: "border-teal-400",
      glowColor: "shadow-teal-500/50",
      lightBg: "bg-teal-50",
      textColor: "text-teal-600",
      isCurrent: false,
      achievements: ["○ 5 Countries", "○ AI Beta Launch", "○ 200+ Suppliers"],
    },
    {
      phase: "Phase 3",
      year: "2027",
      duration: "18 months",
      title: "Multi-Language Rollout",
      headline: "Global Platform",
      impact: "10 countries live; platform supports 8 languages; 100K+ orders.",
      description: "10 countries, multi-language rollout, local partners, government alliances",
      details: [
        "Scale to 10 countries worldwide",
        "Add support for 8 major languages",
        "Form partnerships with local governments",
        "Process 100,000+ verified orders",
        "Establish regional fulfillment centers",
      ],
      badge: "100,000 Deliveries Milestone!",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-500",
      borderColor: "border-blue-400",
      glowColor: "shadow-blue-500/50",
      lightBg: "bg-blue-50",
      textColor: "text-blue-600",
      isCurrent: false,
      achievements: ["○ 10 Countries", "○ 8 Languages", "○ 100K+ Orders"],
    },
    {
      phase: "Phase 4",
      year: "2028",
      duration: "2–3 years",
      title: "Global Leadership",
      headline: "Industry Awards & AI/IoT",
      impact: "Global leadership: 25 countries, advanced IoT & AI, industry awards.",
      description: "25 countries, advanced AI/IoT, global industry leadership",
      details: [
        "Operate in 25+ countries globally",
        "Deploy advanced IoT sensor networks",
        "Launch AI predictive analytics v2.0",
        "Win industry innovation awards",
        "Become #1 agricultural transparency platform",
      ],
      badge: "Industry Leadership Achieved!",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-500",
      borderColor: "border-violet-400",
      glowColor: "shadow-violet-500/50",
      lightBg: "bg-violet-50",
      textColor: "text-violet-600",
      isCurrent: false,
      achievements: ["○ 25+ Countries", "○ Advanced IoT/AI", "○ Industry Awards"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="relative py-24 bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50 overflow-hidden"
    >
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-emerald-300"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-300/30 to-green-300/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-teal-300/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-br from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg animate-pulse">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Our Vision & Milestones
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
            Scaling FormerAI – Our Vision to 2028
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            From local pilots to global agricultural revolution. Watch our journey transform farming worldwide.
          </p>
        </div>

        {/* Desktop Timeline - Horizontal Scrollable */}
        <div className="hidden lg:block relative mb-20" ref={timelineRef}>
          {/* Progress Line */}
          <div className="absolute top-32 left-0 right-0 h-3 bg-gradient-to-r from-gray-200 via-gray-200 to-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 via-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out relative"
              style={{ width: `${scrollProgress}%` }}
            >
              {/* Animated Pulse at End */}
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-white rounded-full shadow-xl animate-pulse"></div>
                <div className="absolute inset-0 w-6 h-6 bg-purple-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Milestone Bubbles */}
          <div className="relative flex justify-between items-start pt-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center w-64 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                {/* Milestone Bubble */}
                <div className="relative group cursor-pointer" onClick={() => setSelectedPhase(selectedPhase === index ? null : index)}>
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${phase.color} blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-pulse`}></div>
                  
                  {/* Main Bubble */}
                  <div className={`relative w-40 h-40 rounded-full bg-gradient-to-br ${phase.color} flex flex-col items-center justify-center text-white border-4 ${phase.borderColor} shadow-2xl ${phase.glowColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${phase.isCurrent ? 'ring-4 ring-amber-400 ring-offset-4 ring-offset-white scale-110' : ''}`}>
                    <div className="mb-2">{phase.icon}</div>
                    <div className="text-xs font-bold opacity-90">{phase.year}</div>
                    <div className="text-sm font-black">{phase.phase}</div>
                  </div>

                  {/* Hover Tooltip */}
                  <div className="absolute top-full mt-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20">
                    <div className="bg-white rounded-2xl shadow-2xl p-1 w-80 border-2 border-gray-100">
                      <div className={`rounded-xl p-5 bg-gradient-to-br ${phase.lightBg} border ${phase.borderColor}`}>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${phase.color} mb-3`}>
                          {phase.duration}
                        </div>
                        <h3 className={`text-xl font-black ${phase.textColor} mb-2`}>
                          {phase.title}
                        </h3>
                        <p className="text-gray-700 text-sm font-semibold mb-3">{phase.impact}</p>
                        <div className={`inline-flex items-center gap-1 text-xs font-bold ${phase.textColor} bg-white/80 px-3 py-1 rounded-full`}>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Click for details
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase Info Below */}
                <div className="mt-6 text-center">
                  <h3 className={`text-lg font-black bg-gradient-to-r ${phase.color} bg-clip-text text-transparent mb-1`}>
                    {phase.headline}
                  </h3>
                  <p className="text-sm text-gray-600 font-semibold mb-2">{phase.title}</p>
                  <div className="space-y-1">
                    {phase.achievements.map((achievement, i) => (
                      <div key={i} className="text-xs text-gray-500 font-medium">
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detail Cards (Click to Open) */}
          {selectedPhase !== null && (
            <div className="mt-32 animate-fadeIn">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-gray-100 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l ${phases[selectedPhase].lightBg} opacity-50`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${phases[selectedPhase].color} flex items-center justify-center text-white shadow-lg`}>
                        {phases[selectedPhase].icon}
                      </div>
                      <div>
                        <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r ${phases[selectedPhase].color} mb-2`}>
                          {phases[selectedPhase].year} • {phases[selectedPhase].duration}
                        </div>
                        <h3 className="text-3xl font-black text-gray-900">
                          {phases[selectedPhase].phase}: {phases[selectedPhase].title}
                        </h3>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPhase(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <p className="text-xl text-gray-700 font-semibold mb-6 italic">
                    "{phases[selectedPhase].impact}"
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Key Milestones
                      </h4>
                      <ul className="space-y-3">
                        {phases[selectedPhase].details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700">
                            <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${phases[selectedPhase].color} text-white flex items-center justify-center text-xs font-bold`}>
                              {i + 1}
                            </span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Achievement Badge
                      </h4>
                      <div className={`${phases[selectedPhase].lightBg} rounded-2xl p-6 border-2 ${phases[selectedPhase].borderColor}`}>
                        <div className="text-center">
                          <div className="text-4xl mb-3">🏆</div>
                          <p className={`text-lg font-black ${phases[selectedPhase].textColor}`}>
                            {phases[selectedPhase].badge}
                          </p>
                        </div>
                      </div>
                      
                      {/* Demo Screenshot Placeholder */}
                      <div className="mt-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 flex items-center justify-center border-2 border-gray-300">
                        <div className="text-center">
                          <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-sm text-gray-500 font-semibold">Demo Screenshot</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Timeline - Vertical Stack */}
        <div className="lg:hidden relative space-y-8">
          {/* Vertical Progress Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 rounded-full">
            <div
              className="w-full bg-gradient-to-b from-emerald-500 via-teal-500 via-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
              style={{ height: `${scrollProgress}%` }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-4 h-4 bg-white rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Mobile Milestones */}
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`relative flex items-start gap-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Milestone Bubble */}
              <div className="relative flex-shrink-0 z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-white border-4 ${phase.borderColor} shadow-xl ${phase.glowColor} ${phase.isCurrent ? 'ring-4 ring-amber-400 ring-offset-2' : ''}`}>
                  <div className="scale-75">{phase.icon}</div>
                </div>
              </div>

              {/* Info Card */}
              <div
                className="flex-1 bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 cursor-pointer hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedPhase(selectedPhase === index ? null : index)}
              >
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${phase.color} mb-3`}>
                  {phase.year} • {phase.duration}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  {phase.phase}: {phase.title}
                </h3>
                <p className="text-sm text-gray-700 font-semibold mb-3 italic">
                  "{phase.impact}"
                </p>
                
                {selectedPhase === index ? (
                  <div className="mt-4 pt-4 border-t-2 border-gray-100">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Key Milestones
                    </h4>
                    <ul className="space-y-2">
                      {phase.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${phase.color} text-white flex items-center justify-center text-xs font-bold`}>
                            {i + 1}
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`mt-4 ${phase.lightBg} rounded-xl p-4 border ${phase.borderColor}`}>
                      <div className="text-center">
                        <div className="text-2xl mb-1">🏆</div>
                        <p className={`text-sm font-bold ${phase.textColor}`}>
                          {phase.badge}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button className={`mt-2 text-sm font-bold ${phase.textColor} flex items-center gap-1`}>
                    Tap for details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`mt-24 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="white"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-pattern)" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Join the journey. Partner with FormerAI to build a trusted food future.
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
                Whether you're a farmer, investor, or technology partner—there's a place for you in our vision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group px-8 py-4 bg-white text-emerald-600 rounded-full font-black shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Contact Us
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-black border-2 border-white/40 hover:bg-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Learn How You Can Contribute
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
