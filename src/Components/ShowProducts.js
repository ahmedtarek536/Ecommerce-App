import { useState } from "react";
import Button from "./Button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../Hooks/ProvideContext";
export default function ShowProduct() {
  const { setOpenProduct } = useAppContext();

  function hanldeCloseProduct() {
    setOpenProduct(null);
  }

  window.scrollTo(0, 0);

  return (
    <>
      <div className="show-product">
        <Button className="product-back-btn" onClick={hanldeCloseProduct}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <ProductImgs />
        <ProdtuctInfo />
      </div>
    </>
  );
}

function ProductImgs() {
  const { openProduct } = useAppContext();
  const product = openProduct;

  const [showMainImg, setShowMainImg] = useState(product.imgMain);
  function handleShowImg(img) {
    setShowMainImg(img);
  }
  return (
    <div className="show-product-sec-imgs">
      <img src={showMainImg} alt="show-main-img" />
      <div className="product-imgs">
        <div>
          <img
            src={product.imgMain}
            onClick={(e) => handleShowImg(e.target.src)}
            alt="show-img-Main"
          />
        </div>

        <div>
          <img
            src={product.imgOne}
            onClick={(e) => handleShowImg(e.target.src)}
            alt="show-img-One"
          />
        </div>

        <div>
          <img
            src={product.imgTwo}
            onClick={(e) => handleShowImg(e.target.src)}
            alt="show-img-two"
          />
        </div>

        <div>
          {" "}
          <img
            src={product.imgThree}
            onClick={(e) => handleShowImg(e.target.src)}
            alt="show-img-Three"
          />
        </div>
      </div>
    </div>
  );
}

function ProdtuctInfo() {
  const { openProduct } = useAppContext();
  const product = openProduct;
  return (
    <div className="show-product-info">
      <h2 className="product-title">{product.title}</h2>
      <div className="price">${product.price}</div>
      <AddProduct />
      <h3 className="title-des">About Product</h3>
      <div className="des">{product.textarea}</div>
    </div>
  );
}

function AddProduct() {
  const { openProduct, onAddToCart } = useAppContext();
  const product = openProduct;
  const [numProduct, setNumProduct] = useState(1);
  function handleIncrement() {
    setNumProduct((numProduct) => numProduct + 1);
  }
  function handleDecrement() {
    setNumProduct((numProduct) =>
      numProduct > 1 ? numProduct - 1 : numProduct
    );
  }
  function handleAddProduct() {
    const newProduct = { ...product, numsProduct: numProduct, id: Date.now() };
    onAddToCart(newProduct);
  }
  return (
    <div className="add-product">
      <div className="num-product">
        <Button className="num-product-btn" onClick={handleDecrement}>
          -
        </Button>
        <span>{numProduct}</span>
        <Button className="num-product-btn" onClick={handleIncrement}>
          +
        </Button>
      </div>
      <Button className="product-btn" onClick={handleAddProduct}>
        Add To Card
      </Button>
    </div>
  );
}
