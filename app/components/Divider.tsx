import React from 'react';

interface DividerProps {
    className?: string;
}

const Divider = ({ className }: DividerProps) => {
    return <div className={`h-[1px] w-full bg-[#D5D5D5] ${className}`}></div>;
};

export default Divider; 