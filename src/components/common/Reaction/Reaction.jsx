import { useState } from 'react';
import { axiosBaseURL } from '../../../apis/axiosBaseURL';

import thumbsUp from '../../../images/icons/thumbsUp.svg';
import thumbsDown from '../../../images/icons/thumbsDown.svg';
import styles from './Reaction.module.css';

export default function Reaction({ id, like, dislike }) {
  const url = `questions/${id}/reaction/`;

  const [likeCount, setLikeCount] = useState(like);
  const [dislikeCount, setDislikeCount] = useState(dislike);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isDislikeClicked, setIsDislikeClicked] = useState(false);
  const likeStatus = `좋아요 ${likeCount === 0 ? '' : likeCount}`;
  const dislikeStatus = `싫어요 ${dislikeCount === 0 ? '' : dislikeCount}`;

  const handleButtonClick = (reactionType) => {
    const postLikeReaction = async () => {
      try {
        const response = await axiosBaseURL.post(url, { type: reactionType });
        reactionType === 'like' ? setLikeCount(response.data.like) : setDislikeCount(response.data.dislike);
        reactionType === 'like' ? setIsLikeClicked(!isLikeClicked) : setIsDislikeClicked(!isDislikeClicked);
      } catch {
        console.error('에러가 발생했습니다!');
      }
    };
    postLikeReaction();
  };

  return (
    <div className={styles.reaction}>
      <button
        className={`${styles.button} ${isLikeClicked ? styles.likeClicked : ''}`}
        onClick={() => handleButtonClick('like')}
      >
        <img className={styles.img} src={thumbsUp} alt='thumbsUp' />
        {likeStatus}
      </button>
      <button
        className={`${styles.button} ${isDislikeClicked ? styles.dislikeClicked : ''}`}
        onClick={() => handleButtonClick('dislike')}
      >
        <img className={styles.img} src={thumbsDown} alt='thumbsDown' />
        {dislikeStatus}
      </button>
    </div>
  );
}
