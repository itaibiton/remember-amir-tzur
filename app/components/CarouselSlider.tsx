'use client'

import React, { useState, useEffect } from 'react';

interface CarouselSliderProps {
    items: React.ReactNode[];
    autoPlay?: boolean;
    interval?: number;
    className?: string;
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({
    items,
    autoPlay = true,
    interval = 5000,
    className = '',
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!autoPlay) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, items.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className={`relative w-full rounded-[24px]  ${className}`}>
            {/* Carousel container */}
            <div
                className="flex transition-transform duration-500 ease-in-out h-[400px]"
                style={{ transform: `translateX(${currentIndex * 100}%)` }}
                dir="ltr"
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-full flex-shrink-0 flex items-center justify-center p-6"
                        dir="rtl"
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Navigation dots */}
            <div className="absolute -bottom-4 z-20 left-1/2 -translate-x-1/2 items-center flex justify-center gap-1.5 bg-[#D9D9D9] rounded-xl w-[72px] h-[24px]">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-[#FFFFFF]'
                            : 'bg-[#E7E7E7]'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarouselSlider; 