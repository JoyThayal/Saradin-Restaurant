import Hero from "@/components/home/Hero";
import Locations from "@/components/home/Locations";
import About from "@/components/home/About";
import Menu from "@/components/home/menu/Menu";
import DeliveryCTA from "@/components/home/DeliveryCTA";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import Ad from "@/components/home/Ad";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Locations />
      <About />
      <Menu />
      <DeliveryCTA />
      <Gallery />
      <Testimonials />
      <Ad />
    </main>
  );
}