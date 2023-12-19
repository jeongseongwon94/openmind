import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate, Navigate } from 'react-router-dom';

import InputField from '../../components/common/InputField/InputField';
import ButtonBox from '../../components/common/ButtonBox/ButtonBox';

import { createUserData } from './createUserData';

import logo from '../../images/logo.svg';
import personIcon from '../../images/icons/person.svg';
import arrowIcon from '../../images/icons/arrow.svg';

import styles from './HomePage.module.css';
import { isExistedName } from './nameValidation';

export default function HomePage() {
  const [user, setUser] = useState('');
  const navigateToFeed = useNavigate();
  const navigateToList = useNavigate();

  // if (id) return <Navigate to='/list' />;

  const id = localStorage.getItem('id');
  const name = localStorage.getItem(`${id}`);

  const handleInputChange = (e) => {
    setUser(e.target.value);
  };

  const handleNameSubmit = async (e) => {
    e.preventDefault();
    setUser('');

    const isExisted = await isExistedName(user);
    if (isExisted) {
      alert('이미 존재하는 이름입니다. 다른 이름을 입력해주세요.');
      return;
    }

    if (confirm(`${user}님, 상담실을 배정해드릴까요?`) !== true) {
      return;
    }

    const data = await createUserData(user);
    const { id, name } = data;

    localStorage.setItem('id', id);
    localStorage.setItem(`${id}`, name);

    alert(`당신의 상담실은 ${id}호입니다. 다시 입장하실 때에는 상담실 번호를 입력해주세요.`);

    navigateToFeed(`/post/${id}/answer`);
  };

  const handleIdSubmit = (e) => {
    e.preventDefault();
    setUser('');

    if (user !== id) {
      alert('상담실 번호를 다시 확인해주세요.');
      return;
    }

    navigateToFeed(`/post/${id}/answer`);
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt='오픈마인드 로고' className={styles.logo} />
      <div className={styles.btnContainer}>
        <ButtonBox className='lightButton' text='질문하러가기' handleButtonClick={() => navigateToList('/list')}>
          <span className={styles.btnText}>
            질문하러가기
            <img className={styles.arrowIcon} src={arrowIcon} alt='오른쪽을 가리키는 화살표 아이콘' />
          </span>
        </ButtonBox>
      </div>
      {id ? (
        <form className={styles.form} onSubmit={handleIdSubmit}>
          <label htmlFor='enrolled' className={styles.label}>
            {`${name}님 고민을 들어주실 준비가 되셨습니까?`}
          </label>
          <InputField
            defaultText='상담실 번호를 입력하세요.'
            iconSrc={personIcon}
            iconAlt='사람 모양 아이콘'
            handleInputChange={handleInputChange}
            value={user}
            id='enrolled'
            type='number'
          />
          <ButtonBox className='darkButton' text={user}>
            상담실 입장하기
          </ButtonBox>
        </form>
      ) : (
        <form className={styles.form} onSubmit={handleNameSubmit}>
          <label htmlFor='new' className={styles.label}>
            환영합니다. 이름을 알려주시면 상담실을 배정해드리겠습니다.
          </label>
          <InputField
            defaultText='이름을 입력하세요'
            iconSrc={personIcon}
            iconAlt='사람 모양 아이콘'
            handleInputChange={handleInputChange}
            value={user}
            id='new'
            type='text'
          />
          <ButtonBox className='darkButton' text={user}>
            상담실 배정 받기
          </ButtonBox>
        </form>
      )}
    </div>
  );
}
