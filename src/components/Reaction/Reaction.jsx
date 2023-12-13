import thumbsUp from '../../assets/icons/thumbsUp.svg';
import thumbsDown from '../../assets/icons/thumbsDown.svg';
import styles from './Reaction.module.css';

export default function Reaction({ handleButtonClick, like, dislike }) {
  const likeStatus = `좋아요 ${like === 0 ? '' : like}`;
  const dislikeStatus = `싫어요 ${dislike === 0 ? '' : dislike}`;

  return (
    <div className={styles.reaction}>
      <button className={styles.like} onClick={handleButtonClick}>
        <img src={thumbsUp} alt='thumbsUp' />
        {likeStatus}
      </button>
      <button className={styles.dislike} onClick={handleButtonClick}>
        <img src={thumbsDown} alt='thumbsDown' />
        {dislikeStatus}
      </button>
    </div>
  );
}
