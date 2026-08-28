import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Edit3, Check, RotateCcw } from 'lucide-react';
import { REVIEWS_DATA } from '../data';
import { ReviewItem } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    try {
      const saved = localStorage.getItem('sf_sofa_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === 3) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return REVIEWS_DATA;
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTexts, setEditingTexts] = useState<string[]>(reviews.map((r) => r.reviewText));

  useEffect(() => {
    setEditingTexts(reviews.map((r) => r.reviewText));
  }, [reviews]);

  const handleSaveReviews = () => {
    const updated = reviews.map((r, i) => ({
      ...r,
      reviewText: editingTexts[i] || 'Add verified customer review here.',
    }));
    setReviews(updated);
    try {
      localStorage.setItem('sf_sofa_reviews', JSON.stringify(updated));
    } catch {
      // ignore
    }
    setIsEditing(false);
  };

  const handleResetReviews = () => {
    setReviews(REVIEWS_DATA);
    setEditingTexts(REVIEWS_DATA.map((r) => r.reviewText));
    try {
      localStorage.removeItem('sf_sofa_reviews');
    } catch {
      // ignore
    }
    setIsEditing(false);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      id="reviews"
      className="py-16 sm:py-20 bg-[#3B2118] text-[#FFF8ED] relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#B98252]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-sans font-bold tracking-[0.3em] uppercase text-[#C6A15B] border-b border-[#B98252]/40 pb-1.5 inline-block mb-3">
            Customer Reviews
          </span>

          <h2
            id="reviews-heading"
            className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#FFF8ED] tracking-tight"
          >
            Verified Client Stories
          </h2>

          <p className="text-base sm:text-lg text-[#FFF8ED]/75 leading-relaxed font-sans mt-3">
            Authentic feedback from homeowners across Delhi and Noida.
          </p>

          {/* Quick Owner Edit Trigger (For updating verified testimonials) */}
          <div className="mt-4 flex items-center justify-center gap-2 font-sans">
            {!isEditing ? (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="text-[11px] font-bold uppercase tracking-wider text-[#C6A15B]/75 hover:text-[#C6A15B] flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#C6A15B]/30 hover:border-[#C6A15B]/60 transition-colors"
                title="Business owner can replace placeholder text with customer feedback"
              >
                <Edit3 className="w-3 h-3" />
                <span>Edit Review Statements</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSaveReviews}
                  className="text-xs font-bold uppercase tracking-wider text-[#3B2118] bg-[#C6A15B] hover:bg-[#d4af66] px-4 py-1.5 rounded-full flex items-center gap-1"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetReviews}
                  className="text-xs font-bold uppercase tracking-wider text-[#FFF8ED]/80 hover:text-white bg-[#4A2C20] px-4 py-1.5 rounded-full flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Default</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Desktop View: Exactly 3 Distinct Customer Review Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((item, index) => (
            <div
              key={item.id}
              id={`review-card-${index + 1}`}
              className="rounded-2xl bg-[#4A2C20]/60 border border-[#B98252]/30 p-8 flex flex-col justify-between hover:border-[#C6A15B] transition-all duration-300 shadow-lg group"
            >
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#C6A15B]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C6A15B]" />
                  ))}
                </div>

                {/* Customer Review Body */}
                {isEditing ? (
                  <div className="space-y-2">
                    <label className="text-[11px] text-[#C6A15B] font-sans font-semibold uppercase tracking-wider">
                      Review text for {item.name}:
                    </label>
                    <textarea
                      value={editingTexts[index]}
                      onChange={(e) => {
                        const newTexts = [...editingTexts];
                        newTexts[index] = e.target.value;
                        setEditingTexts(newTexts);
                      }}
                      className="w-full h-28 p-2.5 rounded-lg bg-[#3B2118] text-[#FFF8ED] text-sm border border-[#C6A15B]/40 focus:outline-none focus:ring-1 focus:ring-[#C6A15B]"
                    />
                  </div>
                ) : (
                  <blockquote className="text-base text-[#FFF8ED]/90 italic font-sans leading-relaxed min-h-[72px]">
                    “{item.reviewText}”
                  </blockquote>
                )}
              </div>

              {/* Customer Attribution */}
              <div className="pt-6 mt-6 border-t border-[#B98252]/20 flex items-center justify-between">
                <div>
                  <h3 className="font-editorial text-xl font-medium text-[#FFF8ED] group-hover:text-[#C6A15B] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[11px] font-sans uppercase tracking-wider text-[#C6A15B] font-bold mt-0.5">
                    {item.location} • Verified Client
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#3B2118] border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B]">
                  <Quote className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Swipeable / Carousel of Exactly 3 Customer Cards */}
        <div className="md:hidden">
          <div className="relative">
            <div
              id={`review-card-mobile-${activeIndex + 1}`}
              className="rounded-2xl bg-[#4A2C20]/80 border border-[#B98252]/40 p-6 shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#C6A15B]">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C6A15B]" />
                  ))}
                </div>
                <span className="text-xs text-[#C6A15B] font-bold">
                  {activeIndex + 1} of 3
                </span>
              </div>

              {isEditing ? (
                <div className="space-y-2">
                  <label className="text-xs text-[#C6A15B] font-semibold">
                    Review text for {reviews[activeIndex].name}:
                  </label>
                  <textarea
                    value={editingTexts[activeIndex]}
                    onChange={(e) => {
                      const newTexts = [...editingTexts];
                      newTexts[activeIndex] = e.target.value;
                      setEditingTexts(newTexts);
                    }}
                    className="w-full h-24 p-2.5 rounded-lg bg-[#3B2118] text-[#FFF8ED] text-sm border border-[#C6A15B]/40 focus:outline-none"
                  />
                </div>
              ) : (
                <blockquote className="text-base text-[#FFF8ED]/95 italic leading-relaxed min-h-[60px]">
                  “{reviews[activeIndex].reviewText}”
                </blockquote>
              )}

              <div className="pt-4 border-t border-[#B98252]/20 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-luxury font-bold text-base text-[#FFF8ED]">
                    {reviews[activeIndex].name}
                  </h3>
                  <p className="text-xs text-[#C6A15B]">
                    {reviews[activeIndex].location} • Verified Client
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#3B2118] border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B]">
                  <Quote className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-4">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2.5 rounded-full bg-[#4A2C20] border border-[#C6A15B]/40 text-[#FFF8ED] hover:bg-[#C6A15B] hover:text-[#3B2118] transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      activeIndex === i ? 'w-6 bg-[#C6A15B]' : 'w-2 bg-[#FFF8ED]/30'
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                className="p-2.5 rounded-full bg-[#4A2C20] border border-[#C6A15B]/40 text-[#FFF8ED] hover:bg-[#C6A15B] hover:text-[#3B2118] transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
