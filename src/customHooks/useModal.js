import { useState } from "react";

const useModal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  //const open = () => setModalOpen(true);

  return { modal, setModal, toggleModal };
};

export default useModal;
