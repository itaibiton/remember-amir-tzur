import React from 'react';
import Link from 'next/link';
import MarkerSvg from "@/public/market-svg";

interface PointCardProps {
    point: {
        title: string;
        link: string;
    };
}

const PointCard = ({ point }: PointCardProps) => {
    return (
        <Link href={point?.link} className="flex border border-[#E0DFDC] bg-[#F7F6F2] rounded-[24px] py-4 px-6 gap-2 text-base md:text-lg">
            <MarkerSvg />
            <p>{point?.title}</p>
        </Link>
    );
};

export default PointCard; 