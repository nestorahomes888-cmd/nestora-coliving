import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { PROPERTY_DATA } from '../../data/property';
import { 
  getContactFormWhatsAppUrl, 
  CALL_PHONE_NUMBER, 
  DISPLAY_PHONE_NUMBER 
} from '../../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: 'Single Sharing (Private Room)',
    duration: 'Monthly Stay (Best Value)',
    moveInDate: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate WhatsApp URL with prefilled enquiry
    const whatsappUrl = getContactFormWhatsAppUrl(formData);
    
    // Open WhatsApp in new window/tab
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleCopy = () => {
    const text = `Name: ${formData.name || 'Not specified'}\nPhone: ${formData.phone || 'Not specified'}\nRoom: ${formData.roomType}\nDuration: ${formData.duration}\nDate: ${formData.moveInDate || 'Immediate'}\nNote: ${formData.message || 'None'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-200 border border-cream-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-gold-dark" />
            <span>Direct Management Connect</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight">
            Schedule a Visit or Request Availability
          </h2>
          <p className="mt-4 text-base text-charcoal-600 leading-relaxed">
            Have questions about room tariffs, current availability, or want to drop by for a tour? Reach out directly via WhatsApp or phone. No middleman, zero brokerage.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Direct Action Cards (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/917019644004?text=${encodeURIComponent('Hi Nestora Team, I would like to enquire about room availability and tariff in HSR Layout.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-white border border-cream-200 shadow-soft hover:shadow-medium hover:border-emerald-300 transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    Instant Chat
                  </span>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900">
                    WhatsApp Chat
                  </h3>
                  <p className="text-xs text-charcoal-500 mt-0.5">
                    +91 70196 44004 (Fastest response)
                  </p>
                  <span className="inline-block mt-2 text-xs font-semibold text-emerald-600 group-hover:underline">
                    Chat with Host →
                  </span>
                </div>
              </a>

              {/* Direct Call Card */}
              <a
                href={`tel:${CALL_PHONE_NUMBER}`}
                className="p-6 rounded-2xl bg-white border border-cream-200 shadow-soft hover:shadow-medium hover:border-gold transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cream-100 text-gold-dark flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
                    Direct Phone Line
                  </span>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900">
                    Call Host Directly
                  </h3>
                  <p className="text-xs text-charcoal-500 mt-0.5">
                    {DISPLAY_PHONE_NUMBER}
                  </p>
                  <span className="inline-block mt-2 text-xs font-semibold text-charcoal-900 group-hover:underline">
                    Tap to Call →
                  </span>
                </div>
              </a>
            </div>

            {/* Visit Hours & Address Card */}
            <div className="p-6 rounded-2xl bg-cream-100/70 border border-cream-300/80 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-charcoal-900">
                    Walkthrough & Tour Hours
                  </h4>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    {PROPERTY_DATA.workingHours.siteVisit}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-cream-200">
                <MapPin className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-charcoal-900">
                    Property Location
                  </h4>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    {PROPERTY_DATA.address.full}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Enquiry Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-cream-200 shadow-soft p-6 sm:p-8">
              <div className="mb-6 pb-4 border-b border-cream-200">
                <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                  Send Booking Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
                  Fill in your details below. Clicking 'Send via WhatsApp' will format your enquiry and open WhatsApp directly.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-emerald-800 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Enquiry generated! If WhatsApp did not open automatically, click Send again.</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="font-bold underline ml-2"
                  >
                    Reset
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-charcoal-900 bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition-colors ${
                        errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-cream-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1.5">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-charcoal-900 bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition-colors ${
                        errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-cream-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Room Preference & Duration Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1.5">
                      Room Preference
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm text-charcoal-900 bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition-colors"
                    >
                      <option value="Single Sharing (Private Room)">Single Sharing (Private Room)</option>
                      <option value="Double Sharing (Twin Room)">Double Sharing (Twin Room)</option>
                      <option value="Looking for both / Flexible">Looking for both / Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1.5">
                      Preferred Stay Duration
                    </label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm text-charcoal-900 bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition-colors"
                    >
                      <option value="Monthly Stay (Best Value)">Monthly Stay (Best Value)</option>
                      <option value="Weekly Stay">Weekly Stay</option>
                      <option value="Daily Stay">Daily Stay</option>
                      <option value="Long Term (3+ Months)">Long Term (3+ Months)</option>
                    </select>
                  </div>
                </div>

                {/* Move-in Date */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 mb-1.5">
                    Tentative Move-In Date
                  </label>
                  <input
                    type="date"
                    value={formData.moveInDate}
                    onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm text-charcoal-900 bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition-colors"
                  />
                </div>

                {/* Custom Message */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 mb-1.5">
                    Additional Questions or Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ask about room availability, vehicle parking, food preferences, or request a specific time for a visit..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm text-charcoal-900 bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition-colors resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-charcoal-900 text-cream-50 font-semibold text-sm hover:bg-charcoal-800 transition-all shadow-md hover:shadow-elevated flex items-center justify-center gap-2 group border border-charcoal-700"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>Send Enquiry via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-cream-100 text-charcoal-800 font-semibold text-xs hover:bg-cream-200 transition-colors border border-cream-300 flex items-center justify-center gap-2"
                    title="Copy details to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-charcoal-500" />
                        <span>Copy Details</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-charcoal-400 text-center pt-2">
                  🔒 We respect your privacy. No spam or aggressive follow-ups. Direct conversation with Nestora management.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
