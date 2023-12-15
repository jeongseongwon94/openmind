import { useState } from 'react';
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setUserName('');

    if (localStorage.getItem('id')) {
      navigateToFeed(`/post/${localStorage.getItem('id')}/answer`); // 이렇게 코드를 짜면 이미 저장된 id가 있다면 어떤 이름을 새로 입력하든 그 피드로 이동함. 입력한 이름에 맞는 피드 페이지로 이동하려면?
    }

    const id = await createUserId();
    localStorage.setItem('id', id);
    navigateToFeed(`/post/${id}/answer`); // 이렇게만 코드를 짜면 같은 이름을 입력해도 항상 새로운 피드가 생성됨(로컬스토리지에 저장된 id 값이 계속 새로운 값으로 덮어씌워 짐)
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
