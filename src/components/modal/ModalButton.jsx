import { useState } from 'react';
import Modal from './Modal';
import '../../styles/global.css';

export default function ModalButton() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={showModal}>모달버튼</button>
      {modalOpen && <Modal setModalOpen={setModalOpen} id={1230} />}
    </div>
  );
}

// Post 내 '질문작성하기' 버튼에 적용되어야할 함수를 미리 만들어뒀습니다.
