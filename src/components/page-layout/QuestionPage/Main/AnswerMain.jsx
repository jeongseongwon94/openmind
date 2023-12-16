import Answer from '../../../common/FeedCardAnswer/Answer';
import ButtonFloating from '../../../common/ButtonFloating/ButtonFloating';
import DropdownKebab from '../../../common/DropdownKebab/DropdownKebab';
import styles from './AnswerMain.module.css';

export default function AnswerMain({
  showAnswerForm,
  // subject
  name,
  imageSource,
  alt,
  // answer
  content,
  isRejected,
  createdAt,
  placeholder,
  // question
  answer,
}) {
  // 삭제하기 버튼 클릭 시 삭제 로직 (data가 필요없을거같음)
  const handleButtonClick = (e) => {
    console.log(e);
  };

  const list = ['수정하기', '삭제하기'];

  return (
    <main>
      <ButtonFloating handleButtonClick={handleButtonClick} text='삭제하기' className={styles.deleteButton} />
      <DropdownKebab list={list} />

      <Answer
        showAnswerForm={showAnswerForm}
        createdAt={createdAt}
        name={name}
        imageSource={imageSource}
        alt={alt}
        answer={answer}
        content={content}
        isRejected={isRejected}
        placeholder={placeholder}
      />
    </main>
  );
}
