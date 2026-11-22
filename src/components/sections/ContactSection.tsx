import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Copy, 
  Check, 
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
    roomType: '2 Sharing PG Room (₹13,000 / mo)',
    plan: 'Monthly PG Plan',
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

    const whatsappUrl = getContactFormWhatsAppUrl(formData);
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleCopy = () => {
    const text = `Name: ${formData.name || 'Not specified'}\nPhone: ${formData.phone || 'Not specified'}\nRoom: ${formData.roomType}\nPlan: ${formData.plan}\nMove-in: ${formData.moveInDate || 'Immediate'}\nNote: ${formData.message || 'None'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
            Direct Management Connect
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mt-1.5">
            Book a Visit or Check Availability
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
            Direct owner contact with no broker commission. Reach out anytime on WhatsApp or call directly for immediate room allocation.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Details & Quick Actions */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/917019644004?text=${encodeURIComponent('Hi Nestora Team, I would like to book/enquire about 2 Sharing PG (₹13,000/mo) or Daily Stay (₹1,200/day) in HSR Layout.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:shadow-card hover:border-emerald-400 transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">
                  Instant WhatsApp
                </span>
                <h3 className="text-lg font-extrabold text-stone-900">
                  Chat with Nestora
                </h3>
                <p className="text-xs text-stone-500 mt-0.5 font-medium">
                  +91 70196 44004 (Fastest reply)
                </p>
                <span className="inline-block mt-2 text-xs font-bold text-emerald-700 group-hover:underline">
                  Open WhatsApp Chat →
                </span>
              </div>
            </a>

            {/* Direct Call Card */}
            <a
              href={`tel:${CALL_PHONE_NUMBER}`}
              className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:shadow-card hover:border-stone-400 transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-500">
                  Direct Calling
                </span>
                <h3 className="text-lg font-extrabold text-stone-900">
                  Call Property Host
                </h3>
                <p className="text-xs text-stone-500 mt-0.5 font-medium">
                  {DISPLAY_PHONE_NUMBER}
                </p>
                <span className="inline-block mt-2 text-xs font-bold text-stone-900 group-hover:underline">
                  Tap to Call Now →
                </span>
              </div>
            </a>

            {/* Visiting hours card */}
            <div className="p-6 rounded-2xl bg-stone-100/80 border border-stone-200 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Site Visit Timings
                  </h4>
                  <p className="text-sm font-bold text-stone-900 mt-0.5">
                    {PROPERTY_DATA.workingHours.siteVisit}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-stone-200">
                <MapPin className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Property Address
                  </h4>
                  <p className="text-xs text-stone-700 mt-0.5 font-medium leading-relaxed">
                    {PROPERTY_DATA.address.full}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-stone-200 shadow-card p-6 sm:p-8">
              <div className="mb-6 pb-4 border-b border-stone-200">
                <h3 className="text-2xl font-extrabold text-stone-900">
                  Send Booking Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-1">
                  Fill in your details to immediately generate and send a WhatsApp enquiry to the property manager.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-emerald-800 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Enquiry prepared! If WhatsApp didn't open automatically, click Send again.</span>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1.5">
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
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-stone-900 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400 transition-colors ${
                        errors.name ? 'border-rose-400' : 'border-stone-300'
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
                    <label className="block text-xs font-bold text-stone-800 mb-1.5">
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
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-stone-900 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400 transition-colors ${
                        errors.phone ? 'border-rose-400' : 'border-stone-300'
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1.5">
                      Room & Tariff Option
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400"
                    >
                      <option value="2 Sharing PG Room (₹13,000 / mo)">2 Sharing PG Room (₹13,000 / mo)</option>
                      <option value="Daily Stay Plan (₹1,200 / day)">Daily Stay Plan (₹1,200 / day)</option>
                      <option value="Private Single Room (₹22,000 / mo)">Private Single Room (₹22,000 / mo)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1.5">
                      Stay Type
                    </label>
                    <select
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400"
                    >
                      <option value="Monthly PG Stay">Monthly PG Stay</option>
                      <option value="Daily Stay (Flexible)">Daily Stay (Flexible)</option>
                      <option value="Long Term (3+ Months)">Long Term (3+ Months)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1.5">
                    Expected Move-in Date
                  </label>
                  <input
                    type="date"
                    value={formData.moveInDate}
                    onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1.5">
                    Questions or Specific Requirements
                  </label>
                  <textarea
                    rows={2}
                    placeholder="E.g., Two-wheeler parking, dietary preferences, or requesting a morning visit..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 group"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Send Enquiry via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs border border-stone-300 transition-colors flex items-center justify-center gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-stone-600" />
                        <span>Copy Details</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
