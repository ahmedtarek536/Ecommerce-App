import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProvideContext } from "./Hooks/ProvideContext";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./Components/Cart";

export default function App() {
  return (
    <>
      <ProvideContext>
        <BrowserRouter>
          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ProvideContext>
    </>
  );
}
