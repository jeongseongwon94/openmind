import { useState, useEffect, useContext } from 'react';
import { useGetData } from '../../../hooks/useGetData';
import { useIsMobileSize } from '../../../hooks/useIsMobileSize';
import { SubjectDataContext } from '../../../contexts/SubjectDataContext';
import { DataChangeDetectionContext } from '../../../contexts/DataChangeDetectionContext';

import { axiosBaseURL } from '../../../apis/axiosBaseURL';

import QuestionBox from '../QuestionBox/QuestionBox';
import ButtonFloating from '../../common/ButtonFloating/ButtonFloating';
import Modal from '../Modal/Modal';

import styles from './MainSection.module.css';

export default function MainSection() {
  const { id } = useContext(SubjectDataContext);
  const url = `subjects/${id}/questions/`;
  const { data, loading } = useGetData(url);

  const isId = localStorage.getItem('id') == id;

  const [newData, setNewData] = useState({});

  const [dataChangeDetection, setDataChangeDetection] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!loading) {
      setNewData(data);
    }
  }, [loading]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosBaseURL.get(url);
        setNewData(response.data);
      } catch {
        console.error('에러가 발생했습니다!');
      } finally {
        setDataChangeDetection(false);
      }
    };

    if (dataChangeDetection) {
      getData();
    }
  }, [dataChangeDetection]);

  const isMobilSize = useIsMobileSize();

  const handleShowModal = () => {
    setModalOpen(true);
  };

  // 전체 삭제 : 404에러발생 ?
  const handleDeleteButton = async () => {
    console.log(id);
    try {
      await axiosBaseURL.delete(`subjects/${id}/`);
      setDataChangeDetection(true);
    } catch (error) {
      console.log(`handleDeleteButton Error : ${error}`);
    }
  };

  return (
    <div className={styles.mainSection}>
      <DataChangeDetectionContext.Provider value={setDataChangeDetection}>
        <div className={styles.questionBox}>
          {isId && (
            <ButtonFloating handleButtonClick={handleDeleteButton} text='삭제하기' className={styles.deleteButton} />
          )}
          <QuestionBox newData={newData} />
        </div>
        {!isId && (
          <ButtonFloating
            className={styles.askQuestionButton}
            handleButtonClick={handleShowModal}
            text={isMobilSize ? `질문 작성` : `질문 작성하기`}
          />
        )}

        {modalOpen && <Modal setNewData={setNewData} setModalOpen={setModalOpen} />}
      </DataChangeDetectionContext.Provider>
    </div>
  );
}
