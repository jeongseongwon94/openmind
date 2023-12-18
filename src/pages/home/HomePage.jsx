import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import InputField from '../../components/common/InputField/InputField';
import ButtonBox from '../../components/common/ButtonBox/ButtonBox';

import { axiosBaseURL } from '../../apis/axiosBaseURL';

import logo from '../../images/logo.svg';
import personIcon from '../../images/icons/person.svg';
import arrowIcon from '../../images/icons/arrow.svg';

import styles from './HomePage.module.css';

export default function HomePage() {
  const [userName, setUserName] = useState('');
  const navigateToFeed = useNavigate();
  const navigateToList = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('id')) {
      navigateToList('/list');
    }
  }, []);

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const createUserId = async () => {
    const response = await axiosBaseURL.post(
      'subjects/',
      { name: userName },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = response.data;

    return data.id;
  };

  // 현재 저장되어 있는 총 피드의 수(count)를 가져 옴
  const getTotalUserCount = async () => {
    const response = await axiosBaseURL.get('subjects/');
    const count = response.data.count;
    return count;
  };

  // 현재 저장되어 있는 모든 유저 정보 배열을 가져 옴
  const getTotalUserData = async () => {
    const count = await getTotalUserCount();
    const response = await axiosBaseURL.get(`subjects/?limit=${count}`);
    const data = response.data.results;
    return data;
  };

  const isExistedName = async () => {
    const totalUserArray = await getTotalUserData();

    return totalUserArray.some(({ name }) => name === userName);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setUserName('');

    const isExisted = await isExistedName();
    if (isExisted) {
      alert('이미 존재하는 이름입니다. 다른 이름을 입력해주세요.');
      return;
    }

    const id = await createUserId();
    localStorage.setItem('id', id);
    navigateToFeed(`/post/${id}/answer`);
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt='오픈마인드 로고' className={styles.logo} />
      <div className={styles.btnContainer}>
        <ButtonBox className='lightButton' handleButtonClick={() => navigateToList('/list')}>
          <span className={styles.btnText}>
            질문하러가기
            <img className={styles.arrowIcon} src={arrowIcon} alt='오른쪽을 가리키는 화살표 아이콘' />
          </span>
        </ButtonBox>
      </div>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <InputField
          defaultText='이름을 입력하세요'
          iconSrc={personIcon}
          iconAlt='사람 모양 아이콘'
          handleInputChange={handleInputChange}
          value={userName}
        />
        <ButtonBox className='darkButton' text={userName}>
          질문 받기
        </ButtonBox>
      </form>
    </div>
  );
}
