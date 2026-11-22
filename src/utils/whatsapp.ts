import { RentalDuration } from '../data/rooms';

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
 * Generate room-specific WhatsApp enquiry link with Room Type + Duration
 */
export function getRoomEnquiryWhatsAppUrl(
  roomName: string,
  duration: RentalDuration,
  userMessage?: string
): string {
  const durationLabel = 
    duration === 'daily' ? 'Daily' :
    duration === 'weekly' ? 'Weekly' : 'Monthly';

  let text = `Hello Nestora Coliving Team,\n\nI am interested in enquiring about accommodation at Nestora Premium Space (HSR Layout):\n\n` +
    `• Room Type: ${roomName}\n` +
    `• Preferred Duration: ${durationLabel} Stay\n`;

  if (userMessage && userMessage.trim()) {
    text += `• Note / Question: ${userMessage.trim()}\n`;
  }

  text += `\nPlease share current availability, tariff details and procedure to schedule a visit. Thank you!`;

  return getWhatsAppUrl(text);
}

/**
 * Generate Contact Form WhatsApp dispatch link
 */
export function getContactFormWhatsAppUrl(data: {
  name: string;
  phone: string;
  roomType: string;
  duration: string;
  moveInDate?: string;
  message?: string;
}): string {
  let text = `Hello Nestora Coliving Team,\n\nI would like to enquire about staying at Nestora Coliving Premium Space:\n\n` +
    `• Name: ${data.name}\n` +
    `• Phone: ${data.phone}\n` +
    `• Room Preference: ${data.roomType}\n` +
    `• Stay Duration: ${data.duration}\n`;

  if (data.moveInDate) {
    text += `• Tentative Move-in Date: ${data.moveInDate}\n`;
  }

  if (data.message && data.message.trim()) {
    text += `• Additional Message: ${data.message.trim()}\n`;
  }

  text += `\nPlease let me know the current status and booking steps.`;

  return getWhatsAppUrl(text);
}

/**
 * Generate general enquiry link
 */
export function getGeneralEnquiryWhatsAppUrl(): string {
  const text = `Hello Nestora Coliving Team,\n\nI came across your website and would like to know more about room availability and pricing at Nestora Coliving, HSR Layout Sector 1.\n\nPlease share the details.`;
  return getWhatsAppUrl(text);
}

/**
 * Generate site visit scheduling link
 */
export function getSiteVisitWhatsAppUrl(): string {
  const text = `Hello Nestora Coliving Team,\n\nI would like to schedule an in-person site visit / property tour of Nestora Coliving in HSR Layout.\n\nPlease let me know suitable visiting hours.`;
  return getWhatsAppUrl(text);
}
