import Navbar from "../app/component/navbar"
import HeroSection from "../app/component/herosection";
import Footer from "../app/component/footer";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
