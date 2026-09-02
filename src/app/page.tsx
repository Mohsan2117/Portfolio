import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import Experience from "@/components/Experience";
import UnityGames from "@/components/UnityGames";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div id="top" />
      <Navbar />
      <Hero />
      {/* <Experience /> */}
      <UnityGames />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
