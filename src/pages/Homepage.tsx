import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Summary from "../components/Summary";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <section>
      <Navbar />
      <Hero />
      <Features />
      <Summary />
      <Footer />
    </section>
  );
}
