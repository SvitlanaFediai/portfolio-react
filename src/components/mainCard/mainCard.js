import { FaDownload } from "react-icons/fa";
import "./mainCard.css";
import Avatar from "../../img/main_photo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../helpers/variants";

const MainCard = () => {
  return (
    <section className="main-card">
      <div className="container">
        <div className="main-card__box">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="main-card__desc"
          >
            <h1 className="main-card__title">
              <strong>
                Hi, my name is <em>Svitlana</em>
              </strong>
              <br />a frontend developer
            </h1>
            <div className="main-card__text">
              <p>with passion for learning and creating.</p>
            </div>
            <Link
              href="/SvitlanaFediai_FrontendDeveloper.pdf"
              download
              className="btn download"
            >
              Download CV
              <span className="btn__icon">
                <FaDownload />
              </span>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="main-card__image"
          >
            <img src={Avatar} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MainCard;
