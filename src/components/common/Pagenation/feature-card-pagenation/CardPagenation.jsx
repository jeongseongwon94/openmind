import Pagenation from '../ui-pagenation/Pagenation';
import PagenationWrap from '../ui-pagenation-wrap/PagenationWrap';
import styles from './CardPagenation.module.css';
import { useState } from 'react';

export default function CardPagenation({ className }) {
  const layout = styles[className];

  const [currentValue, setCurrentValue] = useState(1);
  const totalValue = 5;

  const handleChangeValue = (newValue) => {
    setCurrentValue(newValue);
  };

  const handleOnClick = (value) => {};

  const handleOnEnter = (value) => {};

  return (
    <div className={layout}>
      <PagenationWrap start='<' end='>' handleOnClick={handleOnClick} handleOnEnter={handleOnEnter}>
        <Pagenation current={currentValue} total={totalValue} handleChangeValue={handleChangeValue}></Pagenation>
      </PagenationWrap>
    </div>
  );
}
