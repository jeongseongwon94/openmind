import ButtonBox from '../common/ButtonBox/ButtonBox';
import InputField from '../common/InputField/InputField';
import styles from './SignInForm.module.css';

export default function SignInForm({
  handleSubmit,
  labelText,
  inputDefaultText,
  handleInputChange,
  value,
  id,
  type,
  buttonText,
}) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={id} className={styles.label}>
        {labelText}
      </label>
      <InputField
        defaultText={inputDefaultText}
        handleInputChange={handleInputChange}
        value={value}
        id={id}
        type={type}
      />
      <ButtonBox className='darkButton' text={value}>
        {buttonText}
      </ButtonBox>
    </form>
  );
}
