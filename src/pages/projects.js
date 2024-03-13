import Wrapper from "../components/wrapper/wrapper";
import TransitionEffect from "../components/transitionEffect/transitionEffect";
import ProjectSlider from "../components/projectSlider/projectSlider";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import BigTitle from "../components/bigTitle/bigTitle";
import { motion } from "framer-motion";
import { fadeIn } from "../helpers/variants";

const Projects = ({ setModal }) => {
  return (
    <>
      <TransitionEffect />
      <BigTitle text={"WORK"} top="77%" left="15%" />
      <Wrapper>
        <section className="projects">
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            className="projects__desc"
          >
            <h2 className="main-title">My works</h2>
            <p className="projects__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem cumque placeat molestiae deserunt consectetur,
              necessitatibus veritatis quidem sapiente, quibusdam eaque
              assumenda incidunt!
            </p>
            <Link
              target="_blank"
              to="https://github.com/SvitlanaFediai?tab=repositories"
              className="btn"
            >
              View all projects
              <span className="btn__icon">
                <FaGithub />
              </span>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            className="projects__slider"
          >
            <ProjectSlider setModal={setModal} />
          </motion.div>
        </section>
      </Wrapper>
    </>
  );
};

export default Projects;
