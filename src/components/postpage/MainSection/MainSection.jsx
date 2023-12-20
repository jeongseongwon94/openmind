import { useState, useEffect, useContext } from 'react';
import { useGetData } from '../../../hooks/useGetData';
import { useIsMobileSize } from '../../../hooks/useIsMobileSize';
import { SubjectDataContext } from '../../../contexts/SubjectDataContext';
import { DataChangeDetectionContext } from '../../../contexts/DataChangeDetectionContext';
import { useIsScrolled } from '../../../hooks/useIsScrolled';

import { axiosBaseURL } from '../../../apis/axiosBaseURL';

import QuestionBox from '../QuestionBox/QuestionBox';
import ButtonFloating from '../../common/ButtonFloating/ButtonFloating';
import Modal from '../Modal/Modal';

import styles from './MainSection.module.css';

export default function MainSection() {
  const { id } = useContext(SubjectDataContext);
  const LIMIT = 3;
  const page = useIsScrolled();
  const url = `subjects/${id}/questions/?limit=${LIMIT}`;
  const newUrl = `subjects/${id}/questions/?limit=${LIMIT}&offset=${LIMIT * page}`;
  const { data, loading } = useGetData(url);
  const [newData, setNewData] = useState({});
  const [dataChangeDetection, setDataChangeDetection] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const isId = localStorage.getItem('id') == id;

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

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosBaseURL.get(newUrl);
        setNewData((prevData) => {
          if (prevData === null) {
            return response.data;
          } else {
            return {
              ...prevData,
              results: [...prevData.results, ...response.data.results],
            };
          }
        });
      } catch {
        console.error('에러가 발생했습니다!');
      }
    };

    if (page) {
      getData();
    }
  }, [page]);

  const isMobilSize = useIsMobileSize();

  const handleShowModal = () => {
    setModalOpen(true);
  };

  const handleDeleteButton = async () => {
    try {
      await axiosBaseURL.delete(`subjects/${id}/`);
      setDataChangeDetection(true);
    } catch (error) {
      console.log(`handleDeleteButton Error : ${error}`);
    }
  };

  return (
    <DataChangeDetectionContext.Provider value={setDataChangeDetection}>
      <div className={styles.mainSection}>
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
      </div>
    </DataChangeDetectionContext.Provider>
  );
}
