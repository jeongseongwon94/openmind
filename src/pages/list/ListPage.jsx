import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserCard from '../../components/common/UserCard/ui-card/UserCard';
import CardPagenation from '../../components/common/Pagenation/feature-card-pagenation/CardPagenation';
import DropdownOrder from '../../components/common/DropdownOrder/DropdownOrder';
import ButtonBox from '../../components/common/ButtonBox/ButtonBox';
import { useIsMobileSize } from '../../hooks/useIsMobileSize';
import { useIsTabletSize } from '../../hooks/useIsTabletSize';
import { axiosBaseURL } from '../../apis/axiosBaseURL';
import logo from '../../images/logo.svg';
import arrowImage from '../../images/icons/arrow.svg';
import styles from './ListPage.module.css';

export default function ListPage() {
  const [sort, setSort] = useState('time');
  const [cardList, setCardList] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setPage] = useState(1);
  const navigateToFeed = useNavigate();
  const orderList = ['이름순', '최신순'];
  const sortedCardList = cardList.sort((a, b) => b[sort] - a[sort]);
  const Mobile_LIMIT = 6;
  const LIMIT = 8;
  const PAGE_FIX = 1;
  const isMobileSize = useIsMobileSize();
  const isTabletSize = useIsTabletSize();
  const LIMITSIZE = isMobileSize || isTabletSize ? Mobile_LIMIT : LIMIT;

  const getCardList = async ({ sort, LIMITSIZE, currentPage }) => {
    const url = `/subjects/?limit=${LIMITSIZE}&offset=${(currentPage - PAGE_FIX) * LIMITSIZE}&sort=${sort}`;
    const response = await axiosBaseURL.get(url);
    return response.data;
  };

  const handleLoad = async (options) => {
    const { results, count } = await getCardList(options);
    setCardList(results);
    setCount(count);
  };

  useEffect(() => {
    handleLoad({ sort, LIMITSIZE, currentPage });
  }, [sort, LIMITSIZE, currentPage]);

  const handleIsUserID = () => {
    const getId = localStorage.getItem('id');
    getId == null ? navigateToFeed(`/`) : navigateToFeed(`/post/${getId}/answer`);
  };

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Link to='/'>
          <img className={styles.logo} src={logo} alt='로고 이미지' />
        </Link>
        <div className={styles.buttonWidth}>
          <ButtonBox className={'lightButton'} handleButtonClick={handleIsUserID}>
            <div className={styles.answerButton}>
              답변하러 가기 <img className={styles.arrow} src={arrowImage} alt='화살표 이미지' />
            </div>
          </ButtonBox>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainHeader}>
          <div className={styles.mainText}>
            <span>누구에게 질문할까요?</span>
          </div>
          <div className={styles.dropdownBox}>
            <DropdownOrder list={orderList} setSort={setSort}>
              {orderList[1]}
            </DropdownOrder>
          </div>
        </div>
        <div className={styles.cardList}>
          {sortedCardList?.map((data) => (
            <UserCard
              id={data.id}
              key={data.id}
              name={data.name}
              imageSource={data.imageSource}
              questionCount={data.questionCount}
            />
          ))}
        </div>
        <div className={styles.pageList}>
          <CardPagenation count={count} LIMIT={LIMIT} currentPage={currentPage} setPage={setPage} />
        </div>
      </main>
    </div>
  );
}
