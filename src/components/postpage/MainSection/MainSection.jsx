import QuestionBox from '../QuestionBox/QuestionBox';
import EmptyQuestionBox from '../EmptyQuestionBox/EmptyQuestionBox';
import ButtonFloating from '../../common/ButtonFloating/ButtonFloating';
import { useIsMobileSize } from '../../../hooks/useIsMobileSize';
import styles from './MainSection.module.css';

export default function MainSection({ id, questionCount }) {
  //questionCount가 다 0인 상태여서 !==으로 했는데 ===으로 수정해야함
  const selectedQuestionBox = questionCount !== 0 ? <EmptyQuestionBox /> : <QuestionBox id={id} />;
  // modalOpen 이라는 state값을 만들고 그 값에 따라 Modal창을 조건부 랜더링
  //아래 함수에 Modal 컴포넌트를 띄우는 코드를 추후 작성
  const handleButtonClick = () => {
    console.log('modal');
  };
  const isMobilSize = useIsMobileSize();
  const AskQuestionButtonText = isMobilSize ? `질문 작성` : `질문 작성하기`;

  return (
    <div className={styles.mainSection}>
      {selectedQuestionBox}
      <ButtonFloating
        className={styles.AskQuestionButton}
        handleButtonClick={handleButtonClick}
        text={AskQuestionButtonText}
      />
      {/* {modalOpen && <Modal />} */}
    </div>
  );
}
