import React, { useState } from "react";
import { SEOHead } from "../components/SEOHead";
import { NEXT_EPISODE_REGISTRATION_CONTENT } from "../data/content";
import { CheckCircle2, AlertCircle, Send, Calendar, MapPin, Layers, Sparkles } from "lucide-react";

export const RegisterNextEpisode: React.FC = () => {
  const {
    hero,
    episodeDetails,
    aboutNextEpisode,
    objective,
    thisIsFor,
    curationCriteria,
    form,
  } = NEXT_EPISODE_REGISTRATION_CONTENT;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    company: "",
    role: "",
    industry: "",
    experience: "",
    audienceType: form.audienceOptions[0],
    website: "",
    companyDescription: "",
    interestReason: "",
    contributionAreas: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required.";
    if (!formData.company.trim()) newErrors.company = "Company / Organisation is required.";
    if (!formData.role.trim()) newErrors.role = "Current Role is required.";
    if (!formData.interestReason.trim()) newErrors.interestReason = "Please tell us what brings you to The Catalyst Room.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Register for Next Episode — The Catalyst Room"
        description="Express your interest to participate in Episode 01 of The Catalyst Room with Ajay Jain at T-Hub, Hyderabad."
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-white text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              {hero.eyebrow}
            </span>
            <h1 className="font-editorial-heading text-4xl sm:text-6xl font-bold text-gray-900 leading-tight">
              {hero.headline}
            </h1>
            <p className="text-base sm:text-xl text-gray-600 font-sans leading-relaxed max-w-3xl">
              {hero.subhead}
            </p>
          </div>
        </div>
      </section>

      {/* 2. UPCOMING EPISODE SNAPSHOT BOX (SUBTLE SOFT GRAY #F7F7F7) */}
      <section className="py-12 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-6 sm:p-10 rounded-xs shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200/80 pb-6">
              <div>
                <span className="px-3 py-1 bg-[#FF5A1F] text-white text-[10px] font-mono font-bold uppercase tracking-widest rounded-xs">
                  {episodeDetails.number}
                </span>
                <h3 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                  {episodeDetails.guestName}
                </h3>
                <p className="text-xs font-mono text-[#FF5A1F] mt-1 font-semibold">
                  {episodeDetails.guestRole}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1.5 text-[#FF5A1F]" />
                  <span>{episodeDetails.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1.5 text-[#FF5A1F]" />
                  <span>{episodeDetails.venue}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center text-xs text-gray-600 font-mono">
              <Layers className="w-4 h-4 mr-2 text-[#FF5A1F]" />
              <span>FORMAT: {episodeDetails.format}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE NEXT EPISODE & OBJECTIVE (WHITE) */}
      <section className="py-20 lg:py-28 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* About Next Episode */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
                CONVERSATION FOCUS
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
                {aboutNextEpisode.headline}
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <p className="text-lg font-serif italic text-gray-900 leading-relaxed">
                "{aboutNextEpisode.conversationSummary}"
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                {aboutNextEpisode.roomConcept}
              </p>
            </div>
          </div>

          {/* Objective */}
          <div className="pt-12 border-t border-gray-200 space-y-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
                INTENDED OUTCOMES
              </span>
              <h2 className="font-editorial-heading text-3xl font-bold text-gray-900">
                {objective.headline}
              </h2>
              <p className="text-xs text-gray-500 font-sans">
                {objective.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {objective.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-5 rounded-xs space-y-2 hover:border-[#FF5A1F] transition-all shadow-xs"
                >
                  <span className="text-[10px] font-mono text-[#FF5A1F] font-bold">
                    0{idx + 1}
                  </span>
                  <p className="text-xs font-bold text-gray-900 font-mono">
                    {pt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. THIS IS FOR: AUDIENCE SELECTION (SUBTLE SOFT GRAY #F7F7F7) */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7] text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] block font-bold">
              AUDIENCE PROFILE
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
              {thisIsFor.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {thisIsFor.audiences.map((aud, idx) => (
              <div
                key={idx}
                className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-6 rounded-xs space-y-3 hover:border-[#FF5A1F] transition-all shadow-xs"
              >
                <div className="w-7 h-7 rounded-xs bg-[#FF5A1F]/10 text-[#FF5A1F] font-mono font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="font-editorial-heading text-lg font-bold text-gray-900">
                  {aud.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {aud.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHO GETS INVITED? CURATION CRITERIA (WHITE) */}
      <section className="py-16 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-8 sm:p-12 rounded-xs space-y-6 shadow-xs">
            <div className="max-w-3xl space-y-3">
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
                ROOM CURATION PROCESS
              </span>
              <h2 className="font-editorial-heading text-3xl font-bold text-gray-900">
                {curationCriteria.headline}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {curationCriteria.body}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200/80">
              {curationCriteria.notes.map((note, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-gray-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF5A1F] shrink-0 mt-0.5" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. REGISTRATION FORM SECTION (SUBTLE SOFT GRAY #F7F7F7) */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7] text-[#111827]" id="registration-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] block font-bold">
              CURATION APPLICATION
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-gray-900">
              {form.headline}
            </h2>
            <p className="text-xs text-gray-500 font-sans">
              {form.subhead}
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 bg-[#FFF9F5] border border-[#FF5A1F] rounded-xs space-y-6 animate-fadeIn shadow-xl text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#FF5A1F]/10 text-[#FF5A1F] flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#FF5A1F] uppercase tracking-widest font-bold">
                  {form.confirmationMsg.title}
                </span>
                <h3 className="font-editorial-heading text-2xl font-bold text-gray-900">
                  {form.confirmationMsg.body}
                </h3>
              </div>
              <p className="text-xs text-gray-600 max-w-lg mx-auto leading-relaxed">
                {form.confirmationMsg.detail}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      linkedin: "",
                      company: "",
                      role: "",
                      industry: "",
                      experience: "",
                      audienceType: form.audienceOptions[0],
                      website: "",
                      companyDescription: "",
                      interestReason: "",
                      contributionAreas: "",
                    });
                  }}
                  className="px-6 py-3 border border-gray-300 text-xs font-bold text-gray-700 hover:text-gray-900 rounded-xs cursor-pointer hover:bg-gray-100"
                >
                  Submit Another Registration
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-6 sm:p-10 rounded-xs shadow-md space-y-8" noValidate>
              {/* Group 1: Personal Details */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] font-bold border-b border-gray-200 pb-2">
                  01 — PERSONAL DETAILS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1 font-semibold">
                      FULL NAME <span className="text-[#FF5A1F]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.fullName ? "border-red-500" : "border-gray-300"
                      } text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F]`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-[11px] text-red-500 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1 font-semibold">
                      EMAIL ADDRESS <span className="text-[#FF5A1F]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F]`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-500 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1 font-semibold">
                      PHONE NUMBER <span className="text-[#FF5A1F]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F]`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[11px] text-red-500 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="linkedin" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1 font-semibold">
                      LINKEDIN PROFILE
                    </label>
                    <input
                      id="linkedin"
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F]"
                    />
                  </div>
                </div>
              </div>

              {/* Group 2: Professional Details */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] font-bold border-b border-gray-200 pb-2">
                  02 — PROFESSIONAL DETAILS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1 font-semibold">
                      COMPANY / ORGANISATION <span className="text-[#FF5A1F]">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company name"
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.company ? "border-red-500" : "border-gray-300"
                      } text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F]`}
                    />
                    {errors.company && (
                      <p className="mt-1 text-[11px] text-red-500 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" /> {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1 font-semibold">
                      CURRENT ROLE / DESIGNATION <span className="text-[#FF5A1F]">*</span>
                    </label>
                    <input
                      id="role"
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g. Founder, Managing Partner, VP"
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.role ? "border-red-500" : "border-gray-300"
                      } text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F]`}
                    />
                    {errors.role && (
                      <p className="mt-1 text-[11px] text-red-500 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" /> {errors.role}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1 font-semibold">
                      INDUSTRY / DOMAIN
                    </label>
                    <input
                      id="industry"
                      type="text"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      placeholder="e.g. Deep Tech, SaaS, FinTech"
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F]"
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1 font-semibold">
                      YEARS OF EXPERIENCE
                    </label>
                    <input
                      id="experience"
                      type="text"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      placeholder="e.g. 5+ years"
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F]"
                    />
                  </div>
                </div>
              </div>

              {/* Group 3: Audience Type */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] font-bold border-b border-gray-200 pb-2">
                  03 — AUDIENCE CATEGORY <span className="text-[#FF5A1F]">*</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {form.audienceOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, audienceType: opt })}
                      className={`p-3 text-xs font-semibold rounded-xs border text-left transition-all cursor-pointer ${
                        formData.audienceType === opt
                          ? "bg-[#FF5A1F] text-white border-[#FF5A1F]"
                          : "bg-white text-gray-900 border-gray-300 hover:border-[#FF5A1F]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Group 4: Company & Interest */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] font-bold border-b border-gray-200 pb-2">
                  04 — BUSINESS INFORMATION & INTEREST
                </h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="website" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1 font-semibold">
                      COMPANY WEBSITE
                    </label>
                    <input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://company.com"
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F]"
                    />
                  </div>

                  <div>
                    <label htmlFor="interestReason" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1 font-semibold">
                      WHAT BRINGS YOU TO THE CATALYST ROOM? <span className="text-[#FF5A1F]">*</span>
                    </label>
                    <textarea
                      id="interestReason"
                      rows={3}
                      value={formData.interestReason}
                      onChange={(e) => setFormData({ ...formData, interestReason: e.target.value })}
                      placeholder="What kind of conversations, opportunities or connections are you looking for?"
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.interestReason ? "border-red-500" : "border-gray-300"
                      } text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F]`}
                    />
                    {errors.interestReason && (
                      <p className="mt-1 text-[11px] text-red-500 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" /> {errors.interestReason}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contributionAreas" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1 font-semibold">
                      AREAS WHERE YOU CAN CONTRIBUTED TO THE ROOM (OPTIONAL)
                    </label>
                    <textarea
                      id="contributionAreas"
                      rows={2}
                      value={formData.contributionAreas}
                      onChange={(e) => setFormData({ ...formData, contributionAreas: e.target.value })}
                      placeholder="Domain expertise, customer/partnership leads, investor access, etc."
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-md flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{form.submitText}</span>
                <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
