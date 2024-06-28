import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div className="contact">
      <FontAwesomeIcon
        className="contact-back"
        icon={faArrowLeft}
        onClick={() => {
          navigate(-1);
        }}
      />
      <Links />
      <Form />
    </div>
  );
}

function Links() {
  return (
    <div className="contact-info">
      <img
        src="https://647a9a5d1de3802bb76b0dcc--adorable-panda-b90c31.netlify.app/static/media/AW.abc3929ad9bf20e94473.png"
        alt="logo"
      />
      <p>
        Have a question or feedback? Get in touch with us through our contact
        form, email, or phone. We're here to assist you and provide excellent
        customer service.
      </p>
      <div className="icons">
        <FontAwesomeIcon className="icon" icon={faFacebook} />
        <FontAwesomeIcon className="icon" icon={faInstagram} />
        <FontAwesomeIcon className="icon" icon={faTwitter} />
        <FontAwesomeIcon className="icon" icon={faTelegram} />
      </div>
    </div>
  );
}
function Form() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h3>GET IN TOUCH</h3>
      <p>27/7 We Will Answer Your Question And Problems</p>
      <div className="name">
        <input type="text" placeholder="Frist Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <textarea placeholder="Description"></textarea>
      <Button raduis={0}>Send</Button>
    </form>
  );
}
