import { useIsMobileSize } from '../../../hooks/useIsMobileSize';

import QuestionBox from '../QuestionBox/QuestionBox';
import ButtonFloating from '../../common/ButtonFloating/ButtonFloating';

import styles from './MainSection.module.css';

export default function MainSection() {
  // modalOpen 이라는 state값을 만들고 그 값에 따라 Modal창을 조건부 랜더링
  //아래 함수에 Modal 컴포넌트를 띄우는 코드를 추후 작성
  const handleButtonClick = () => {
    console.log('modal');
  };

  const isMobilSize = useIsMobileSize();

  return (
    <div className={styles.mainSection}>
      <QuestionBox />
      <ButtonFloating
        className={styles.askQuestionButton}
        handleButtonClick={handleButtonClick}
        text={isMobilSize ? `질문 작성` : `질문 작성하기`}
      />
      {/* {modalOpen && <Modal />} */}
    </div>
  );
}
