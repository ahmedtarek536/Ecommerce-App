import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Information() {
  return (
    <div className="information">
      <Offer />
      <Subscribe />
      <Install />
    </div>
  );
}

function Offer() {
  const naviagte = useNavigate();
  return (
    <div className="offer">
      <img
        src="https://media.istockphoto.com/id/1438742272/photo/a-young-spanish-woman-with-a-skateboard-walks-down-the-street.webp?b=1&s=170667a&w=0&k=20&c=yShwpLQGs9avLlPxMJwojcl1hFPwzil6yUj0ypv_TwU="
        alt="img-offer"
      />
      <div className="offer-info">
        <p>LIMITED OFFER</p>
        <h2>25% off only this friday and get special gift</h2>
        <Button
          className="offer-btn"
          onClick={() => {
            naviagte("shop");
          }}
        >
          Go Now
        </Button>
      </div>
    </div>
  );
}

function Subscribe() {
  return (
    <div className="subscribe">
      <h2>
        Subscribe to our newsletter to get updates to our latest collection
      </h2>
      <p className="text-offer">
        Get 20% off on your first order just by subscribtion to our newsletter
      </p>
      <div className="subscribe-form">
        <input
          type="text"
          className="subscribe-input"
          placeholder="Enter Your Email Here!"
        />
        <Button className="subscribe-btn">Subscribe </Button>
      </div>
      <p>
        {" "}
        You Will Be Abel To Unsubscrib Any Time Read Our Privacy Policy Just
        Click Here
      </p>
    </div>
  );
}

function Install() {
  return (
    <div className="install">
      <div className="install-info">
        <h1>
          Install Our Fashion <br /> Store App.
        </h1>
        <p>Get The Latest & The Original Products</p>
        <div className="install-btns">
          <Button className="install-btn">Play Store</Button>
          <Button className="install-btn">App Store</Button>
        </div>
      </div>
      <img
        src="https://647a9a5d1de3802bb76b0dcc--adorable-panda-b90c31.netlify.app/static/media/playstore.35dfed70a91ffa6729a1.png"
        alt="install-app"
      />
    </div>
  );
}
