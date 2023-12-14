import { useState } from 'react';
import styles from './CardPagenation.module.css';
import Pagenation from '../ui-pagenation/Pagenation';
import PagenationWrap from '../ui-pagenation-wrap/PagenationWrap';

export default function CardPagenation({ className }) {
  const [currentValue, setCurrentValue] = useState(1);
  const totalValue = 5;

  const handleChangeValue = (newValue) => {
    setCurrentValue(newValue);
  };

  const handleOnClick = (value) => {};

  const handleOnEnter = (value) => {};

  return (
    <div className={styles[`${className}`]}>
      <PagenationWrap start='<' end='>' handleOnClick={handleOnClick} handleOnEnter={handleOnEnter}>
        <Pagenation current={currentValue} total={totalValue} handleChangeValue={handleChangeValue} />
      </PagenationWrap>
    </div>
  );
}
