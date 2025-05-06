import React from 'react';
import Image from 'next/image';
import { STATIC_CONTENT } from '../data/constants';

const ContentSection = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row w-full gap-4 md:gap-16 justify-between">
            <div className="flex flex-col w-full md:w-1/2 gap-8 pb-8">
                {STATIC_CONTENT.map((item, index) => (
                    <div key={`${index}-item-content`} className="flex flex-col">
                        <p className="font-medium">{item?.title}</p>
                        <p>{item?.content}</p>
                    </div>
                ))}
                {/* <p>יהי זכרו נצור בליבנו לעד.</p> */}
            </div>
            <div className="flex flex-col h-fit w-full md:w-1/2 items-center">
                <Image alt="amir-logo" src="/Amir-hero-image.png" width="552" height="575" />
            </div>
        </div>
    );
};

export default ContentSection; 