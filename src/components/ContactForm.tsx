import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, Phone, MapPin, Globe } from "lucide-react";
import { CONTACT_CONTENT, SITE_METADATA } from "../data/content";

export const ContactForm: React.FC = () => {
  const { form, directContact } = CONTACT_CONTENT;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: form.interestOptions[0],
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
    const subject = encodeURIComponent(
      `Inquiry from ${formData.name} - ${formData.company || "Individual"} (${formData.interest})`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${SITE_METADATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10" id="conversation-form">
      {/* Left: Interactive Form */}
      <div className="lg:col-span-7 bg-white border border-gray-200 p-6 sm:p-8 rounded-xs shadow-xl space-y-6">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] block mb-1 font-bold">
            {form.label}
          </span>
          <h3 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-gray-900">
            {form.headline}
          </h3>
        </div>

        {isSubmitted ? (
          <div className="p-6 bg-white border border-[#FF5A1F] rounded-xs space-y-4 animate-fadeIn shadow-md">
            <div className="flex items-center space-x-3 text-[#FF5A1F]">
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <h4 className="font-editorial-heading text-lg font-bold">
                Conversation Details Formatted & Prepared
              </h4>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">
              Thank you, <strong className="text-gray-900">{formData.name}</strong>. Your inquiry regarding <strong className="text-[#FF5A1F]">{formData.interest}</strong> has been formatted.
            </p>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-xs text-xs space-y-2 text-gray-600">
              <p><strong className="text-gray-900">Email:</strong> {formData.email}</p>
              {formData.company && <p><strong className="text-gray-900">Company:</strong> {formData.company}</p>}
              <p><strong className="text-gray-900">Selected Interest:</strong> {formData.interest}</p>
              <p><strong className="text-gray-900">Message:</strong> "{formData.message}"</p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleMailtoFallback}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs flex items-center justify-center space-x-2 cursor-pointer shadow-md"
              >
                <span>Launch Mail App Directly</span>
                <Mail className="w-3.5 h-3.5 ml-1" />
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", email: "", company: "", interest: form.interestOptions[0], message: "" });
                }}
                className="w-full sm:w-auto px-5 py-3 border border-gray-300 text-xs text-gray-700 hover:text-gray-900 rounded-xs cursor-pointer hover:bg-gray-100"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1.5 font-semibold">
                NAME <span className="text-[#FF5A1F]">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className={`w-full px-4 py-3 bg-white border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F] transition-colors`}
              />
              {errors.name && (
                <p className="mt-1 text-[11px] text-red-500 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" /> {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1.5 font-semibold">
                EMAIL <span className="text-[#FF5A1F]">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@company.com"
                className={`w-full px-4 py-3 bg-white border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F] transition-colors`}
              />
              {errors.email && (
                <p className="mt-1 text-[11px] text-red-500 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" /> {errors.email}
                </p>
              )}
            </div>

            {/* Company / Organization */}
            <div>
              <label htmlFor="company" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1.5 font-semibold">
                COMPANY / ORGANIZATION
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Company or organization"
                className="w-full px-4 py-3 bg-white border border-gray-300 text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F] transition-colors"
              />
            </div>

            {/* I'M INTERESTED IN Dropdown */}
            <div>
              <label htmlFor="interest" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1.5 font-semibold">
                I’M INTERESTED IN <span className="text-[#FF5A1F]">*</span>
              </label>
              <select
                id="interest"
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-300 text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F] transition-colors cursor-pointer"
              >
                {form.interestOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-white text-gray-900">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-gray-600 mb-1.5 font-semibold">
                MESSAGE <span className="text-[#FF5A1F]">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us a little about what you're looking to explore..."
                className={`w-full px-4 py-3 bg-white border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } text-xs text-gray-900 rounded-xs focus:outline-none focus:border-[#FF5A1F] transition-colors`}
              />
              {errors.message && (
                <p className="mt-1 text-[11px] text-red-500 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-md flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>{form.submitText}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>

      {/* Right: Direct Contact Details Card */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-xs shadow-xl space-y-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF5A1F] block font-bold">
              {directContact.heading}
            </span>
            <h3 className="font-editorial-heading text-2xl font-bold text-gray-900 mt-1">
              {directContact.name}
            </h3>
            <p className="text-xs text-gray-500 font-mono mt-0.5">
              {directContact.role}
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-gray-200">
            <a
              href={`mailto:${directContact.email}`}
              className="flex items-center p-3.5 bg-gray-50 border border-gray-200 rounded-xs hover:border-[#FF5A1F] transition-colors group"
            >
              <div className="p-2 bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-xs mr-3">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase block font-semibold">EMAIL</span>
                <span className="text-xs text-gray-900 font-semibold group-hover:text-[#FF5A1F] transition-colors">
                  {directContact.email}
                </span>
              </div>
            </a>

            <a
              href={`tel:${directContact.phone.replace(/\s+/g, '')}`}
              className="flex items-center p-3.5 bg-gray-50 border border-gray-200 rounded-xs hover:border-[#FF5A1F] transition-colors group"
            >
              <div className="p-2 bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-xs mr-3">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase block font-semibold">PHONE</span>
                <span className="text-xs text-gray-900 font-semibold group-hover:text-[#FF5A1F] transition-colors">
                  {directContact.phone}
                </span>
              </div>
            </a>

            <div className="flex items-center p-3.5 bg-gray-50 border border-gray-200 rounded-xs">
              <div className="p-2 bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-xs mr-3">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase block font-semibold">LOCATION</span>
                <span className="text-xs text-gray-900 font-semibold">
                  {directContact.location}
                </span>
              </div>
            </div>

            <div className="flex items-center p-3.5 bg-gray-50 border border-gray-200 rounded-xs">
              <div className="p-2 bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-xs mr-3">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase block font-semibold">PLATFORM</span>
                <span className="text-xs text-[#FF5A1F] font-semibold font-mono">
                  {directContact.platform}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

