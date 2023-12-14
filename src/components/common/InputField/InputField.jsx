import styles from './InputField.module.css';

export default function InputField({ defaultText, iconSrc, iconAlt }) {
  return (
    <div className={styles.inputContainer}>
      <img className={styles.icon} src={iconSrc} alt={iconAlt} />
      <input className={styles.input} type='text' placeholder={defaultText} />
    </div>
  );
}