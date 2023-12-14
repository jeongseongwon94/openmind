import { useState } from 'react';
import arrowUpImage from '../../../images/icons/arrowUp.svg';
import arrowDownImage from '../../../images/icons/arrowDown.svg';
import styles from './DropdownOrder.module.css';

export default function DropdownOrder({ children, List, data }) {
  const [isDropdownView, setDropdownView] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(children);
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
    <div className={!isDropdownView ? styles.orderBox : styles.orderBoxOpen} onBlur={handleBlurContainer}>
      <label onClick={handleClickContainer}>
        <button className={!isDropdownView ? styles.orderButton : styles.orderButtonOpen}>
          {selectedOrder}
          {!isDropdownView ? (
            <img className={styles.arrowDown} src={arrowDownImage} alt='기본 화살표' />
          ) : (
            <img className={styles.arrowUp} src={arrowUpImage} alt='오픈 화살표' />
          )}
        </button>
      </label>
      {isDropdownView && (
        <ul className={styles.orderList}>
          {List.map((li) => (
            <li
              className={styles.order}
              key={li}
              onClick={() => {
                setSelectedOrder(li);
              }}
            >
              {li}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
