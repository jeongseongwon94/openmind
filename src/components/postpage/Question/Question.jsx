import { getElapsedTime } from '../../../utils/getElapsedTime';

import styles from './Question.module.css';

export default function Question({ createdAt, content }) {
  const elapsedTime = getElapsedTime(createdAt);
  return (
    <div className={styles.question}>
      <div className={styles.text}>{`질문 · ${elapsedTime}`}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}
