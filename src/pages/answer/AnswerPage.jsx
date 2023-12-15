import AnswerLayout from '../../components/common/FeedCardAnswer/AnswerLayout';
import Answer from '../../components/common/FeedCardAnswer/Answer';
import AnswerTextArea from '../../components/common/FeedCardAnswer/AnswerTextArea';
import ButtonFloating from '../../components/common/ButtonFloating/ButtonFloating';
import DropdownKebab from '../../components/common/DropdownKebab/DropdownKebab';
import styles from './AnswerPage.module.css';
// 테스트
export default function AnswerPage({
  // answer -> GET /answers/{answerId}/
  id,
  content = '그들을 불러 귀는 이상의 오직 피고,',
  isRejected = 'false',
  createdAt = '2주전',
  placeholder = '답변을 입력해주세요',

  // subject -> GET /subjects/{subjectId}/
  subjectId,
  name = '아초는고양이',
  imageSource = '/src/images/profile.svg',
  alt = '사용자 이미지',

  // question -> GET /{team}/questions/{id}/
  answer,
}) {
  // 삭제하기 버튼 클릭 시 삭제 로직 (data가 필요없을거같음)
  const handleButtonClick = (e) => {
    console.log(e);
  };

  const list = ['수정하기', '삭제하기'];

  return (
    // 1. HeaderLayout 적용
    // 2. FeedCardLayout 적용
    <>
      <DropdownKebab list={list} />
      <ButtonFloating handleButtonClick={handleButtonClick} text='삭제하기' className={styles.deleteButton} />
      <AnswerLayout createdAt={createdAt} name={name} imageSource={imageSource} alt={alt} answer={answer}>
        {answer ? (
          <Answer content={content} isRejected={isRejected} />
        ) : (
          <AnswerTextArea content={content} placeholder={placeholder} />
        )}
      </AnswerLayout>
    </>
  );
}
