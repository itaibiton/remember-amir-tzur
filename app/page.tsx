import ContentSection from "./components/ContentSection";
import PointsSection from "./components/PointsSection";
import MapSection from "./components/MapSection";
import LinksSection from "./components/LinksSection";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import { POINTS } from "./data/constants";
export default function Home() {
  return (
    <div className="flex flex-col bg-[#fcfcf7] min-h-fit max-w-full overflow-x-hidden">
      <div className="min-h-screen w-full items-start flex flex-col px-4 md:px-8 lg:px-32 pt-[10rem]" dir="rtl">
        <Divider className=" mb-8" />
        <ContentSection />
        <Divider className=" mb-8" />
        <PointsSection />
        <MapSection points={POINTS} />
        <Divider className=" mb-8" />
        <LinksSection />
        <Divider className=" mb-8" />
        <Footer />
      </div>
    </div>
  );
}