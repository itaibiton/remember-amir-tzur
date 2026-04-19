import React from 'react';
import Image from 'next/image';

interface Section {
  title?: string | null;
  content?: string | null;
}

const ContentSection = ({ sections }: { sections: Section[] }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full gap-4 md:gap-16 justify-between">
      <div className="flex flex-col w-full md:w-1/2 gap-8 pb-8">
        {sections.map((item, index) => (
          <div key={`${index}-item-content`} className="flex flex-col">
            <p className="font-medium">{item?.title}</p>
            <p className="text-justify">{item?.content}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col h-fit w-full md:w-1/2 items-center justify-center relative">
        <div
          className="absolute w-[552px] h-[575px] rounded-full blur-3xl opacity-20 md:opacity-30 z-0"
          style={{ background: '#FFE9A7' }}
        />
        <Image
          className="relative z-10"
          alt="amir-logo"
          src="/Amir-hero-clean.png"
          width="552"
          height="575"
        />
      </div>
    </div>
  );
};

export default ContentSection;
