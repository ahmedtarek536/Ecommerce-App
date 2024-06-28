import Filter from "../Components/Filter";
import SecProducts from "../Components/Products";
import ShowProduct from "../Components/ShowProducts";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useAppContext } from "../Hooks/ProvideContext";

export default function Shop() {
  const { openProduct } = useAppContext();

  return (
    <>
      <Header />
      {openProduct ? (
        <ShowProduct />
      ) : (
        <div className="shop">
          <Filter key={Date.now()} />
          <SecProducts />
        </div>
      )}
      <Footer />
    </>
  );
}
