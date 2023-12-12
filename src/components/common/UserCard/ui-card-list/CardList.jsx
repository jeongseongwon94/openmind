import styles from './CardList.module.css';

export default function CardList({ children, className }) {
  const layout = styles[className];
  return <div className={layout}>{children}</div>;
}
