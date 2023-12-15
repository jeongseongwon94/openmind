import styles from './InputField.module.css';

export default function InputField({ defaultText, iconSrc, iconAlt, value, handleInputChange }) {
  return (
    <div className={styles.inputContainer}>
      <img className={styles.icon} src={iconSrc} alt={iconAlt} />
      <input
        className={styles.input}
        type='text'
        placeholder={defaultText}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}
