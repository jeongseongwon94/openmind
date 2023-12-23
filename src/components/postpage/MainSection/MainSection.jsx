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
  const url = `subjects/${id}/questions/?limit=${LIMIT}`;
  const { data, loading } = useGetData(url);
  const [newData, setNewData] = useState({});

  const { page, setPage, setHasMoreData } = useIsScrolled();
  const newUrl = `subjects/${id}/questions/?limit=${LIMIT}&offset=${LIMIT * page}`;

  const [dataChangeDetection, setDataChangeDetection] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const isId = localStorage.getItem('id') == id;
  const { count } = newData;
  const totalDataUrl = `subjects/${id}/questions/?limit=${count}`;

  const isMobilSize = useIsMobileSize();

  useEffect(() => {
    if (!loading) {
      setNewData(data);
    }
  }, [loading]);

  //데이터에 변경사항이 생기면 최신 데이터를 호출
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosBaseURL.get(url);
        setNewData(response.data);
      } catch {
        console.error('에러가 발생했습니다!');
      } finally {
        setDataChangeDetection(false);
        setPage(0);
        setHasMoreData(true);
      }
    };

    if (dataChangeDetection) {
      getData();
    }
  }, [dataChangeDetection]);

  //스크롤을 내리면 추가적인 데이터가 있을 시 호출
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
        if (response.data.next === null) {
          setHasMoreData(false);
        }
      } catch {
        console.error('에러가 발생했습니다!');
      }
    };

    if (page) {
      getData();
    }
  }, [page]);

  // 모달창을 띄우는 함수
  const handleShowModal = () => {
    setModalOpen(true);
  };

  // 전체 데이터를 호출하여 차례대로 삭제
  const handleDeleteButton = async () => {
    try {
      const response = await axiosBaseURL.get(totalDataUrl);
      const { results } = response.data;
      for (const item of results) {
        try {
          await axiosBaseURL.delete(`questions/${item.id}/`);
        } catch (error) {
          console.error(`Error deleting question ${item.id}: ${error}`);
        }
      }
      setDataChangeDetection(true);
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }
  };

  return (
    <DataChangeDetectionContext.Provider value={setDataChangeDetection}>
      <div className={styles.mainSection}>
        <div className={styles.questionBox}>
          {isId && count !== 0 && (
            <ButtonFloating handleButtonClick={handleDeleteButton} text='전체 삭제' className={styles.deleteButton} />
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
