import { useContext } from 'react';

import ButtonBox from '../../common/ButtonBox/ButtonBox';
import InputTextArea from '../../common/InputTextarea/InputTextarea';

import { SubjectDataContext } from '../../../contexts/SubjectDataContext';
import { getElapsedTime } from '../../../utils/getElapsedTime';

import styles from './Answer.module.css';

export default function Answer({
  answer,
  textareaValue,
  handleTextareaChange,
  editCheck,
  handleAnswerEdit,
  handleAnswerCreate,
}) {
  const { content, createdAt, isRejected } = answer || {};

  const { id: subjectId, name, imageSource } = useContext(SubjectDataContext);
  const isId = localStorage.getItem('id') == subjectId;

  return (
    <div className={styles.wrap}>
      <img className={styles.imageSource} src={imageSource} alt='사용자 이미지' />
      <div className={styles.answerWrap}>
        <div className={styles.nameWrap}>
          <span className={styles.name}>{name}</span>
          {answer && <span className={styles.createdAt}>{getElapsedTime(createdAt)}</span>}
        </div>

        {answer ? (
          editCheck ? (
            <form className={styles.form} onSubmit={handleAnswerEdit}>
              <InputTextArea
                className={styles.answerTextArea}
                placeholder='답변을 입력해주세요'
                handleTextareaChange={handleTextareaChange}
                value={textareaValue}
              />
              <ButtonBox className='darkButton' text={textareaValue}>
                수정 완료
              </ButtonBox>
            </form>
          ) : isRejected ? (
            <p className={styles.reject}>답변 거절</p>
          ) : (
            <p className={styles.accept}>{content}</p>
          )
        ) : isId ? (
          <form className={styles.form} onSubmit={handleAnswerCreate}>
            <InputTextArea
              className={styles.answerTextArea}
              placeholder='답변을 입력해주세요'
              handleTextareaChange={handleTextareaChange}
              value={textareaValue}
            />
            <ButtonBox className='darkButton' text={textareaValue}>
              답변 완료
            </ButtonBox>
          </form>
        ) : (
          <p className={styles.queue}>잠시만 기다려 주세요. 당신의 고민을 해결 중 입니다.</p>
        )}
      </div>
    </div>
  );
}
