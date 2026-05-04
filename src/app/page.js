import Banner from "@/components/Banner";
import QurbaniInfo from "@/components/QurbaniInfo";
import TopGenerations from "@/components/TopGenerations";
import MarqueeSection from "@/components/MarqueeSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueeSection />
      <TopGenerations />
      <QurbaniInfo />
      
    </div>
  );
}
