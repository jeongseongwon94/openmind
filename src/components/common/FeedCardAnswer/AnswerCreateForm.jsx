import ButtonBox from '../ButtonBox/ButtonBox';
import styles from './AnswerCreateForm.module.css';

export default function AnswerCreateForm({ content, placeholder }) {
  const contentClassName = content ? 'darkButton' : 'lightButton';

  return (
    <form>
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
    </form>
  );
}
