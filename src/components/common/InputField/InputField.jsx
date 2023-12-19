import styles from './InputField.module.css';

export default function InputField({ defaultText, iconSrc, iconAlt, value, handleInputChange, id, type }) {
  return (
    <div className={styles.inputContainer}>
      <img className={styles.icon} src={iconSrc} alt={iconAlt} />
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

// function Form({hendleSubmit, defaultText, handleInputChange, user, id, type}) {
//   return (
//     <form>
//       <label htmlFor="">

//       </label>
//     </form>
//   )
// }
