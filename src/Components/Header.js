import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../Hooks/ProvideContext";

export default function Header() {
  return (
    <header>
      <Logo />
      <Search />
      <Pages />
    </header>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img
        className="logo-img"
        src="https://647a9a5d1de3802bb76b0dcc--adorable-panda-b90c31.netlify.app/static/media/fakeStore.9a660ee44c91177dd555.png"
        alt="logo"
      />
      <h1>tom</h1>
    </div>
  );
}

function Search() {
  return (
    <div className="search">
      <input
        className="input-search"
        type="text"
        placeholder="Search for Products..."
      />
      <button className="btn-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

function Pages() {
  const { setCartIsOpen } = useAppContext();
  const [pagesIsOpen, setPagesIsOpen] = useState(false);
  function handlePages() {
    setPagesIsOpen((val) => !val);
  }

  function handleopenCart() {
    setCartIsOpen((v) => !v);
  }

  return (
    <>
      <FontAwesomeIcon className="bars" icon={faBars} onClick={handlePages} />
      <ul className={`pages ${pagesIsOpen ? " active" : ""}`}>
        <li className="mark">
          <FontAwesomeIcon icon={faXmark} onClick={handlePages} />
        </li>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <li>Home</li>
        </Link>
        <Link to="/shop" style={{ textDecoration: "none", color: "inherit" }}>
          <li>Shop</li>
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <li>Contact</li>
        </Link>

        <li>
          <FontAwesomeIcon className="user-icon" icon={faUser} />
        </li>
        <li value="cart" onClick={handleopenCart}>
          <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
        </li>
      </ul>
    </>
  );
}
