import inputIcon from '../../../images/icons/inputIcon.svg';
import styles from './InputField.module.css';

export default function InputField({ defaultText, value, handleInputChange, id, type }) {
  return (
    <div className={styles.inputContainer}>
      <img className={styles.icon} src={inputIcon} alt='사람 모양 아이콘' />
      <input
        className={styles.input}
        type={type}
        id={id}
        value={value}
        placeholder={defaultText}
        onChange={handleInputChange}
      />
    </div>
  );
}
