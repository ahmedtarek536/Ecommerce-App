import {
  faArrowRight,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import { useState } from "react";
import { useAppContext } from "../Hooks/ProvideContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartIsOpen, setCartIsOpen, cartProducts } = useAppContext();

  return (
    <div className={`cart ${cartIsOpen ? "active" : ""}`}>
      <Button className="cart-back" onClick={() => setCartIsOpen(false)}>
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>

      {cartProducts.length === 0 ? (
        <CartEmpty />
      ) : (
        <CartFull key={Date.now()} />
      )}
    </div>
  );
}
function CartFull() {
  const { cartProducts, setCartProducts } = useAppContext();
  const TotalPrice = cartProducts.reduce((acc, index) => {
    return acc + index.price * index.numsProduct;
  }, 0);
  function handleRemoveAllProduct() {
    setCartProducts([]);
  }

  return (
    <div className="cart-full">
      <div className="cart-header">{cartProducts.length} Items</div>
      <div className="cart-products">
        {cartProducts.map((product, i) => (
          <ProductCart
            product={product}
            key={Date.now()}
            setCartProducts={setCartProducts}
          />
        ))}
      </div>
      <div className="cart-footer">
        <div className="cart-footer-total-price">
          <h3>TOTAL: {TotalPrice}</h3>
          <FontAwesomeIcon
            className="icon-delet"
            onClick={handleRemoveAllProduct}
            icon={faTrash}
          />
        </div>
        <Button className="cart-footer-btn checkout">Checkout</Button>
        <Button className="cart-footer-btn">Paypal</Button>
      </div>
    </div>
  );
}

function ProductCart({ product, setCartProducts }) {
  const [numCartProduct, setNumCartProduct] = useState(product.numsProduct);
  function hanldeIncNumProduct() {
    setCartProducts((products) =>
      products.map((val) =>
        val.title === product.title
          ? { ...val, numsProduct: val.numsProduct + 1 }
          : val
      )
    );
  }
  function hanldeDecNumProduct() {
    if (product.numsProduct === 1) {
      handleDeletFromCart();
      return;
    }
    setCartProducts((products) =>
      products.map((val) =>
        val.title === product.title
          ? { ...val, numsProduct: val.numsProduct - 1 }
          : val
      )
    );
  }
  function handleDeletFromCart() {
    setCartProducts((products) =>
      products.filter((v) => v.title !== product.title)
    );
  }
  return (
    <div className="cart-product">
      <img src={product.imgMain} alt="cart-product-img" />
      <div className="cart-product-info">
        <div className="title">
          <span>{product.title}</span>
          <FontAwesomeIcon
            onClick={handleDeletFromCart}
            className="cart-product-icon"
            icon={faXmark}
          />
        </div>
        <div className="prices">
          <div className="num-cart-products">
            <Button
              className="cart-num-product-btn"
              onClick={hanldeDecNumProduct}
            >
              -
            </Button>
            <span>{numCartProduct}</span>
            <Button
              className="cart-num-product-btn"
              onClick={hanldeIncNumProduct}
            >
              +
            </Button>
          </div>
          <div className="price">${product.price}</div>
          <div className="total-price">${+product.price * numCartProduct}</div>
        </div>
      </div>
    </div>
  );
}

// if car donot have any product
function CartEmpty() {
  const { setCartIsOpen } = useAppContext();
  const navigate = useNavigate();
  return (
    <div className="cart-empty ">
      <img
        src="https://647a9a5d1de3802bb76b0dcc--adorable-panda-b90c31.netlify.app/static/media/empty-cart.49d7ad2b13360e514657.png"
        alt=" cart empty"
      />
      <h1>YOUR CART IS EMPTY</h1>

      <Button
        onClick={() => {
          setCartIsOpen(false);
          navigate("/shop");
        }}
        fs={20}
      >
        Shop Now
      </Button>
    </div>
  );
}
