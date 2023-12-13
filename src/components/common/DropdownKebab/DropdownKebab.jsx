import { useState } from 'react';
import more from '../../../images/icons/more.svg';
import editImage from '../../../images/icons/edit.svg';
import styles from './DropdownKebab.module.css';

export default function DropdownKebab({ List, handleButtonClick }) {
  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  return (
    <div onBlur={handleBlurContainer} className={styles.kebabBox}>
      <label onClick={handleClickContainer}>
        <button>
          <img src={more} alt='케밥버튼 이미지' />
        </button>
      </label>
      {isDropdownView && (
        <ul className={styles.buttonList}>
          {List.map((buttonName) => (
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
