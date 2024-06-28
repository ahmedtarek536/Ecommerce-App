/// filter
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../Hooks/ProvideContext";
const filterOpations = [
  {
    title: "Categories",
    options: ["Women's Clothes", "Men Clothes", "Cap Clothes", "Men & Women's"],
  },
  { title: "Brands", options: ["H & M", "Adidas", "Nike", "Zara"] },
  {
    title: "Price",
    options: [
      "$0.00 - $50.00",
      "$50.00 - $100.00",
      "$100.00 - $150.00",
      "$150.00 - $200.00",
    ],
  },
];

export default function Filter() {
  const { setOpenFilter, openFilter, handleClearFilter } = useAppContext();
  function handleApplyOptions() {
    setOpenFilter(false);
  }
  function handleClearOptions() {
    handleClearFilter();
    handleApplyOptions();
  }

  const isOpen = openFilter;
  return (
    <div className={`filter ${isOpen ? "active" : ""}`}>
      {filterOpations.map((val, i) => (
        <FilOptions category={val} key={i} />
      ))}

      <div className={`filter-btns`}>
        <Button className="filter-apply" onClick={handleApplyOptions}>
          Apply
        </Button>
        <Button className="filter-clear" onClick={handleClearOptions}>
          Clear
        </Button>
      </div>
    </div>
  );
}

function FilOptions({ category }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="filter-categorie">
      <div className="filter-categorie-header">
        <h3>{category.title}</h3>
        <FontAwesomeIcon
          onClick={() => setIsOpen((v) => !v)}
          className={`filter-categorie-icon${isOpen ? "-active" : ""}`}
          icon={faChevronRight}
        />
      </div>
      <div className={`filter-categorie-content  ${isOpen ? "active" : ""}`}>
        {category.options.map((item, i) => (
          <Option key={i} text={item} />
        ))}
      </div>
    </div>
  );
}

function Option({ text }) {
  const { handleAddFilter, optionFilter } = useAppContext();
  const [isChecked, setIsChecked] = useState(
    optionFilter.find((option) => option === text)
  );
  function handleCheckBox() {
    setIsChecked((val) => !val);
    handleAddFilter(text);
  }

  return (
    <div className="filter-categorie-content-item">
      <input type="checkbox" checked={isChecked} onChange={handleCheckBox} />
      <label htmlFor="">{text}</label>
    </div>
  );
}
