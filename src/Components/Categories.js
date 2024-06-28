import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
const categoriesData = [
  {
    title: "Cusual Section",
    type: "Best Sale",
    des: "Best Performance",
    img: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "New Clothes",
    type: "MYLTiple STYLEs",
    des: "a lot of colors",
    img: "https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Women Clothes",
    type: "15% off",
    des: "Best price",
    img: "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob3BwaW5nfGVufDB8fDB8fHww",
  },
  {
    title: "Men Clothes",
    type: "new arrivale",
    des: "High quality",
    img: "https://images.unsplash.com/photo-1612029266697-15ba0130eae8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmclMjBtYW58ZW58MHx8MHx8fDA%3D",
  },
];

export default function Catogries() {
  return (
    <div className="Categories">
      <div className="main">
        <ImageSlider />
      </div>
      <div className="small-categories">
        {categoriesData.map((box, index) => (
          <Box
            key={index}
            title={box.title}
            type={box.type}
            des={box.des}
            img={box.img}
          />
        ))}
      </div>
    </div>
  );
}

function Box({ img, title, type, des, children }) {
  return (
    <div className="box" style={{ backgroundImage: `url('${img}')` }}>
      <p className="type">{type}</p>
      <h1>{title}</h1>
      <p className="des">{des}</p>
      {children}
    </div>
  );
}

function ImageSlider() {
  let arr = [
    "Elevate Your Closet With Our Fashion-forward Pieces",
    "Take Your Style to the Next Level With Us",
    "Discover Your Signature Style With Our Exclusive Collections",
  ];
  let [des, setDes] = useState(0);

  setTimeout(function () {
    setDes((v) => (v === 2 ? 0 : v + 1));
  }, 5800);

  return (
    <div className="img-slider">
      <section className="information">
        <p className="type">Descover</p>
        <h1 className="title">{arr[des]}</h1>

        <button className="btn-show">
          {" "}
          SHOP NOW <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </section>
      <div className="img-1">
        <img
          src="https://media.istockphoto.com/id/1457122831/photo/portrait-of-hip-hop-group-on-staircase-outdoors.jpg?s=612x612&w=0&k=20&c=ZCpR9qg7FICIAtGnCHJHG6UZKIptpt1hvpnb-gZIKhg="
          alt="img-slider-1"
        />
      </div>

      <div className="img-2">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img-slider-2"
        />
      </div>
      <div className="img-3">
        <img
          src="https://images.unsplash.com/photo-1612029266697-15ba0130eae8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmclMjBtYW58ZW58MHx8MHx8fDA%3D"
          alt="img-slider-3"
        />
      </div>
    </div>
  );
}
