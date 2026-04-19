import PointsSection from '../components/PointsSection';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';
import Divider from '../components/Divider';
import { getAllPoints } from '../lib/tina';

export default function Locations() {
  const points = getAllPoints();

  return (
    <div className="flex flex-col bg-[#fcfcf7] min-h-fit w-full">
      <div
        className="min-h-screen w-full items-start flex flex-col px-8 md:px-32 pt-[10rem]"
        dir="rtl"
      >
        <Divider className=" mb-8" />
        <PointsSection points={points} />
        <MapSection points={points} />
        <Footer />
      </div>
    </div>
  );
}
