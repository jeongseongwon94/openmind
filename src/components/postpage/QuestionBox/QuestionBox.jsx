import FeedCard from '../FeedCard/FeedCard';
import messages from '../../../images/icons/messages.svg';
import empty from '../../../images/empty.svg';

import styles from './QuestionBox.module.css';

export default function QuestionBox({ newData }) {
  const { count, results } = newData;
  const sortedResults = results?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className={styles.questionBox}>
      <div className={styles.text}>
        <img className={styles.messagesIcon} src={messages} alt='messageIcon' />
        <span className={styles.messages}>{count === 0 ? `아직 질문이 없습니다` : `${count}개의 질문이 있습니다`}</span>
      </div>
      {count === 0 ? <img className={styles.emptyIcon} src={empty} alt='questionBoxIcon' /> : null}
      <div className={styles.feedCardList}>
        {sortedResults?.map((result) => <FeedCard key={result.id} data={result} />) ?? []}
      </div>
    </div>
  );
}
