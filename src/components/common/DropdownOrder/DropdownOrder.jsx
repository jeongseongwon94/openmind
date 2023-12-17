import { useState } from 'react';
import arrowUpImage from '../../../images/icons/arrowUp.svg';
import arrowDownImage from '../../../images/icons/arrowDown.svg';
import styles from './DropdownOrder.module.css';

export default function DropdownOrder({ list, children, setSort }) {
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

  const handleNameSortClick = () => {
    setSort('name');
    setSelectedOrder(list[0]);
  };

  const handleNewestClick = () => {
    setSort('time');
    setSelectedOrder(list[1]);
  };

  return (
    <div className={!isDropdownView ? styles.orderBox : styles.orderBoxOpen} onBlur={handleBlurContainer}>
      <button className={!isDropdownView ? styles.orderButton : styles.orderButtonOpen} onClick={handleClickContainer}>
        {selectedOrder}
        {!isDropdownView ? (
          <img className={styles.arrowDown} src={arrowDownImage} alt='기본 화살표' />
        ) : (
          <img className={styles.arrowUp} src={arrowUpImage} alt='오픈 화살표' />
        )}
      </button>
      {isDropdownView && (
        <ul className={styles.orderList}>
          <li className={styles.order} onClick={handleNameSortClick}>
            {list[0]}
          </li>
          <li className={styles.order} onClick={handleNewestClick}>
            {list[1]}
          </li>
        </ul>
      )}
    </div>
  );
}
