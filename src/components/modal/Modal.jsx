import { useEffect, useRef, useState, useContext } from 'react';

import InputTextArea from '../common/InputTextarea/InputTextarea';
import ButtonBox from '../common/ButtonBox/ButtonBox';

import axiosBaseURL from '../../apis/axiosBaseURL';
import { SubjectDataContext } from '../../contexts/SubjectDataContext';

import messageIcon from '../../images/icons/messages.svg';
import closeIcon from '../../images/icons/close.svg';
import styles from './Modal.module.css';

export default function Modal({ setModalOpen }) {
  const { id, name, imageSource } = useContext(SubjectDataContext);
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

    // mousedown때마다 handler 호출
    document.addEventListener('mousedown', handler);

    // 컴포넌트 언마운트시(화면에서 사라졌을 때) 이벤트 제거
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axiosBaseURL.post(
        `subjects/${id}/questions/`,
        { content: content },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setContent('');
    } catch {
      console.error('에러가 발생했습니다!');
    }
  };

  return (
    <div className={styles.backGround}>
      <div ref={modalRef} className={styles.container}>
        <div className={styles.notice}>
          <div className={styles.ask}>
            <img src={messageIcon} />
            <p className={styles.question}>질문을 작성하세요</p>
          </div>
          <button onClick={closeModal}>
            <img src={closeIcon} alt="닫기 아이콘" />
          </button>
        </div>
        <div className={styles.messenger}>
          <p className={styles.to}>To.</p>
          <img src={image} className={styles.profile} />
          <p className={styles.name}>{name}</p>
        </div>
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <div className={styles.inputBox}>
            <InputTextArea
              placeholder="질문을 입력해주세요"
              value={content}
              handleTextareaChange={handleTextareaChange}
            />
          </div>
          <ButtonBox type="submit" className="darkButton">
            질문보내기
          </ButtonBox>
        </form>
      </div>
    </div>
  );
}
