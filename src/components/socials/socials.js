import "./socials.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <ul className="social">
      <li className="social__item">
        <Link to="https://instagram.com/svitlanka_fd">
          <FaInstagram />
        </Link>
      </li>
      <li className="social__item">
        <Link href="https://github.com/SvitlanaFediai">
          <FaGithub />
        </Link>
      </li>
      <li className="social__item">
        <Link href="https://www.linkedin.com/in/svitlana-fediai-a95061210">
          <FaLinkedin />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
