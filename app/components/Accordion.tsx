'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronDown } from 'lucide-react';
import { formatText } from '../lib/format-text';

interface ContentBlock {
  blockType: 'text' | 'image';
  text?: string;
  image?: string;
}

export interface AccordionItem {
  accordionTitle: string;
  blocks?: ContentBlock[];
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [expanded, setExpanded] = useState<number | false>(false);

  if (!items || items.length === 0) return null;

  const handleChange = (index: number) => {
    setExpanded(expanded === index ? false : index);
  };

  return (
    <div className="flex flex-col w-full" dir="rtl">
      {items.map((item, index) => {
        const isOpen = expanded === index;
        return (
          <div
            key={index}
            className={`border-b border-[#E0DFDC] ${
              index === 0 ? '' : ''
            }`}
          >
            <button
              onClick={() => handleChange(index)}
              className="w-full flex flex-row-reverse items-center gap-1 py-3 transition-colors text-right"
            >
              <span className="font-semibold text-base flex-1">
                {item.accordionTitle}
              </span>
              <div className="flex items-center justify-center w-10 h-10 shrink-0">
                {isOpen ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronLeft className="w-4 h-4" />
                )}
              </div>
            </button>
            <div
              className={`grid transition-all duration-200 ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="ps-4 pb-6 flex flex-col gap-4">
                  {(item.blocks ?? []).map((block, i) => {
                    if (block.blockType === 'image' && block.image) {
                      return (
                        <div
                          key={i}
                          className="w-full rounded-lg overflow-hidden"
                        >
                          <Image
                            src={block.image}
                            alt={`${item.accordionTitle} ${i + 1}`}
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      );
                    }
                    if (block.blockType === 'text' && block.text) {
                      return (
                        <p
                          key={i}
                          className="text-base whitespace-pre-line text-justify"
                          dangerouslySetInnerHTML={{
                            __html: formatText(block.text),
                          }}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
