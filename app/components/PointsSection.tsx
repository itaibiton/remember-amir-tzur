import React from 'react';
import PointCard, { Point } from './PointCard';

const PointsSection = ({ points }: { points: Point[] }) => {
  return (
    <>
      <p className="text-[#3c3c3c] text-2xl font-semibold">הנקודות בפרויקט</p>
      <p className="text-[#3c3c3c] text-base font-normal mb-6">
        בחרו את הנקודה בה אתם נמצאים
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-15 w-full">
        {points.map((point, index) => (
          <PointCard key={`${index}-point`} point={point} />
        ))}
      </div>
    </>
  );
};

export default PointsSection;
