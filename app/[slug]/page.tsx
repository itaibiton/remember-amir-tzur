'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import MapSection from '../components/MapSection';
import PointsSection from '../components/PointsSection';
import {
  POINTS,
  SLUG_STATIC_CONTENT,
  SlugStaticContent,
} from '../data/constants';

export default function Page() {
  const params = useParams<{ slug: string }>();

  const point = POINTS.find(
    (point) => point.link.split('/').pop() === params.slug
  );

  const staticContent = SLUG_STATIC_CONTENT.find(
    (content) => content.link === params.slug
  );

  if (!point || !staticContent) {
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

  return (
    <div className="flex flex-col bg-[#fcfcf7] min-h-fit w-full">
      <div
        className="min-h-screen w-full items-start flex flex-col px-8 md:px-32 pt-[10rem]"
        dir="rtl"
      >
        <Divider className=" mb-8" />
        {/* Desktop layout */}
        <div
          className="hidden md:flex md:flex-row gap-8 mb-10 items-start"
          dir="ltr"
        >
          {/* Left side - Images (50%) */}
          {staticContent.images && staticContent.images.length > 0 && (
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-4">
                {staticContent.images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${staticContent.title} ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right side - Text (50%) */}
          <div
            className={`flex flex-col gap-4 w-full ${
              staticContent.images && staticContent.images.length > 0
                ? 'md:w-1/2'
                : ''
            }`}
            dir="rtl"
          >
            <AboutSection staticContent={staticContent} />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden flex-col gap-6 mb-10" dir="rtl">
          <MobileContentWithImages staticContent={staticContent} />
        </div>
        <Divider className=" mb-8" />
        <PointsSection />
        <MapSection points={POINTS} />
        <Divider className=" mb-8" />
        <Footer />
      </div>
    </div>
  );
}

const MobileContentWithImages = ({
  staticContent,
}: {
  staticContent: SlugStaticContent;
}) => {
  if (staticContent.images && staticContent.images.length > 0) {
    const paragraphs = staticContent.content
      .trim()
      .split('\n\n')
      .filter((p) => p.trim());
    const images = staticContent.images;

    // Calculate how to distribute images throughout the text
    const imagePositions: number[] = [];

    // Distribute images only in the first 3/4 of the text
    const maxPosition = Math.max(2, Math.floor(paragraphs.length * 0.75));
    for (let i = 0; i < images.length; i++) {
      if (images.length === 1) {
        imagePositions.push(1);
      } else if (images.length === 2) {
        imagePositions.push(i === 0 ? 1 : 2);
      } else {
        const position = Math.floor(
          (maxPosition * (i + 1)) / (images.length + 1)
        );
        imagePositions.push(Math.max(1, position));
      }
    }

    console.log('Debug:', {
      paragraphs: paragraphs.length,
      maxPosition,
      imagePositions,
      images: images.length,
    });

    const content = [];
    let imageIndex = 0;

    // Add header first
    content.push(
      <div key="header" className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{staticContent.title}</h1>
        <h2 className="text-xl font-bold">{staticContent.subtitle}</h2>
      </div>
    );

    // Interleave paragraphs and images
    paragraphs.forEach((paragraph, index) => {
      // Add paragraph
      content.push(
        <p
          key={`paragraph-${index}`}
          dangerouslySetInnerHTML={{ __html: paragraph }}
          className="text-base whitespace-pre-line text-justify"
        />
      );

      // Check if we should add an image after this paragraph
      if (
        imageIndex < images.length &&
        imagePositions[imageIndex] === index + 1
      ) {
        content.push(
          <div
            key={`image-${imageIndex}`}
            className="relative w-full rounded-lg overflow-hidden"
          >
            <Image
              src={images[imageIndex]}
              alt={`${staticContent.title} ${imageIndex + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        );
        imageIndex++;
      }
    });

    return <div className="flex flex-col gap-6 text-base">{content}</div>;
  }

  // No images, show regular content
  return <AboutSection staticContent={staticContent} />;
};

const AboutSection = ({
  staticContent,
}: {
  staticContent: SlugStaticContent;
}) => {
  return (
    <div className="flex flex-col gap-4 text-base">
      <h1 className="text-2xl font-bold">{staticContent.title}</h1>
      <h2 className="text-xl font-bold">{staticContent.subtitle}</h2>
      <p
        dangerouslySetInnerHTML={{ __html: staticContent.content }}
        className="text-base whitespace-pre-line text-justify"
      />
    </div>
  );
};
