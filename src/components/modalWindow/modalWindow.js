import { useEffect, useState } from "react";
import "./modalWindow.css";
import Btn from "../buttonGit/btn";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../helpers/projectsList";
import { FaGithub } from "react-icons/fa";

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ModalWindow = () => {
  const { title } = useParams();
  const [projectData, setProjectData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const item = projects.find((item) => item.title === title);

    setProjectData(item);
  }, [title]);

  const closeModal = () => {
    setProjectData(null);
    navigate(-1);
  };

  return (
    <>
      {projectData && (
        <AnimatePresence mode="wait">
          <motion.div
            className="modal-window"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="modal"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="modal-window__content"
              variants={flip}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h3 className="modal-window__title">{projectData.title}</h3>
              <img
                src={projectData.imgBig}
                alt={projectData.title}
                className="modal-window__img"
              />

              <div className="project-details__desc">
                <p>Skills: </p>
                <span>{projectData.skills}</span>
              </div>

              <div className="modal-window__btn-container">
                <Btn
                  link={projectData.demoLink}
                  className={"modal-window__btn--demo"}
                  text={"Preview"}
                />
                <Btn
                  link={projectData.gitHubLink}
                  className={"modal-window__btn--code"}
                  icon={<FaGithub />}
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default ModalWindow;
