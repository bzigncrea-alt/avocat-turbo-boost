import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertises from "@/components/Expertises";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertises />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
