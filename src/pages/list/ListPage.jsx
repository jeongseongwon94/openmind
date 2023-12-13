import UserCard from '../../components/common/UserCard/ui-card/UserCard';
import CardList from '../../components/common/UserCard/ui-card-list/CardList';

// Card 컴포넌트 확인을 위한 테스트 목적의 내용입니다.
export default function ListPage() {
  const arr = [...Array(8).keys()];

  return (
    <CardList className='wrap'>
      {arr?.map((data) => (
        <UserCard key={data} {...data} />
      ))}
    </CardList>
  );
}
