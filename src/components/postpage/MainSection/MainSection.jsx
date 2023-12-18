import { useState, useEffect, useContext } from 'react';
import { useGetData } from '../../../hooks/useGetData';
import { useIsMobileSize } from '../../../hooks/useIsMobileSize';
import { SubjectDataContext } from '../../../contexts/SubjectDataContext';

import QuestionBox from '../QuestionBox/QuestionBox';
import ButtonFloating from '../../common/ButtonFloating/ButtonFloating';
// import Modal from '../../postpage/Modal/Modal';

import styles from './MainSection.module.css';

export default function MainSection() {
  const { id } = useContext(SubjectDataContext);
  const url = `subjects/${id}/questions/`;
  const { data, loading } = useGetData(url);

  const [newData, setNewData] = useState({});
  useEffect(() => {
    if (!loading) {
      setNewData(data);
    }
  }, [data, loading]);

  const isMobilSize = useIsMobileSize();

  const [modalOpen, setModalOpen] = useState(false);
  const handleShowModal = () => {
    setModalOpen(true);
  };

  return (
    <div className={styles.mainSection}>
      <QuestionBox newData={newData} />
      <ButtonFloating
        className={styles.askQuestionButton}
        handleButtonClick={handleShowModal}
        text={isMobilSize ? `질문 작성` : `질문 작성하기`}
      />
      {modalOpen && <Modal setNewData={setNewData} setModalOpen={setModalOpen} />}
    </div>
  );
}
