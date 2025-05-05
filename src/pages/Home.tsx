import Header from "../components/Header";
import Hero from "../sections/Hero";
import AboutMe from "../sections/Experience";
import Footer from "../components/Footer";
import BlobContainer from "../components/BlobContainer";
import { useUi } from "../context/UiContext";

const Home = (): JSX.Element => {
  const { showBlob } = useUi();

  return (
    <div className="overflow-clip bg-my-blue relative">
      <Header />
      <section className="w-screen min-h-screen flex flex-col items-center justify-around font-serif">
        <Hero />
      </section>
      {showBlob && <BlobContainer />}
      <AboutMe />
      <Footer />
    </div>
  );
};

export default Home;
