// src/app/(blog)/page.tsx

import { Posts } from "@/components/Posts";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
    const { data: posts } = await sanityFetch({
        query: POSTS_QUERY,
    });

    return <div className="flex flex-col w-full pr-[9.75rem] pl-[7.25rem] pt-[3.75rem] h-full pb-10">
        <div className="flex gap-4 h-[6.0625rem]">
            <div className="border w-[3.9375rem] flex items-center justify-center">Logo</div>
            <div className="flex flex-col border">
                <h1 className="text-[42px] font-semibold text-[#1A1C20]">״שלא נצא בורים״</h1>
                <p className="font-medium text-[#3c3c3c] text-2xl">פרויקט הנצחה לזכרו של סרן אמיר צור</p>
            </div>
        </div>
        <div className="flex w-full h-full">
            <HomePageBullets />
            <div className="w-full border flex items-center justify-center">Image</div>
        </div>
        {/* <Posts posts={posts} /> */}

    </div>
}


const HomePageBullets = () => {
    return <p className="w-full border">
        אתר זה מוקדש לזכרו של סרן אמיר צור, שנהרג ב-7 באוקטובר 2023 בלחימה בכפר עזה.
        <br />
        אמיר נולד ב-1994 בכפר עזה וגר בעיר שער עזה.
        <br />
        <br />
        גד
    </p>
}