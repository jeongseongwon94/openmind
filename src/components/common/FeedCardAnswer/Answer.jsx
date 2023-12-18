import { useContext } from 'react';
import { SubjectDataContext } from '../../../contexts/SubjectDataContext';
import ButtonBox from '../ButtonBox/ButtonBox';
import styles from './Answer.module.css';
import { getElapsedTime } from '../../../utils/getElapsedTime';

export default function Answer({
  showAnswerForm,
  answer,
  textareaValue,
  handleTextareaChange,
  textareaClassName,
  handleAnswerCreate,
}) {
  const { id, content, createdAt, questionId, isRejected } = answer || {};

  const { name, imageSource } = useContext(SubjectDataContext);

  // answer 여부에 따라 답변 표시
  return (
    <div className={styles.wrap}>
      {showAnswerForm && <img className={styles.imageSource} src={imageSource} alt='사용자 이미지' />}

      <div className={styles.answerWrap}>
        <div className={styles.nameWrap}>
          {showAnswerForm && <span className={styles.name}>{name}</span>}
          {answer && <span className={styles.createdAt}>{getElapsedTime(createdAt)}</span>}
        </div>

        {/* answer O -> 답변, X : form */}
        {answer ? (
          isRejected ? (
            <p className={styles.reject}>답변 거절</p>
          ) : (
            <p className={styles.accept}>{content}</p>
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
