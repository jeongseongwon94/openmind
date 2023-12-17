import { useContext } from 'react';
import { useGetData } from '../../../hooks/useGetData';
import { SubjectDataContext } from '../../../contexts/SubjectDataContext';

import FeedCard from '../FeedCard/FeedCard';
import messages from '../../../images/icons/messages.svg';
import empty from '../../../images/empty.svg';

import styles from './QuestionBox.module.css';

export default function QuestionBox() {
  const { id } = useContext(SubjectDataContext);
  const url = `subjects/${id}/questions/`;
  const { data, loading } = useGetData(url);
  if (loading) {
    return [];
  }
  const { count, results } = data;

  return (
    <div className={styles.questionBox}>
      <div className={styles.text}>
        <img className={styles.messagesIcon} src={messages} alt='messageIcon' />
        <span className={styles.messages}>{count === 0 ? `아직 질문이 없습니다` : `${count}개의 질문이 있습니다`}</span>
      </div>
      {count === 0 ? <img className={styles.emptyIcon} src={empty} alt='questionBoxIcon' /> : []}
      <div className={styles.feedCardList}>
        {results?.map((result) => {
          <FeedCard data={result} showKebab={true} />;
        }) ?? []}
      </div>
    </div>
  );
}
