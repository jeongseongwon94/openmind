import Answer from '../../../common/FeedCardAnswer/Answer';
import ButtonFloating from '../../../common/ButtonFloating/ButtonFloating';
import DropdownKebab from '../../../common/DropdownKebab/DropdownKebab';
import styles from './AnswerMain.module.css';

export default function AnswerMain({
  showAnswerForm,
  name,
  imageSource,
  alt,
  content,
  isRejected,
  createdAt,
  placeholder,
  answer,
  textareaValue,
  handleTextareaChange,
  textareaClassName,
  handleButtonClick,
}) {
  const list = ['수정하기', '삭제하기'];
  return (
    <main>
      <ButtonFloating handleButtonClick={handleButtonClick} text='삭제하기' className={styles.deleteButton} />
      <DropdownKebab list={list} />

      <Answer
        showAnswerForm={showAnswerForm}
        name={name}
        imageSource={imageSource}
        alt={alt}
        content={content}
        isRejected={isRejected}
        createdAt={createdAt}
        placeholder={placeholder}
        answer={answer}
        textareaValue={textareaValue}
        handleTextareaChange={handleTextareaChange}
        textareaClassName={textareaClassName}
      />
    </main>
  );
}
