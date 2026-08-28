import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  id: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  serviceTitle: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  id,
  beforeImage,
  afterImage,
  beforeAlt = 'Before condition',
  afterAlt = 'After transformation',
  serviceTitle,
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="w-full flex flex-col space-y-2.5">
      {/* Interactive Slider Canvas */}
      <div
        id={`slider-${id}`}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#B98252]/30 shadow-md bg-[#3B2118]"
        role="region"
        aria-label={`${serviceTitle} Before and After interactive comparison slider`}
      >
        {/* AFTER Image (Full Background) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={afterImage}
            alt={afterAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover select-none pointer-events-none"
            loading="lazy"
          />
          {/* AFTER Floating Label */}
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#C6A15B] text-[#3B2118] text-[10px] font-sans font-bold tracking-[0.2em] uppercase shadow-md pointer-events-none flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#3B2118]" />
            <span>AFTER</span>
          </div>
        </div>

        {/* BEFORE Image (Clipped by Slider Position) */}
        <div
          className="absolute inset-0 h-full overflow-hidden will-change-[width]"
          style={{ width: `${sliderPosition}%` }}
        >
          <div
            className="absolute inset-0 h-full"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              minWidth: '100%',
            }}
          >
            <img
              src={beforeImage}
              alt={beforeAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none pointer-events-none"
              loading="lazy"
            />
          </div>

          {/* BEFORE Floating Label */}
          <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-sans font-bold tracking-[0.2em] uppercase shadow-md pointer-events-none">
            <span>BEFORE</span>
          </div>
        </div>

        {/* Draggable Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[#C6A15B] shadow-[0_0_12px_rgba(198,161,91,0.9)] pointer-events-none"
          style={{ left: `calc(${sliderPosition}% - 1px)` }}
        >
          {/* Circular Drag Handle with Contrasting Comparison Symbol */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#C6A15B] text-[#3B2118] border-2 border-white shadow-2xl flex items-center justify-center pointer-events-none transition-transform group-active:scale-110">
            <ChevronsLeftRight className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* Explicit User Guidance Label */}
      <div className="flex items-center justify-between px-1 font-sans">
        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#B98252]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B98252]"></span>
          <span>BEFORE ← DRAG → AFTER</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSliderPosition(0)}
            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded transition-colors ${
              sliderPosition === 0
                ? 'bg-[#C6A15B] text-[#3B2118]'
                : 'bg-[#4A2C20]/10 text-[#4A2C20] hover:bg-[#4A2C20]/20'
            }`}
          >
            After
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(50)}
            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded transition-colors ${
              sliderPosition === 50
                ? 'bg-[#C6A15B] text-[#3B2118]'
                : 'bg-[#4A2C20]/10 text-[#4A2C20] hover:bg-[#4A2C20]/20'
            }`}
          >
            Split
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(100)}
            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded transition-colors ${
              sliderPosition === 100
                ? 'bg-[#C6A15B] text-[#3B2118]'
                : 'bg-[#4A2C20]/10 text-[#4A2C20] hover:bg-[#4A2C20]/20'
            }`}
          >
            Before
          </button>
        </div>
      </div>
    </div>
  );
};
