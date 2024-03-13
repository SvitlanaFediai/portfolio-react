import "./logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        <h2 className="logo__firstname">Svitlana</h2>
        <span className="logo__lastname">Fediai</span>
      </Link>
    </div>
  );
};

export default Logo;
