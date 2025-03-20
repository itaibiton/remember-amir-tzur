// src/app/(blog)/page.tsx

import { Posts } from "@/components/Posts";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { PortableText } from '@portabletext/react';

// Updated homepage query to include header content
const HOMEPAGE_QUERY = `
  *[_type == "homepage"][0] {
    title,
    subtitle,
    mainContent,
    heroImage {
      asset->{
        _id,
        url
      },
      alt
    },
    seo
  }
`;

export default async function Page() {
    const { data: posts } = await sanityFetch({
        query: POSTS_QUERY,
    });

    // Fetch homepage content
    const { data: homepage } = await sanityFetch({
        query: HOMEPAGE_QUERY,
    });

    return <div className="flex flex-col w-full h-full border border-red-500 overflow-hidden">
        <div className="flex gap-4 h-[6.0625rem]">
            <div className="border w-[3.9375rem] flex items-center justify-center">Logo</div>
            <div className="flex flex-col border">
                <h1 className="text-[42px] font-semibold text-[#1A1C20]">
                    {homepage?.title || "״שלא נצא בורים״"}
                </h1>
                <p className="font-medium text-[#3c3c3c] text-2xl">
                    {homepage?.subtitle || "פרויקט הנצחה לזכרו של סרן אמיר צור"}
                </p>
            </div>
        </div>
        <div className="flex w-full h-full flex-col-reverse lg:flex-row">
            <HomePageContent content={homepage?.mainContent} />
            <div className="w-full border flex items-center justify-center h-full">
                {homepage?.heroImage?.asset?.url ? (
                    <img
                        src={homepage.heroImage.asset.url}
                        alt={homepage.heroImage.alt || "Hero image"}
                        className="object-cover w-full h-full"
                    />
                ) : (
                    "Image"
                )}
            </div>
        </div>
        {/* <Posts posts={posts} /> */}
    </div>
}

const HomePageContent = ({ content }: { content: any }) => {
    if (!content) {
        return (
            <>Error loading content</>
        );
    }

    return (
        <div className="w-full border h-full prose prose-lg">
            <PortableText value={content} />
        </div>
    );
}

