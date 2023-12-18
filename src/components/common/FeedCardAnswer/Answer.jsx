import { useContext } from 'react';
import { SubjectDataContext } from '../../../contexts/SubjectDataContext';
import ButtonBox from '../ButtonBox/ButtonBox';
import styles from './Answer.module.css';

export default function Answer({
  showAnswerForm,
  textareaValue,
  handleTextareaChange,
  textareaClassName,
  handleAnswerCreate,
}) {
  const { subjectIdData, answerData } = useContext(SubjectDataContext);

  // answer 여부에 따라 답변 표시
  return (
    <div className={styles.wrap}>
      {showAnswerForm && <img className={styles.imageSource} src={subjectIdData.imageSource} alt='사용자 이미지' />}

      <div className={styles.answerWrap}>
        <div className={styles.nameWrap}>
          {showAnswerForm && <span className={styles.name}>{subjectIdData.name}</span>}
          {answerData.answer && <span className={styles.createdAt}>{subjectIdData.createdAt}</span>}
        </div>

        {/* answer O -> 답변, X : form */}
        {answerData.answer ? (
          answerData.isRejected ? (
            <p className={styles.reject}>답변 거절</p>
          ) : (
            <p className={styles.accept}>{answerData.content}</p>
          )
        ) : (
          showAnswerForm && (
            <>
              <textarea
                className={styles.textarea}
                name=''
                id=''
                cols='30'
                rows='10'
                placeholder='답변을 입력해주세요'
                onInput={handleTextareaChange}
                value={textareaValue}
              ></textarea>
              <ButtonBox className={textareaClassName} text={textareaValue} handleButtonClick={handleAnswerCreate}>
                답변 완료
              </ButtonBox>
            </>
          )
        )}
      </div>
    </div>
  );
}
