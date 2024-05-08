import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="w-[1440px] h-[800px] border-2 border-solid border-black">
      <Navbar />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
