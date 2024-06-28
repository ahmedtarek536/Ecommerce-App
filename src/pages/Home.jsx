import Brands from "../Components/Brands";
import Catogries from "../Components/Categories";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Information from "../Components/Information";

function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <Catogries />
      <Brands />
      <Information />
      <Footer />
    </>
  );
}

export default Home;
