import ContentSection from './components/ContentSection';
import PointsSection from './components/PointsSection';
import MapSection from './components/MapSection';
import LinksSection from './components/LinksSection';
import Footer from './components/Footer';
import Divider from './components/Divider';
import {
  getHomepageData,
  getExternalLinks,
  getAllPoints,
} from './lib/tina';

export default function Home() {
  const sections = getHomepageData();
  const links = getExternalLinks();
  const points = getAllPoints();

  return (
    <div className="flex flex-col bg-[#fcfcf7] min-h-fit max-w-full overflow-x-hidden">
      <div
        className="min-h-screen w-full items-start flex flex-col px-4 md:px-8 lg:px-32 pt-[10rem]"
        dir="rtl"
      >
        <Divider className=" mb-8" />
        <ContentSection sections={sections} />
        <Divider className=" mb-8" />
        <PointsSection points={points} />
        <MapSection points={points} />
        <Divider className=" mb-8" />
        <LinksSection links={links} />
        <Divider className=" mb-8" />
        <Footer />
      </div>
    </div>
  );
}
