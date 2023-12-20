import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ButtonBox from '../../components/common/ButtonBox/ButtonBox';
import SignInForm from '../../components/SignInForm/SignInForm';
import DropdownOrder from '../../components/common/DropdownOrder/DropdownOrder';

import { isExistedName } from './nameValidation';
import { createUserData } from './createUserData';

import logo from '../../images/logo.svg';
import arrowIcon from '../../images/icons/arrow.svg';

import styles from './HomePage.module.css';

export default function HomePage() {
  const [user, setUser] = useState('');
  const [clickList, setClickList] = useState('ㅤ분야');
  const navigateToFeed = useNavigate();
  const navigateToList = useNavigate();

  const id = localStorage.getItem('id');
  const name = localStorage.getItem(`${id}`);

  const handleInputChange = (e) => {
    setUser(e.target.value);
  };

  const handleCategoryClick = (e) => {
    setClickList(e.target.innerText);
  };

  const handleNameSubmit = async (e) => {
    e.preventDefault();
    setUser('');

    if (clickList === '분야') {
      alert(`전문 분야를 선택해주세요.`);
      return;
    }

    const isExisted = await isExistedName(`[${clickList}] ${user}`);
    if (isExisted) {
      alert('이미 존재하는 이름입니다. 다른 이름을 입력해주세요.');
      return;
    }

    if (confirm(`${user}님, 신당을 배정해드릴까요?`) !== true) {
      return;
    }

    const data = await createUserData(`[${clickList}] ${user}`);
    const { id, name } = data;

    localStorage.setItem('id', id);
    localStorage.setItem(`${id}`, name);

    alert(`당신의 신당 암호는 ${id}입니다.\n다시 입장하실 때에는 신당 암호를 입력해주세요.`);

    navigateToFeed(`/post/${id}/answer`);
  };

  const handleIdSubmit = (e) => {
    e.preventDefault();
    setUser('');

    if (user !== id) {
      alert(`신당 암호를 다시 확인해주세요.\n혹여 다른 분의 신당에 무단 침입할 시 불이익이 있을 수 있습니다.`);
      return;
    }

    navigateToFeed(`/post/${id}/answer`);
  };

  const signUPLabelText =
    clickList === '분야'
      ? `신입 보살님\n먼저 전문 분야를 선택해주세요.`
      : `${clickList} 전문가시군요.\n이름을 알려주시면 신당을 배정해드리겠습니다.`;

  return (
    <div className={styles.container}>
      <img src={logo} alt='오픈마인드 로고' className={styles.logo} />
      <div className={styles.btnContainer}>
        <ButtonBox className='lightButton' text='질문하러가기' handleButtonClick={() => navigateToList('/list')}>
          <span className={styles.btnText}>
            고민 토로하기
            <img className={styles.arrowIcon} src={arrowIcon} alt='오른쪽을 가리키는 화살표 아이콘' />
          </span>
        </ButtonBox>
      </div>
      {!id && (
        <div className={styles.dropdown}>
          <p className={styles.dropdownTitle}>{`환영합니다! 어떤 고민을 들어주실 수 있나요?`}</p>
          <DropdownOrder list={list} clickList={clickList} handleButtonClick={handleCategoryClick} />
        </div>
      )}
      {id ? (
        <SignInForm
          handleSubmit={handleIdSubmit}
          labelText={`${name}님\n고민을 들어주실 준비가 되셨습니까?`}
          inputDefaultText='신당 암호를 입력하세요.'
          handleInputChange={handleInputChange}
          value={user}
          id='enrolled'
          type='number'
          buttonText='신당 입장하기'
        />
      ) : (
        <SignInForm
          handleSubmit={handleNameSubmit}
          labelText={signUPLabelText}
          inputDefaultText='이름을 입력하세요.'
          handleInputChange={handleInputChange}
          value={user}
          id='new'
          type='text'
          buttonText='신당 배정받기'
        />
      )}
    </div>
  );
}

const list = ['건강', '고민', '연애', '운세', '진로'];
