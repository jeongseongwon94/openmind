import ButtonBox from '../ButtonBox/ButtonBox';
import styles from './Answer.module.css';

export default function Answer({
  showAnswerForm,
  name,
  imageSource,
  alt = '사용자 이미지',
  // content,
  // content = '그들을 불러 귀는 이상의 오직 피고',
  isRejected,
  createdAt,
  placeholder = '답변을 입력해주세요',
  answer,
  textareaValue,
  handleTextareaChange,
  textareaClassName,
}) {
  return (
    <div className={styles.wrap}>
      <img className={styles.imageSource} src={imageSource} alt={alt} />
      <div className={styles.answerWrap}>
        <div className={styles.nameWrap}>
          <span className={styles.name}>{name}</span>
          {answer && <span className={styles.createdAt}>{createdAt}</span>}
        </div>

        {showAnswerForm ? (
          isRejected ? (
            <p className={styles.reject}>답변 거절</p>
          ) : (
            <p className={styles.accept}>{content}</p>
          )
        ) : (
          <>
            <textarea
              className={styles.textarea}
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder={placeholder}
              onInput={handleTextareaChange}
              value={textareaValue}
            ></textarea>
            <ButtonBox className={textareaClassName} text={textareaValue}>
              답변 완료
            </ButtonBox>
          </>
        )}
      </div>
    </div>
  );
}
