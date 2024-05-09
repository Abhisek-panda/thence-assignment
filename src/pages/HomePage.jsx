import Faq from "../components/Faq";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className=" flex flex-col gap-[20px] border-2 border-solid border-black w-[1440px]">
      <div>
        <Navbar btnAvailable={true} btnDisabled={false} />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
