import React from 'react';
import Link from 'next/link';
import MarkerSvg from "@/public/market-svg";
import clsx from 'clsx';
export interface Point {
    title: string;
    link: string;
    location: {
        lat: string;
        long: string;
    };
    disabled?: boolean;
}

const PointCard = ({ point }: { point: Point }) => {
    return (
        <Link
            href={point?.disabled ? '#' : point?.link} className={clsx(`flex border border-[#E0DFDC] bg-[#F7F6F2] rounded-[24px] py-4 px-6 gap-2 text-base md:text-lg`, {
                'opacity-50': point?.disabled
            })}>
            <MarkerSvg />
            <p>{point?.title}</p>
        </Link>
    );
};

export default PointCard; 