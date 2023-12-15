import QuestionBox from './QuestionBox';
import EmptyQuestionBox from './EmptyQuestionBox';
import ButtonFloating from '../../common/ButtonFloating/ButtonFloating';
import { useIsMobileSize } from '../../../hooks/useIsMobileSize';
import styles from './MainSection.module.css';

export default function MainSection({ questionCount }) {
  const selectedQuestionBox = questionCount === 0 ? <EmptyQuestionBox /> : <QuestionBox />;
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
    </div>
  );
}
