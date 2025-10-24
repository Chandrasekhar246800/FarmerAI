"use client";

import { useState, useEffect, useRef } from "react";

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success state after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      avatar: "SC",
      bgColor: "from-emerald-500 to-teal-500",
      skills: ["AgriTech Innovation", "Business Strategy", "Food Safety"],
      email: "sarah@formerai.com",
      linkedin: "linkedin.com/in/sarachen",
      bio: "Former agricultural scientist with 15+ years experience in sustainable farming technologies.",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      avatar: "MR",
      bgColor: "from-blue-500 to-indigo-500",
      skills: ["AI/ML Engineering", "Blockchain", "Cloud Architecture"],
      email: "michael@formerai.com",
      linkedin: "linkedin.com/in/mrodriguez",
      bio: "Ex-Google engineer specializing in large-scale distributed systems and AI.",
    },
    {
      name: "Priya Sharma",
      role: "Head of Product",
      avatar: "PS",
      bgColor: "from-purple-500 to-pink-500",
      skills: ["UX Design", "Product Strategy", "User Research"],
      email: "priya@formerai.com",
      linkedin: "linkedin.com/in/priyasharma",
      bio: "Product leader with experience building global consumer platforms.",
    },
    {
      name: "James Wilson",
      role: "VP of Operations",
      avatar: "JW",
      bgColor: "from-amber-500 to-orange-500",
      skills: ["Supply Chain", "Logistics", "Partner Relations"],
      email: "james@formerai.com",
      linkedin: "linkedin.com/in/jameswilson",
      bio: "Operations expert with deep experience in agricultural supply chains.",
    },
  ];

  const advisors = [
    { name: "Dr. Amina Okafor", role: "Agricultural Scientist", avatar: "AO", color: "bg-emerald-500" },
    { name: "Prof. Li Wei", role: "AI Research", avatar: "LW", color: "bg-blue-500" },
    { name: "Maria Santos", role: "Policy Advisor", avatar: "MS", color: "bg-purple-500" },
    { name: "David Kim", role: "Blockchain Expert", avatar: "DK", color: "bg-teal-500" },
    { name: "Dr. Hassan Ali", role: "Food Safety", avatar: "HA", color: "bg-indigo-500" },
    { name: "Sofia Martinez", role: "Sustainability", avatar: "SM", color: "bg-pink-500" },
    { name: "Dr. John Taylor", role: "IoT Systems", avatar: "JT", color: "bg-cyan-500" },
    { name: "Fatima Khan", role: "Market Strategy", avatar: "FK", color: "bg-violet-500" },
  ];

  return (
    <section
      ref={sectionRef}
      id="team"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="team-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="currentColor" className="text-emerald-500"/>
              <circle cx="0" cy="0" r="2" fill="currentColor" className="text-blue-500"/>
              <circle cx="60" cy="60" r="2" fill="currentColor" className="text-purple-500"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#team-pattern)" />
        </svg>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Meet the Team
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent">
            Our Team & Advisors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse group of innovators, scientists, and industry experts united by one mission: transforming global agriculture.
          </p>
        </div>

        {/* Core Team Grid */}
        <div className="mb-20">
          <h3
            className={`text-3xl font-bold text-gray-900 mb-10 text-center transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Core Leadership Team
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-emerald-300 transition-all duration-500 ${hoveredMember === index ? 'scale-105 shadow-2xl' : ''}`}>
                  {/* Avatar */}
                  <div className="relative">
                    <div className={`h-48 bg-gradient-to-br ${member.bgColor} flex items-center justify-center relative overflow-hidden`}>
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className={`w-full h-full ${hoveredMember === index ? 'animate-pulse' : ''}`}>
                          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="20" cy="20" r="2" fill="white"/>
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                          </svg>
                        </div>
                      </div>
                      <div className="relative text-6xl font-black text-white z-10">
                        {member.avatar}
                      </div>
                    </div>
                    
                    {/* Social Links - Appear on Hover */}
                    <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${hoveredMember === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                        title="Email"
                      >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                      <a
                        href={`https://${member.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                        title="LinkedIn"
                      >
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${member.bgColor} bg-clip-text text-transparent mb-3`}>
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Top Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisors Section */}
        <div
          className={`mb-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="advisor-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="15" cy="15" r="1" fill="white"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#advisor-pattern)" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-3">Expert Advisors</h3>
                <p className="text-gray-300">Leading scientists, technologists, and policy experts guiding our mission</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
                {advisors.map((advisor, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className={`relative w-20 h-20 rounded-full ${advisor.color} flex items-center justify-center text-white text-xl font-black mb-3 shadow-lg group-hover:scale-110 transition-all duration-300 ring-4 ring-white/20 group-hover:ring-white/40`}>
                      {advisor.avatar}
                      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <p className="text-white text-sm font-bold text-center mb-1">{advisor.name}</p>
                    <p className="text-gray-400 text-xs text-center">{advisor.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form & Quote Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-1200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h3>
              <p className="text-gray-600 mb-6">Have questions? Want to partner? We'd love to hear from you.</p>

              {isSuccess ? (
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-xl p-8 text-center animate-fadeIn">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">Message Sent!</h4>
                  <p className="text-emerald-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quote & Recognition */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-1400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Founder Quote */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <svg className="w-12 h-12 text-white/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-2xl font-bold mb-6 leading-relaxed">
                  "We build trust, empower farmers, and protect consumers. Together, we're creating a transparent future for global agriculture."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl font-black border-2 border-white/30">
                    SC
                  </div>
                  <div>
                    <p className="font-bold">Dr. Sarah Chen</p>
                    <p className="text-sm text-white/80">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recognition Badges */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Recognition & Awards
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Recognized by Global AgriTech Council</p>
                    <p className="text-sm text-gray-600">Leading innovation in agricultural transparency</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Certified Food Safety Partner</p>
                    <p className="text-sm text-gray-600">Meeting international food safety standards</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Impact Partner Award 2025</p>
                    <p className="text-sm text-gray-600">For empowering 10,000+ farmers globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
