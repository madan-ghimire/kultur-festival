import FestivalInfo from "@/components/festival-info";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Lineup from "@/components/lineup";

export default function Home() {
  return (
    <main className="text-white">
      <Hero />
      <FestivalInfo />
      <Lineup />
      <Gallery />
    </main>
  );
}
