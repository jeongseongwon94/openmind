import styles from './FeedCard.module.css';

export default function FeedCard({ data, showKebab }) {
  return (
    <div>
      <Badge />
      {/* {showKebab && <Kebab />} */}
      <Question />
      <Answer />
      <Reaction />
      {/* {showEdit && <Edit />} */}
    </div>
  );
}
