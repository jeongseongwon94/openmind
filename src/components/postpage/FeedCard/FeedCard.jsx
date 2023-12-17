import Badge from '../../common/Badge/Badge';
import Question from '../Question/Question';
import Reaction from '../../common/Reaction/Reaction';

import styles from './FeedCard.module.css';

export default function FeedCard({ data, showKebab }) {
  const { id, answer, createdAt, content, like, dislike } = data;

  return (
    <div className={styles.feedCard}>
      {answer === null ? <Badge className='inActive' text='미답변' /> : <Badge className='active' text='답변 완료' />}
      {/* {showKebab && <Kebab />} */}
      <Question createdAt={createdAt} content={content} />
      {/* <Answer /> */}
      <Reaction id={id} like={like} dislike={dislike} />
      {/* {showEdit && <Edit />} */}
    </div>
  );
}
