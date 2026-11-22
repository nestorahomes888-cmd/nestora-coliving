import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Sun, 
  Utensils, 
  Coffee, 
  Moon, 
  Clock, 
  Check, 
  CalendarDays,
  MessageCircle,
  Soup,
  Salad,
  ShieldAlert,
  Flame
} from 'lucide-react';
import { WEEKLY_MENU_DATA, FOOD_FEATURES, DayMenu, MealSlot } from '../../data/foodMenu';
import { getGeneralEnquiryWhatsAppUrl } from '../../utils/whatsapp';

export const FoodSection: React.FC = () => {
  const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = daysMap[new Date().getDay()] as DayMenu['dayName'];

  const [selectedDay, setSelectedDay] = useState<DayMenu['dayName']>(
    WEEKLY_MENU_DATA.some(d => d.dayName === todayName) ? todayName : 'Monday'
  );

  // Active meal tab on mobile view
  const [mobileMealTab, setMobileMealTab] = useState<'breakfast' | 'lunch' | 'snacks' | 'dinner'>('breakfast');

  const activeDayData = WEEKLY_MENU_DATA.find((d) => d.dayName === selectedDay) || WEEKLY_MENU_DATA[0];

  return (
    <section id="food" className="py-16 sm:py-24 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-800">
            Included in All Stays
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1">
            4 Homely Meals Everyday
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            Wholesome South & North Indian meals cooked fresh on-site with 100% RO purified water.
          </p>
        </div>

        {/* Feature Badges - 2x2 grid on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-8">
          {FOOD_FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs flex items-center gap-2.5 sm:gap-3"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                <FoodIcon name={feat.icon} />
              </div>
              <div>
                <h4 className="font-extrabold text-stone-900 text-xs sm:text-sm">
                  {feat.title}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-stone-500 leading-tight mt-0.5 line-clamp-1 sm:line-clamp-2">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Day Selector Container */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-card p-4 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b border-stone-200 gap-3">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 text-amber-800" />
              <h3 className="text-lg sm:text-2xl font-extrabold text-stone-900">
                Weekly Dining Timetable
              </h3>
            </div>

            {/* Swipeable Days Bar - Smooth Horizontal Scroll on Mobile */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 px-1 bg-stone-100 rounded-2xl border border-stone-200">
              {WEEKLY_MENU_DATA.map((day) => {
                const isSelected = selectedDay === day.dayName;
                const isToday = day.dayName === todayName;

                return (
                  <button
                    key={day.dayName}
                    type="button"
                    onClick={() => setSelectedDay(day.dayName)}
                    className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all shrink-0 whitespace-nowrap ${
                      isSelected
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
                    }`}
                  >
                    <span>{day.shortDay}</span>
                    {isToday && (
                      <span className={`block text-[9px] uppercase tracking-wider ${isSelected ? 'text-amber-300' : 'text-emerald-700 font-extrabold'}`}>
                        Today
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Day Info */}
          <div className="py-3 sm:py-4 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-2xl font-extrabold text-stone-900">
                {activeDayData.dayName}'s Menu
              </span>
              <span className="text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                {activeDayData.theme}
              </span>
            </div>
            <span className="text-[11px] font-bold text-emerald-700">
              ✓ All 4 meals included
            </span>
          </div>

          {/* Mobile Meal Tabs (for screen < md) */}
          <div className="md:hidden flex items-center gap-1 p-1 bg-stone-100 rounded-xl mb-4 border border-stone-200">
            <button
              type="button"
              onClick={() => setMobileMealTab('breakfast')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-extrabold text-center transition-all ${
                mobileMealTab === 'breakfast' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600'
              }`}
            >
              Breakfast
            </button>
            <button
              type="button"
              onClick={() => setMobileMealTab('lunch')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-extrabold text-center transition-all ${
                mobileMealTab === 'lunch' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600'
              }`}
            >
              Lunch
            </button>
            <button
              type="button"
              onClick={() => setMobileMealTab('snacks')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-extrabold text-center transition-all ${
                mobileMealTab === 'snacks' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600'
              }`}
            >
              Snacks
            </button>
            <button
              type="button"
              onClick={() => setMobileMealTab('dinner')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-extrabold text-center transition-all ${
                mobileMealTab === 'dinner' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600'
              }`}
            >
              Dinner
            </button>
          </div>

          {/* Mobile Single Card View */}
          <div className="md:hidden">
            {mobileMealTab === 'breakfast' && (
              <MealCard meal={activeDayData.meals.breakfast} badgeColor="bg-amber-100 text-amber-900" />
            )}
            {mobileMealTab === 'lunch' && (
              <MealCard meal={activeDayData.meals.lunch} badgeColor="bg-orange-100 text-orange-900" />
            )}
            {mobileMealTab === 'snacks' && (
              <MealCard meal={activeDayData.meals.snacks} badgeColor="bg-rose-100 text-rose-900" />
            )}
            {mobileMealTab === 'dinner' && (
              <MealCard meal={activeDayData.meals.dinner} badgeColor="bg-indigo-100 text-indigo-900" />
            )}
          </div>

          {/* Desktop/Tablet 4-Card Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            <MealCard meal={activeDayData.meals.breakfast} badgeColor="bg-amber-100 text-amber-900" />
            <MealCard meal={activeDayData.meals.lunch} badgeColor="bg-orange-100 text-orange-900" />
            <MealCard meal={activeDayData.meals.snacks} badgeColor="bg-rose-100 text-rose-900" />
            <MealCard meal={activeDayData.meals.dinner} badgeColor="bg-indigo-100 text-indigo-900" />
          </div>

          {/* Footnote & Inquiry link */}
          <div className="mt-6 pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-600">
            <span>Special dietary preferences? We prepare vegetarian options separately.</span>
            <a
              href={getGeneralEnquiryWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask about meals on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const MealCard: React.FC<{
  meal: MealSlot;
  badgeColor: string;
}> = ({ meal, badgeColor }) => {
  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${badgeColor}`}>
            {meal.name}
          </span>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-stone-500">
            <Clock className="w-3 h-3 text-amber-800" />
            <span>{meal.time}</span>
          </div>
        </div>

        <ul className="space-y-1.5 text-xs text-stone-800 mt-3">
          {meal.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-700 mt-1.5 shrink-0" />
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-200/80 text-[11px] text-stone-500 flex items-center gap-1">
        <Check className="w-3 h-3 text-emerald-600" />
        <span>Unlimited servings in dining hall</span>
      </div>
    </div>
  );
};

const FoodIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'Soup':
      return <Soup className="w-4 h-4" />;
    case 'Salad':
      return <Salad className="w-4 h-4" />;
    case 'ShieldAlert':
      return <ShieldAlert className="w-4 h-4" />;
    case 'Flame':
      return <Flame className="w-4 h-4" />;
    default:
      return <UtensilsCrossed className="w-4 h-4" />;
  }
};
