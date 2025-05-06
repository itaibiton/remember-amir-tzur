import ContentSection from "./components/ContentSection";
import PointsSection from "./components/PointsSection";
import MapSection from "./components/MapSection";
import LinksSection from "./components/LinksSection";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import { POINTS } from "./data/constants";
export default function Home() {
  return (
    <div className="flex flex-col bg-[#fcfcf7] min-h-fit">
      <div className="min-h-screen w-full items-start flex flex-col px-8 md:px-32 pt-[12rem]" dir="rtl">
        <ContentSection />
        <Divider />
        <PointsSection />
        <MapSection points={POINTS} />
        <Divider />
        <LinksSection />
        <Divider />
        <Footer />
      </div>
    </div>
  );
}