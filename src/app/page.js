import Banner from "@/components/Banner";
import QurbaniInfo from "@/components/QurbaniInfo";
import TopGenerations from "@/components/TopGenerations";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopGenerations />
      <QurbaniInfo />
      
    </div>
  );
}
