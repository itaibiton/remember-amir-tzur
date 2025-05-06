import { Image as ImageIcon } from "lucide-react"
import Footer from "../components/Footer"
import Divider from "../components/Divider"
import MapSection from "../components/MapSection"
import PointsSection from "../components/PointsSection"
import CarouselDemo from "../components/CarouselDemo"
import { POINTS, SLUG_STATIC_CONTENT } from "../data/constants";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {

    const point = POINTS.find((point) => point.link.split('/').pop() === params.slug);

    const staticContent = SLUG_STATIC_CONTENT.find((content) => content.link === params.slug);

    if (!point || !staticContent) {
        return <div className="w-screen h-screen flex items-center justify-center flex-col gap-4">
            <h1 className="text-2xl font-bold">אופס - נראה שהנקודה שחיפשת לא קיימת</h1>
            <Link className="underline" href="/">חזרה לעמוד הראשי</Link>
        </div>;
    }

    return <div className="flex flex-col bg-[#fcfcf7] min-h-fit w-full">
        <div className="min-h-screen w-full items-start flex flex-col px-8 xl:px-32 pt-[12rem]" dir="rtl">
            <div className="flex flex-col xl:flex-row gap-8 mb-10">
                {/* <div className="flex flex-col gap-4 w-full xl:w-1/2"> */}
                {/* For now, no images */}
                <div className="flex flex-col gap-4 w-full">
                    <AboutSection staticContent={staticContent} />
                </div>
                {/* <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full xl:w-1/2 ">
                    <div className="flex xl:hidden">
                        <CarouselDemo />
                    </div>
                    {[1, 2, 3, 4].map((item) => (
                        <div className="flex-col gap-2 w-full h-full hidden xl:flex" key={item}>
                            <div className="rounded-lg bg-gray-200 p-4 flex items-center justify-center h-full w-full">
                                <ImageIcon className="w-8 h-8 text-[#857F7A]" />
                            </div>
                            <p className="text-xs text-[#555555]">טקסט קצר עם הסבר על התמונה</p>
                        </div>
                    ))}
                </div> */}
            </div>
            <Divider />
            <PointsSection />
            <MapSection points={POINTS} />
            <Divider />
            <Footer />
        </div>
    </div>
}


const AboutSection = ({ staticContent }: { staticContent: any }) => {
    return <div className="flex flex-col gap-4 text-base">
        <h1 className="text-2xl font-bold">{staticContent.title}</h1>
        <h2 className="text-xl font-bold">{staticContent.subtitle}</h2>
        <p
            dangerouslySetInnerHTML={{ __html: staticContent.content }}
            className="text-base whitespace-pre-line"
        />
    </div>
}