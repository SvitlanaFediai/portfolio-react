import { BsArrowRight } from "react-icons/bs";
import "./card.css";
import { Link, useLocation } from "react-router-dom";

const Card = ({ item }) => {
  const location = useLocation();

  return (
    <Link to={`/projects/${item.title}`} state={{ background: location }}>
      <div className="project__slide">
        <img src={item.img} alt="Project img" className="project__img" />
        <div className="project__overlay">
          <div className="project__text">
            <div className="project__title">{item.title}</div>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
