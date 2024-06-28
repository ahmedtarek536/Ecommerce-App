import { createContext, useContext, useEffect, useRef, useState } from "react";

const AppContext = createContext();
function ProvideContext({ children }) {
  // products
  const [Allproducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const optionFilter = useRef([]);
  const [openProduct, setOpenProduct] = useState(null);
  const [openFilter, setOpenFilter] = useState(false);
  // cart
  const [cartProducts, setCartProducts] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  // sort
  const [select, setSelect] = useState("Popularity");

  useEffect(function () {
    async function getProducts() {
      const res = await fetch(`/data.json`);
      const data = await res.json();
      setProducts(data);
      setAllProducts(data);
    }
    getProducts();
  }, []);

  function handleAddFilter(val) {
    const isCheck = optionFilter.current.find((option) => option === val);
    if (isCheck) {
      optionFilter.current = optionFilter.current.filter(
        (option) => option !== val
      );
    } else {
      optionFilter.current = [...optionFilter.current, val];
    }

    handleFilterProducts();
  }

  function handleFilterProducts() {
    // filter depend on cateogry
    if (
      optionFilter.current.length === 0 ||
      optionFilter.current.includes("All")
    ) {
      setProducts([...Allproducts]);
    } else if (optionFilter.current.includes("Men & Women's")) {
      setProducts(
        Allproducts.filter(
          (product) =>
            product.category === "Men Clothes" ||
            product.category === "Women's Clothes"
        )
      );
    } else {
      setProducts(
        Allproducts.filter((product) =>
          optionFilter.current.includes(product.category)
        )
      );
    }
    // filter depend on price
    let isPrice = false;
    let isCategory = false;
    for (let el of optionFilter.current) {
      if (el[0] === "$") isPrice = true;
      if (el[0] !== "$") isCategory = true;
    }

    if (isPrice) {
      if (isCategory) {
        setProducts((products) =>
          products.filter((product) => FilterPrice(product.price))
        );
      } else {
        setProducts(
          Allproducts.filter((product) => FilterPrice(product.price))
        );
      }
    }

    handleSortProduct(select);
  }

  function FilterPrice(price) {
    let prices = convertPrices();
    for (let el of prices) {
      if (price >= el[0] && price <= el[1]) return true;
    }
    return false;
  }

  function convertPrices() {
    let optionPrices = [];
    let Prices = [];
    for (let op of optionFilter.current)
      if (op[0] === "$") optionPrices.push(op);
    for (let op of optionPrices) Prices.push(op.split(" - "));
    for (let i = 0; i < Prices.length; i++) {
      Prices[i][0] = Prices[i][0].slice(1);
      Prices[i][1] = Prices[i][1].slice(1);

      Prices[i][0] = parseInt(Prices[i][0]);
      Prices[i][1] = parseInt(Prices[i][1]);
    }
    return Prices;
  }

  function handleClearFilter() {
    optionFilter.current = [];
    setProducts([...Allproducts]);
    handleSortProduct(select);
  }

  // sort product
  function handleSortProduct(val) {
    if (val === "Popularity") {
    } else if (val === "Low To High")
      setProducts((products) =>
        [...products].sort((a, b) => a.price - b.price)
      );
    else if (val === "Hight To Low")
      setProducts((products) =>
        [...products].sort((a, b) => b.price - a.price)
      );
  }

  // Add to cart
  function handlAddProductToCart(pro) {
    let isHere = cartProducts.find((p) => p.title === pro.title);
    if (!isHere) setCartProducts((products) => [...products, pro]);
    else {
      setCartProducts((products) =>
        products.map((product) =>
          product.title === pro.title
            ? { ...product, numsProduct: product.numsProduct + pro.numsProduct }
            : product
        )
      );
    }
  }

  return (
    <AppContext.Provider
      value={{
        products: products,
        optionFilter: optionFilter.current,
        handleAddFilter: handleAddFilter,
        onSortProduct: handleSortProduct,
        openProduct: openProduct,
        setOpenProduct: setOpenProduct,
        cartIsOpen: cartIsOpen,
        setCartIsOpen: setCartIsOpen,
        cartProducts: cartProducts,
        setCartProducts: setCartProducts,
        onAddToCart: handlAddProductToCart,
        openFilter: openFilter,
        setOpenFilter: setOpenFilter,
        handleClearFilter: handleClearFilter,
        select: select,
        setSelect: setSelect,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}
export { ProvideContext, useAppContext };
