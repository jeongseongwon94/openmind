import { useNavigate } from 'react-router-dom';
import ButtonBox from '../../components/common/ButtonBox/ButtonBox';

import errorMessageImage from '../../images/errormessage.png';
import arrowIcon from '../../images/icons/arrow.svg';

import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  const navigateToList = useNavigate();

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img className={styles.errorMessageImage} src={errorMessageImage} alt='길을 잘못 드셨습니다라고 적힌 텍스트' />
        <p className={styles.errorMessage}>고민 해결을 원하신다면 다시 돌아가주세요.</p>
        <div className={styles.btnContainer}>
          <ButtonBox className='lightButton' text='질문하러가기' handleButtonClick={() => navigateToList('/list')}>
            <span className={styles.btnText}>
              메인페이지로 가기
              <img className={styles.arrowIcon} src={arrowIcon} alt='오른쪽을 가리키는 화살표 아이콘' />
            </span>
          </ButtonBox>
        </div>
      </div>
    </div>
  );
}
