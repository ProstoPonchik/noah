import SecondSection from "./components/main/SecondSection";
import FirstSection from "./components/main/FirstSection";
import ThirdSection from "./components/main/ThirdSection";
import FourthSection from "./components/main/FourthSection";
import FifthSection from "./components/main/FifthSection";
import SixthSection from "./components/main/SixthSection";
import SevenSection from "./components/main/SevenSection";

export default function Home() {
  return (
    <main className="grid grid-col-1 gap-y-[160px] justify-items-center mt-[70px]">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SevenSection />
    </main>
  );
}
