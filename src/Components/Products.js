//// products
import {
  faCartPlus,
  faFilter,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../Hooks/ProvideContext";
export default function SecProducts() {
  return (
    <div className="main-shop">
      <HeaderProducts />
      <Products />
    </div>
  );
}

function HeaderProducts() {
  const {
    products,
    onSortProduct,
    setOpenFilter,
    optionFilter,
    handleClearFilter,
  } = useAppContext();
  const numProducts = products.length;

  const { select, setSelect } = useAppContext();
  function handleSelect(e) {
    setSelect(e.target.value);
    onSortProduct(e.target.value);
  }
  return (
    <>
      <div className="header-shop">
        <div className="filter-header-info">
          <div className="filter-icon" onClick={() => setOpenFilter((v) => !v)}>
            {" "}
            <FontAwesomeIcon icon={faFilter} /> Filter
          </div>
          <div className="products-num">{numProducts} Products</div>
          {optionFilter.length ? (
            <div className="btn-clear-all" onClick={handleClearFilter}>
              Clear All
            </div>
          ) : null}
        </div>
        <select value={select} onChange={(e) => handleSelect(e)}>
          <option value="Low To High">Low To High</option>
          <option value="Hight To Low">High To Low</option>
          <option value="Popularity">Popularity</option>
        </select>
      </div>
      {optionFilter.length ? (
        <div className="options_filter">
          {optionFilter.map((option) => (
            <Option val={option} />
          ))}
        </div>
      ) : null}
    </>
  );
}
function Option({ val }) {
  const { handleAddFilter } = useAppContext();
  function handleRemoveOption() {
    handleAddFilter(val);
  }
  return (
    <div onClick={handleRemoveOption}>
      <span>{val}</span>
      <span>
        <FontAwesomeIcon icon={faXmark} className="icon" />
      </span>
    </div>
  );
}
function Products() {
  const { products } = useAppContext();

  return (
    <div className="products">
      {products.map((product, i) => (
        <Product product={product} key={Date.now() + Math.random() + i} />
      ))}
    </div>
  );
}

function Product({ product }) {
  const { setOpenProduct } = useAppContext();
  function showProduct() {
    setOpenProduct(product);
  }

  return (
    <div className="product">
      <img src={product.imgMain} alt="product-img" />
      <p className="product-brand">adidas</p>
      <h3 className="product-name">{product.title}</h3>
      <div className="product-info">
        <div className="product-price">${product.price}</div>
        <FontAwesomeIcon
          className="btn shop-show-btn"
          onClick={showProduct}
          icon={faCartPlus}
        />
      </div>
    </div>
  );
}
