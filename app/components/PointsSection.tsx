import React from 'react';
import { POINTS } from '../data/constants';
import PointCard from './PointCard';

const PointsSection = () => {
    return (
        <>
            <p className="text-[#3c3c3c] text-2xl font-semibold">הנקודות בפרויקט</p>
            <p className="text-[#3c3c3c] text-base font-normal mb-6">בחרו נקודה כדי לדעת מה החיבור של אמיר אליה.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-15 w-full">
                {POINTS.map((point, index) => (
                    <PointCard key={`${index}-point`} point={point} />
                ))}
            </div>
        </>
    );
};

export default PointsSection; 