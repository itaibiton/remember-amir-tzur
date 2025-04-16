import React from 'react';
import Image from 'next/image';
import { Image as ImageIcon } from 'lucide-react';
import CarouselSlider from './CarouselSlider';

const CarouselDemo = () => {
    // Sample carousel items
    const carouselItems = [
        <div id="slide1" key="slide1" className="flex flex-col items-center text-center w-full h-full">
            <div className="rounded-lg bg-gray-200 p-4 flex items-center justify-center h-full w-full">
                <ImageIcon className="w-8 h-8 text-[#857F7A]" />
            </div>
            <p className="text-xs text-[#555555]">טקסט קצר עם הסבר על התמונה</p>
        </div>,
        <div id="slide2" key="slide2" className="flex flex-col items-center text-center w-full h-full">
            <div className="rounded-lg bg-gray-200 p-4 flex items-center justify-center h-full w-full">
                <ImageIcon className="w-8 h-8 text-[#857F7A]" />
            </div>
            <p className="text-xs text-[#555555]">טקסט קצר עם הסבר על התמונה</p>
        </div>,
        <div id="slide3" key="slide3" className="flex flex-col items-center text-center w-full h-full">
            <div className="rounded-lg bg-gray-200 p-4 flex items-center justify-center h-full w-full">
                <ImageIcon className="w-8 h-8 text-[#857F7A]" />
            </div>
            <p className="text-xs text-[#555555]">טקסט קצר עם הסבר על התמונה</p>
        </div>,
        <div id="slide4" key="slide4" className="flex flex-col items-center text-center w-full h-full">
            <div className="rounded-lg bg-gray-200 p-4 flex items-center justify-center h-full w-full">
                <ImageIcon className="w-8 h-8 text-[#857F7A]" />
            </div>
            <p className="text-xs text-[#555555]">טקסט קצר עם הסבר על התמונה</p>
        </div>,
    ];

    return (
        <div className="w-full">
            {/* <h2 className="text-[#3c3c3c] text-2xl font-semibold mb-6 text-center">גלריית תמונות</h2> */}
            <CarouselSlider items={carouselItems} />
        </div>
    );
};

export default CarouselDemo; 