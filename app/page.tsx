import FirstSection from "./components/main/FirstSection";
import SecondSection from "./components/main/SecondSection";
import ThirdSection from "./components/main/ThirdSection";
import FourthSection from "./components/main/FourthSection";
import FifthSection from "./components/main/FifthSection";
import SixthSection from "./components/main/SixthSection";
import SevenSection from "./components/main/SevenSection";
import EightSection from "./components/main/EightSection";
import NineSection from "./components/main/NineSection";
import TenSection from "./components/main/TenSection";
import EleventSection from "./components/main/EleventSection";

export default function Home() {
  return (
    <main className="grid grid-col-1 desktopxs:gap-y-[160px] justify-items-center desktopxs:mt-[70px] laptop:mt-0 font-ttnorms tablet:gap-y-[80px] mobile:gap-y-[60px]">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SevenSection />
      <EightSection />
      <NineSection />
      <TenSection />
      <EleventSection />
    </main>
  );
}
