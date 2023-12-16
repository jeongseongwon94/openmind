import { useState } from 'react';
import Modal from './Modal';

export default function ModalButton() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={showModal}>모달버튼</button>
      {modalOpen && <Modal setModalOpen={setModalOpen} id="123" />}
    </div>
  );
}
