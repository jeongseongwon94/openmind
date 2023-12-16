import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import InputTextArea from './components/common/InputTextarea/InputTextarea';
import ButtonBox from './components/common/ButtonBox/ButtonBox';
import messageIcon from '../src/image/Messages.svg';
import closeIcon from '../src/image/Close.svg';
import profile from '../src/image/Ellipse.svg';
import styles from './Modal.module.css';
import { axiosBaseURL } from './assets/axiosBaseURL';

export default function Modal({ setModalOpen, id }) {
  const [content, setContent] = useState('');
  const handleTextareaChange = (e) => {
    setContent(e.target.value);
  };

  // 모달 닫기 버튼(x버튼)을 누르면 모달이 닫힘.
  const closeModal = () => {
    setModalOpen(false);
  };

  //처음에는 모달이 열려있지 않기때문에 모달창의 상태를 감지하는 useRef를 null 상태로 설정
  const modalRef = useRef(null);

  // useRef가 감지하고 있는 모달창이 열려있고 &  클릭한 곳이 모달창이 아니라면 모달이 닫힘
  useEffect(() => {
    const handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    // mousedown(마우스 버튼이 눌렸을 때)때마다 handelr 호출
    document.addEventListener('mousedown', handler);

    // 컴포넌트 언마운트시(화면에서 사라졌을 때) 이벤트 제거
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  const postQuestion = async () => {
    await axiosBaseURL.post(
      `subjects/${id}/questions/`,
      {
        content: content,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await postQuestion();
    setContent('');
  };

  return (
    <div className={styles.backGround}>
      <div ref={modalRef} className={styles.container}>
        <div className={styles.notice}>
          <div className={styles.ask}>
            <img src={messageIcon} />
            <p>질문을 작성하세요</p>
          </div>
          <button onClick={closeModal}>
            <img src={closeIcon} alt="닫기 아이콘" />
          </button>
        </div>
        <div className={styles.messenger}>
          <p>To.</p>
          <img src={profile} />
          <p>아초는고양이</p>
        </div>
        <form onSubmit={handleFormSubmit}>
          <InputTextArea
            className={styles.inputBox}
            placeholder="질문을 입력해주세요"
            value={content}
            handleTextareaChange={handleTextareaChange}
          />
          <ButtonBox onClick={postQuestion}>질문보내기</ButtonBox>
        </form>
      </div>
    </div>
  );
}
