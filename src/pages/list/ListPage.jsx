import UserCard from '../../components/common/UserCard/ui-card/UserCard';
import CardPagenation from '../../components/common/Pagenation/feature-card-pagenation/CardPagenation';
import styles from './ListPage.module.css';

// Card, CardPagenation 컴포넌트 확인을 위한 테스트 목적의 내용입니다.
export default function ListPage() {
  const arr = [...Array(8).keys()];

  return (
    <>
      <div className={styles.wrap}>
        {arr?.map((data) => (
          <UserCard key={data} {...data} />
        ))}
      </div>
      <CardPagenation className='wrap' />
    </>
  );
}
