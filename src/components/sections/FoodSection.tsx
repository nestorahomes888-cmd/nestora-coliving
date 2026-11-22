import React, { useState, useEffect } from 'react';
import { 
  UtensilsCrossed, 
  Sun, 
  Utensils, 
  Coffee, 
  Moon, 
  Clock, 
  Check, 
  Info, 
  Soup, 
  Salad, 
  ShieldAlert, 
  Flame,
  MessageCircle,
  CalendarDays
} from 'lucide-react';
import { WEEKLY_MENU_DATA, FOOD_FEATURES, DayMenu, MealSlot } from '../../data/foodMenu';
import { getGeneralEnquiryWhatsAppUrl } from '../../utils/whatsapp';

export const FoodSection: React.FC = () => {
  // Determine current day of week to highlight by default
  const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = daysMap[new Date().getDay()] as DayMenu['dayName'];

  const [selectedDay, setSelectedDay] = useState<DayMenu['dayName']>(
    WEEKLY_MENU_DATA.some(d => d.dayName === todayName) ? todayName : 'Monday'
  );

  const activeDayData = WEEKLY_MENU_DATA.find((d) => d.dayName === selectedDay) || WEEKLY_MENU_DATA[0];

  return (
    <section id="food" className="py-20 lg:py-28 bg-cream-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-200 border border-cream-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5 text-gold-dark" />
            <span>Homely 4-Meal Service</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight">
            Nourishing, Fresh & Homestyle Dining
          </h2>
          <p className="mt-4 text-base text-charcoal-600 leading-relaxed">
            Good food is the cornerstone of great living. Our dedicated kitchen staff prepares four wholesome meals daily—balancing comforting North Indian favorites, aromatic South Indian staples, and refreshing evening snacks.
          </p>

          {/* Management / Editable notice as requested */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-charcoal-500 bg-white/80 py-1.5 px-4 rounded-full border border-cream-200 max-w-lg mx-auto">
            <Info className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Representative weekly schedule • Easily updated in <code className="bg-cream-200 px-1 py-0.5 rounded text-[11px]">src/data/foodMenu.ts</code></span>
          </div>
        </div>

        {/* Quality Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {FOOD_FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-cream-200 shadow-xs flex items-start gap-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-cream-100 flex items-center justify-center text-gold-dark shrink-0">
                <FoodIcon name={feat.icon} />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-charcoal-900">
                  {feat.title}
                </h4>
                <p className="text-xs text-charcoal-600 mt-0.5 leading-snug">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Day Selector Tabs */}
        <div className="bg-white rounded-3xl border border-cream-200 shadow-soft p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-cream-200 gap-4">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-gold-dark" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">
                Weekly Meal Schedule
              </h3>
            </div>

            {/* Mon to Sun Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-cream-100 border border-cream-200">
              {WEEKLY_MENU_DATA.map((day) => {
                const isSelected = selectedDay === day.dayName;
                const isToday = day.dayName === todayName;

                return (
                  <button
                    key={day.dayName}
                    type="button"
                    onClick={() => setSelectedDay(day.dayName)}
                    className={`relative px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      isSelected
                        ? 'bg-charcoal-900 text-cream-50 shadow-sm'
                        : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-cream-200/60'
                    }`}
                  >
                    <span>{day.shortDay}</span>
                    {isToday && (
                      <span className={`block text-[9px] uppercase tracking-wider ${isSelected ? 'text-gold' : 'text-emerald-700 font-bold'}`}>
                        Today
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Day Header */}
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-2xl font-bold text-charcoal-900">
                {activeDayData.dayName}'s Menu
              </span>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-cream-100 text-charcoal-700 border border-cream-300">
                {activeDayData.theme}
              </span>
            </div>
            <span className="hidden sm:inline-block text-xs text-charcoal-500">
              Freshly cooked daily on-site
            </span>
          </div>

          {/* 4 Meal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {/* Breakfast */}
            <MealCard
              meal={activeDayData.meals.breakfast}
              colorBorder="border-amber-200"
              colorBadge="bg-amber-50 text-amber-800"
            />

            {/* Lunch */}
            <MealCard
              meal={activeDayData.meals.lunch}
              colorBorder="border-orange-200"
              colorBadge="bg-orange-50 text-orange-800"
            />

            {/* Evening Snacks */}
            <MealCard
              meal={activeDayData.meals.snacks}
              colorBorder="border-rose-200"
              colorBadge="bg-rose-50 text-rose-800"
            />

            {/* Dinner */}
            <MealCard
              meal={activeDayData.meals.dinner}
              colorBorder="border-indigo-200"
              colorBadge="bg-indigo-50 text-indigo-800"
            />
          </div>

          {/* Bottom Footnote & Dietary Enquiry CTA */}
          <div className="mt-8 pt-6 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Pure vegetarian options and egg dishes prepared in distinct designated pans.</span>
            </div>

            <a
              href={getGeneralEnquiryWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-charcoal-800 hover:text-gold-dark font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Ask about special dietary requirements on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const MealCard: React.FC<{
  meal: MealSlot;
  colorBorder: string;
  colorBadge: string;
}> = ({ meal, colorBorder, colorBadge }) => {
  return (
    <div className={`p-5 rounded-2xl bg-cream-50/70 border ${colorBorder} hover:shadow-md transition-all duration-300 flex flex-col justify-between`}>
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-xl bg-white border border-cream-200 flex items-center justify-center text-gold-dark shadow-2xs">
            <MealSlotIcon name={meal.icon} />
          </div>
          <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${colorBadge}`}>
            {meal.name}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-charcoal-500 font-medium mb-2">
          <Clock className="w-3.5 h-3.5 text-gold-dark" />
          <span>{meal.time}</span>
        </div>

        <p className="text-xs text-charcoal-500 italic mb-3">
          {meal.description}
        </p>

        <ul className="space-y-1.5 text-xs text-charcoal-800">
          {meal.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-1.5 shrink-0" />
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 pt-3 border-t border-cream-200/80 text-[11px] text-charcoal-500 flex items-center gap-1">
        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
        <span>Unlimited servings in dining hall</span>
      </div>
    </div>
  );
};

const MealSlotIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'Sun':
      return <Sun className="w-4 h-4 text-amber-500" />;
    case 'Utensils':
      return <Utensils className="w-4 h-4 text-orange-500" />;
    case 'Coffee':
      return <Coffee className="w-4 h-4 text-rose-500" />;
    case 'Moon':
      return <Moon className="w-4 h-4 text-indigo-500" />;
    default:
      return <UtensilsCrossed className="w-4 h-4" />;
  }
};

const FoodIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'Soup':
      return <Soup className="w-5 h-5" />;
    case 'Salad':
      return <Salad className="w-5 h-5" />;
    case 'ShieldAlert':
      return <ShieldAlert className="w-5 h-5" />;
    case 'Flame':
      return <Flame className="w-5 h-5" />;
    default:
      return <UtensilsCrossed className="w-5 h-5" />;
  }
};
