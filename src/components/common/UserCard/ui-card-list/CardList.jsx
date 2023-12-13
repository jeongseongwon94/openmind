import styles from './CardList.module.css';

export default function CardList({ children, className }) {
  return <div className={styles[`${className}`]}>{children}</div>;
}
