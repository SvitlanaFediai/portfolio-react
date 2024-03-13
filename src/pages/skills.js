import { skills } from "../helpers/skills";
import "react-circular-progressbar/dist/styles.css";
import TransitionEffect from "../components/transitionEffect/transitionEffect";
import { motion } from "framer-motion";
import ParticlesContainer from "../components/particlesContainer/particlesContainer";
import BigTitle from "../components/bigTitle/bigTitle";
import { fadeIn } from "../helpers/variants";

const Skills = () => {
  return (
    <>
      <TransitionEffect />
      <ParticlesContainer />
      <BigTitle text={"SKILLS"} top="70%" right="15%" />
      <section className="skills">
        <div className="container">
          <div className="skills__container">
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="skills__icon-box"
            >
              {skills.map((skill) => (
                <div key={skill.id} className="skill__icon">
                  {skill.icon}
                </div>
              ))}
            </motion.div>
            <div>
              <motion.h2
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="skills__title main-title"
              >
                Skills
              </motion.h2>
              <motion.p
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="skills__subtitle"
              >
                My technical level
              </motion.p>
              <motion.p
                variants={fadeIn("left", 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="skills__text"
              >
                I'm an enthusiastic and detail-oriented Frontend Software
                Engineer with knowledge in HTML, CSS and React. Seeking to
                utilize my technical skills and expertise to provide value to
                the employer and contribute to successful projects both today
                and in the future. Aiming to take on new challenges and utilize
                my coding and debugging skills for developing new features and
                enhance the overall user experience.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
