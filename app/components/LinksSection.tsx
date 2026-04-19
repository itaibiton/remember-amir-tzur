import React from 'react';
import ExternalLinkCard from './ExternalLinkCard';

interface ExternalLink {
  title: string;
  description: string;
  link: string;
}

const LinksSection = ({ links }: { links: ExternalLink[] }) => {
  return (
    <>
      <p className="text-[#3c3c3c] text-2xl font-semibold">קריאה נוספת</p>
      <p className="text-[#3c3c3c] text-base font-normal mb-6">
        קישורים לכתבות וחומרים על אמיר
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-15">
        {links.map((link, index) => (
          <ExternalLinkCard key={`${index}-link`} link={link} />
        ))}
      </div>
    </>
  );
};

export default LinksSection;
