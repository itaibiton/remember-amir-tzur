'use client';

import MarkerSvg from '@/public/market-svg';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface Point {
  title: string;
  link: string;
  location: {
    lat: string;
    long: string;
  };
  disabled?: boolean;
}

const STYLE_CONFIG = {
  mobile: {
    padding: 'py-4 px-3',
    gap: 'gap-2',
    fontSize: 'text-[14px]',
  },
  desktop: {
    padding: 'py-4 px-6',
    gap: 'gap-3',
    fontSize: 'text-lg',
  },
};

const PointCard = ({ point }: { point: Point }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const handleClick = (e: React.MouseEvent) => {
    if (point?.disabled) {
      e.preventDefault();
      return false;
    }
  };

  const config = isMobile ? STYLE_CONFIG.mobile : STYLE_CONFIG.desktop;

  return (
    <Link
      href={point?.link}
      onClick={handleClick}
      className={clsx(
        `flex border border-[#E0DFDC] bg-[#F7F6F2] rounded-[24px] ${config.padding} ${config.gap} ${config.fontSize} font-semibold transition-colors`,
        {
          'opacity-50 pointer-events-none': point?.disabled,
          'hover:bg-[#EEEDE7] active:bg-[#D6D5CA]': !point?.disabled,
        }
      )}
    >
      <MarkerSvg />
      <p className="text-justify">{point?.title}</p>
    </Link>
  );
};

export default PointCard;
