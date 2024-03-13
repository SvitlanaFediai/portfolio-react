import "./btn.css";
import { Link } from "react-router-dom";

const Btn = ({ link, className, icon, text }) => {
  return (
    <Link
      to={link}
      target="_blank"
      rel="noreferrer"
      className={className ? `${className} btn-outline` : "btn-outline"}
    >
      {icon ? icon : null}
      {text ? text : null}
    </Link>
  );
};

export default Btn;
