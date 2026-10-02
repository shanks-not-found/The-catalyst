import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { CONTACT_CONTENT } from "../data/content";

export const ContactForm: React.FC = () => {
  const { form } = CONTACT_CONTENT;

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
    window.location.href = `mailto:contact@catalyst.tech?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full max-w-3xl mx-auto" id="conversation-form">
      {/* Focused Form Card in Subtle Light-Orange Warm Tint */}
      <div className="bg-[#FFF9F5] border border-[#FF5A1F]/25 p-8 sm:p-12 rounded-xs shadow-xl space-y-8">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs uppercase font-mono tracking-widest text-[#FF5A1F] block font-bold">
            {form.label}
          </span>
          <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
            {form.headline}
          </h2>
        </div>

        {isSubmitted ? (
          <div className="p-8 bg-white border border-[#FF5A1F] rounded-xs space-y-6 animate-fadeIn shadow-md text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#FF5A1F]/10 text-[#FF5A1F] flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-editorial-heading text-2xl font-bold text-gray-900">
                Inquiry Received
              </h3>
              <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-gray-900">{formData.name}</strong>. Your message regarding <strong className="text-[#FF5A1F]">{formData.interest}</strong> has been received.
              </p>
            </div>
            <div className="p-4 bg-[#FFF9F5] border border-gray-200 rounded-xs text-xs space-y-2 text-left max-w-lg mx-auto">
              <p><strong className="text-gray-900">Email:</strong> {formData.email}</p>
              {formData.company && <p><strong className="text-gray-900">Company:</strong> {formData.company}</p>}
              <p><strong className="text-gray-900">Selected Interest:</strong> {formData.interest}</p>
              <p><strong className="text-gray-900">Message:</strong> "{formData.message}"</p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
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
                className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-xs text-gray-700 hover:text-gray-900 rounded-xs cursor-pointer hover:bg-gray-100"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-gray-700 mb-1.5 font-semibold">
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
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-gray-700 mb-1.5 font-semibold">
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
              <label htmlFor="company" className="block text-xs font-mono uppercase tracking-widest text-gray-700 mb-1.5 font-semibold">
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
              <label htmlFor="interest" className="block text-xs font-mono uppercase tracking-widest text-gray-700 mb-1.5 font-semibold">
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
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-gray-700 mb-1.5 font-semibold">
                MESSAGE <span className="text-[#FF5A1F]">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us a little about what brings you to The Catalyst Room..."
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
              className="w-full py-4 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-all duration-200 hover:-translate-y-[1px] shadow-md flex items-center justify-center space-x-2 cursor-pointer group"
            >
              <span>{form.submitText}</span>
              <Send className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
