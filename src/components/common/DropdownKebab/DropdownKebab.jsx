import { useState } from 'react';
import more from '../../../images/icons/more.svg';
import editImage from '../../../images/icons/edit.svg';
import styles from './DropdownKebab.module.css';

export default function DropdownKebab({ list, handleButtonClick }) {
  const [isDropdownView, setDropdownView] = useState(false);
  const setTime = 200;
  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, setTime);
  };

  return (
    <div onBlur={handleBlurContainer} className={styles.kebabBox}>
      <button onClick={handleClickContainer}>
        <img src={more} alt='케밥버튼 이미지' />
      </button>
      {isDropdownView && (
        <ul className={styles.buttonList}>
          {list.map((buttonName) => (
            <li className={styles.button} key={buttonName} onClick={handleButtonClick}>
              <img className={styles.buttonImage} src={editImage} alt='수정버튼 이미지' />
              {buttonName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
