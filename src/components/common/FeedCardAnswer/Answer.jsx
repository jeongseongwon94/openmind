import ButtonBox from '../ButtonBox/ButtonBox';
import styles from './Answer.module.css';

export default function Answer({
  showAnswerForm,
  createdAt,
  name,
  imageSource,
  alt = '사용자 이미지',
  answer,
  content = '그들을 불러 귀는 이상의 오직 피고',
  isRejected,
  placeholder = '답변을 입력해주세요',
}) {
  const contentClassName = content ? 'darkButton' : 'lightButton';

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
              // value={content}
            ></textarea>
            <ButtonBox className={contentClassName} text={content}>
              답변 완료
            </ButtonBox>
          </>
        )}
      </div>
    </div>
  );
}
