import React from 'react';
import Link from 'next/link';

interface ExternalLinkCardProps {
    link: {
        title: string;
        description: string;
        link: string;
    };
}

const ExternalLinkCard = ({ link }: ExternalLinkCardProps) => {
    return (
        <Link target="_blank" href={link?.link} className="flex flex-col border border-[#E0DFDC] bg-[#F7F6F2] rounded-[24px] p-4 gap-2">
            <p className="text-[#3c3c3c] text-sm md:text-base underline">{link?.title}</p>
            <p className="text-[#888989] text-sm">{link?.description}</p>
        </Link>
    );
};

export default ExternalLinkCard; 