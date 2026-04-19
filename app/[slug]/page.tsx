import Image from 'next/image';
import Link from 'next/link';
import Accordion from '../components/Accordion';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import MapSection from '../components/MapSection';
import PointsSection from '../components/PointsSection';
import {
  getAllLocationSlugs,
  getAllPoints,
  getLocation,
  ContentBlock,
} from '../lib/tina';
import { formatText } from '../lib/format-text';

export function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const points = getAllPoints();
  const location = getLocation(slug);

  const point = points.find((p) => p.link === `/${slug}`);

  if (!point || !location) {
    return (
      <div className="w-screen h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold">
          אופס - נראה שהנקודה שחיפשת לא קיימת
        </h1>
        <Link className="underline" href="/">
          חזרה לעמוד הראשי
        </Link>
      </div>
    );
  }

  const blocks = location.contentBlocks ?? [];
  const afterBlocks = location.afterAccordionBlocks ?? [];

  return (
    <div className="flex flex-col bg-[#fcfcf7] min-h-fit w-full">
      <div
        className="min-h-screen w-full items-start flex flex-col px-8 md:px-32 pt-[10rem]"
        dir="rtl"
      >
        <Divider className=" mb-8" />

        {/* Desktop: images left, text right */}
        <div className="hidden md:flex md:flex-row gap-8 mb-10 items-start w-full" dir="ltr">
          <DesktopImages blocks={blocks} title={location.title} />
          <div
            className={`flex flex-col gap-4 w-full ${
              blocks.some((b) => b.blockType === 'image' && b.image)
                ? 'md:w-1/2'
                : ''
            }`}
            dir="rtl"
          >
            <h1 className="text-2xl font-bold">{location.title}</h1>
            <h2 className="text-xl font-bold">{location.subtitle}</h2>
            <DesktopText blocks={blocks} />
            <Accordion items={location.accordions ?? []} />
            <ContentBlocks blocks={afterBlocks} title={location.title} />
          </div>
        </div>

        {/* Mobile: blocks in order */}
        <div className="flex md:hidden flex-col gap-4 mb-10 w-full">
          <h1 className="text-2xl font-bold">{location.title}</h1>
          <h2 className="text-xl font-bold">{location.subtitle}</h2>
          <ContentBlocks blocks={blocks} title={location.title} />
          <Accordion items={location.accordions ?? []} />
          <ContentBlocks blocks={afterBlocks} title={location.title} />
        </div>

        <Divider className=" mb-8" />
        <PointsSection points={points} />
        <MapSection points={points} />
        <Divider className=" mb-8" />
        <Footer />
      </div>
    </div>
  );
}

function ContentBlocks({
  blocks,
  title,
}: {
  blocks: ContentBlock[];
  title: string;
}) {
  if (blocks.length === 0) return null;

  // Check if previous block was also text (to insert divider between consecutive text blocks)
  const isTextBlock = (index: number) =>
    blocks[index]?.blockType === 'text' && blocks[index]?.text;

  return (
    <div className="flex flex-col gap-4 w-full">
      {blocks.map((block, i) => {
        const needsDivider = block.blockType === 'text' && i > 0 && isTextBlock(i - 1);

        if (block.blockType === 'image' && block.image) {
          return (
            <div key={i} className="w-full rounded-lg overflow-hidden">
              <Image
                src={block.image}
                alt={`${title} ${i + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          );
        }
        if (block.blockType === 'text' && block.text) {
          return (
            <div key={i} className="flex flex-col gap-4">
              {needsDivider && <Divider />}
              <p
                className="text-base whitespace-pre-line text-justify"
                dangerouslySetInnerHTML={{ __html: formatText(block.text) }}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

function DesktopImages({
  blocks,
  title,
}: {
  blocks: ContentBlock[];
  title: string;
}) {
  const images = blocks.filter((b) => b.blockType === 'image' && b.image);
  if (images.length === 0) return null;

  return (
    <div className="w-full md:w-1/2">
      <div className="flex flex-col gap-4">
        {images.map((block, i) => (
          <div key={i} className="w-full rounded-lg overflow-hidden">
            <Image
              src={block.image!}
              alt={`${title} ${i + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function DesktopText({ blocks }: { blocks: ContentBlock[] }) {
  const textBlocks = blocks.filter((b) => b.blockType === 'text' && b.text);

  return (
    <div className="flex flex-col gap-4">
      {textBlocks.map((block, i) => (
        <div key={i} className="flex flex-col gap-4">
          {i > 0 && <Divider />}
          <p
            className="text-base whitespace-pre-line text-justify"
            dangerouslySetInnerHTML={{ __html: formatText(block.text!) }}
          />
        </div>
      ))}
    </div>
  );
}
