export const WHATSAPP_PHONE_NUMBER = "917019644004";
export const CALL_PHONE_NUMBER = "+917019644004";
export const DISPLAY_PHONE_NUMBER = "+91 70196 44004";

/**
 * Generate a direct WhatsApp click-to-chat URL using wa.me format
 */
export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encoded}`;
}

/**
 * Generate room enquiry WhatsApp URL
 */
export function getRoomEnquiryWhatsAppUrl(
  roomName: string,
  planType: 'monthly' | 'daily',
  tariff: string
): string {
  const planLabel = planType === 'monthly' ? 'Monthly PG Plan' : 'Daily Stay Plan';

  const text = `Hello Nestora Coliving Team,\n\nI am interested in booking accommodation at Nestora Premium Space (HSR Layout):\n\n` +
    `• Room: ${roomName}\n` +
    `• Plan: ${planLabel} (${tariff})\n` +
    `• Location: 71, 27th Main Rd, Sector 1, HSR Layout\n\n` +
    `Please confirm room availability, deposit details, and when I can come for a site visit. Thank you!`;

  return getWhatsAppUrl(text);
}

/**
 * Generate Contact Form WhatsApp dispatch link
 */
export function getContactFormWhatsAppUrl(data: {
  name: string;
  phone: string;
  roomType: string;
  plan: string;
  moveInDate?: string;
  message?: string;
}): string {
  let text = `Hello Nestora Coliving Team,\n\nNew Booking / Visit Enquiry:\n\n` +
    `• Name: ${data.name}\n` +
    `• Mobile: ${data.phone}\n` +
    `• Preference: ${data.roomType}\n` +
    `• Plan Type: ${data.plan}\n`;

  if (data.moveInDate) {
    text += `• Move-in Date: ${data.moveInDate}\n`;
  }

  if (data.message && data.message.trim()) {
    text += `• Note: ${data.message.trim()}\n`;
  }

  text += `\nPlease share current availability and procedure to book.`;

  return getWhatsAppUrl(text);
}

/**
 * Generate quick general enquiry link
 */
export function getGeneralEnquiryWhatsAppUrl(): string {
  const text = `Hello Nestora Coliving Team,\n\nI would like to enquire about room availability and tariffs at Nestora Coliving in HSR Layout Sector 1.\n\nPlease share the details.`;
  return getWhatsAppUrl(text);
}

/**
 * Schedule site visit link
 */
export function getSiteVisitWhatsAppUrl(): string {
  const text = `Hello Nestora Coliving Team,\n\nI would like to schedule an in-person site visit to view the rooms at Nestora Coliving (HSR Layout Sector 1).\n\nPlease let me know available slots today.`;
  return getWhatsAppUrl(text);
}
