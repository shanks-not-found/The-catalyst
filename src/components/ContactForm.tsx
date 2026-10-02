import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_CONTENT, SITE_METADATA } from "../data/content";

export const ContactForm: React.FC = () => {
  const { form, directContact } = CONTACT_CONTENT;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "Sponsorship",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.company.trim()) newErrors.company = "Company / Brand is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
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

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.company} (${formData.interest})`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${SITE_METADATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Left: Interactive Form */}
      <div className="lg:col-span-7 bg-[#14161A] border border-[#2A2F3A] p-6 sm:p-8 rounded-xs shadow-2xl space-y-6">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] block mb-1">
            PARTNER INQUIRY & DISCOVERY
          </span>
          <h3 className="font-editorial-heading text-2xl font-bold text-[#E8E6E1]">
            Send an Inquiry to John Garapati
          </h3>
        </div>

        {isSubmitted ? (
          <div className="p-6 bg-[#1E222A] border border-[#FF5A1F] rounded-xs space-y-4 animate-fadeIn">
            <div className="flex items-center space-x-3 text-[#FF5A1F]">
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <h4 className="font-editorial-heading text-lg font-bold">
                Inquiry Form Validated & Prepared
              </h4>
            </div>
            <p className="text-xs text-[#E8E6E1] leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry details for <strong className="text-[#FF5A1F]">{formData.company}</strong> ({formData.interest}) have been formatted.
            </p>
            <div className="p-4 bg-[#14161A] border border-[#2A2F3A] rounded-xs text-xs space-y-2 text-[#8A8F98]">
              <p><strong className="text-[#E8E6E1]">Email:</strong> {formData.email}</p>
              <p><strong className="text-[#E8E6E1]">Selected Interest:</strong> {formData.interest}</p>
              <p><strong className="text-[#E8E6E1]">Message:</strong> "{formData.message}"</p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleMailtoFallback}
                className="w-full sm:w-auto px-6 py-3 bg-[#FF5A1F] hover:bg-[#E04B14] text-[#14161A] text-xs font-bold uppercase tracking-widest rounded-xs flex items-center justify-center space-x-2"
              >
                <span>Launch Mail App Directly</span>
                <Mail className="w-3.5 h-3.5 ml-1" />
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", email: "", company: "", interest: "Sponsorship", message: "" });
                }}
                className="w-full sm:w-auto px-5 py-3 border border-[#2A2F3A] text-xs text-[#8A8F98] hover:text-[#E8E6E1] rounded-xs"
              >
                Submit Another Message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-[#8A8F98] mb-1.5">
                Name <span className="text-[#FF5A1F]">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className={`w-full px-4 py-3 bg-[#1E222A] border ${
                  errors.name ? "border-red-500" : "border-[#2A2F3A]"
                } text-xs text-[#E8E6E1] rounded-xs focus:outline-none focus:border-[#FF5A1F] transition-colors`}
              />
              {errors.name && (
                <p className="mt-1 text-[11px] text-red-400 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" /> {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-[#8A8F98] mb-1.5">
                Email <span className="text-[#FF5A1F]">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="founder@company.com"
                className={`w-full px-4 py-3 bg-[#1E222A] border ${
                  errors.email ? "border-red-500" : "border-[#2A2F3A]"
                } text-xs text-[#E8E6E1] rounded-xs focus:outline-none focus:border-[#FF5A1F] transition-colors`}
              />
              {errors.email && (
                <p className="mt-1 text-[11px] text-red-400 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" /> {errors.email}
                </p>
              )}
            </div>

            {/* Company / Brand */}
            <div>
              <label htmlFor="company" className="block text-xs font-mono uppercase tracking-widest text-[#8A8F98] mb-1.5">
                Company / Brand <span className="text-[#FF5A1F]">*</span>
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Acme Ventures / Brand"
                className={`w-full px-4 py-3 bg-[#1E222A] border ${
                  errors.company ? "border-red-500" : "border-[#2A2F3A]"
                } text-xs text-[#E8E6E1] rounded-xs focus:outline-none focus:border-[#FF5A1F] transition-colors`}
              />
              {errors.company && (
                <p className="mt-1 text-[11px] text-red-400 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" /> {errors.company}
                </p>
              )}
            </div>

            {/* Interest Dropdown */}
            <div>
              <label htmlFor="interest" className="block text-xs font-mono uppercase tracking-widest text-[#8A8F98] mb-1.5">
                Interest <span className="text-[#FF5A1F]">*</span>
              </label>
              <select
                id="interest"
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full px-4 py-3 bg-[#1E222A] border border-[#2A2F3A] text-xs text-[#E8E6E1] rounded-xs focus:outline-none focus:border-[#FF5A1F] transition-colors cursor-pointer"
              >
                {form.interestOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#14161A] text-[#E8E6E1]">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-[#8A8F98] mb-1.5">
                Message <span className="text-[#FF5A1F]">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your brand goals, sponsorship preferences, or how you would like to participate..."
                className={`w-full px-4 py-3 bg-[#1E222A] border ${
                  errors.message ? "border-red-500" : "border-[#2A2F3A]"
                } text-xs text-[#E8E6E1] rounded-xs focus:outline-none focus:border-[#FF5A1F] transition-colors`}
              />
              {errors.message && (
                <p className="mt-1 text-[11px] text-red-400 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#FF5A1F] hover:bg-[#E04B14] text-[#14161A] text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>{form.submitText}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>

      {/* Right: Direct Contact Details Card */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-[#1E222A] border border-[#2A2F3A] p-6 sm:p-8 rounded-xs shadow-xl space-y-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A8F98] block">
              DIRECT CONTACT DETAILS
            </span>
            <h3 className="font-editorial-heading text-xl font-bold text-[#E8E6E1] mt-1">
              {directContact.name}
            </h3>
            <p className="text-xs text-[#FF5A1F] font-mono mt-0.5">
              {directContact.role}
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#2A2F3A]">
            <a
              href={`mailto:${directContact.email}`}
              className="flex items-center p-3 bg-[#14161A] border border-[#2A2F3A] rounded-xs hover:border-[#FF5A1F] transition-colors group"
            >
              <div className="p-2 bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-xs mr-3">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#8A8F98] uppercase block">EMAIL</span>
                <span className="text-xs text-[#E8E6E1] font-semibold group-hover:text-[#FF5A1F] transition-colors">
                  {directContact.email}
                </span>
              </div>
            </a>

            <a
              href={`tel:${directContact.phone.replace(/\s+/g, '')}`}
              className="flex items-center p-3 bg-[#14161A] border border-[#2A2F3A] rounded-xs hover:border-[#FF5A1F] transition-colors group"
            >
              <div className="p-2 bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-xs mr-3">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#8A8F98] uppercase block">PHONE</span>
                <span className="text-xs text-[#E8E6E1] font-semibold group-hover:text-[#FF5A1F] transition-colors">
                  {directContact.phone}
                </span>
              </div>
            </a>

            <div className="flex items-center p-3 bg-[#14161A] border border-[#2A2F3A] rounded-xs">
              <div className="p-2 bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-xs mr-3">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#8A8F98] uppercase block">LOCATION</span>
                <span className="text-xs text-[#E8E6E1] font-semibold">
                  {directContact.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
