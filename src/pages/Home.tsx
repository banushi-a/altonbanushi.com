import Header from "../components/Header";
import Hero from "../sections/Hero";
import Experience from "../sections/Experience";
import Footer from "../components/Footer";
import MeshBackground from "../components/MeshBackground";

const Home = (): JSX.Element => {
  return (
    <div className="min-h-dvh overflow-clip bg-black relative">
      {/* Mesh background with varying opacity across sections */}
      <div className="fixed inset-0 pointer-events-none">
        <MeshBackground />
      </div>

      <Header />
      <section className="w-screen min-h-screen flex flex-col items-center justify-center font-serif relative z-10">
        <Hero />
      </section>
      <div id="experience" className="relative z-10">
        <Experience />
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
