import AnswerLayout from '../../../common/FeedCardAnswer/AnswerLayout';
import Answer from '../../../common/FeedCardAnswer/Answer';
import AnswerCreateForm from '../../../common/FeedCardAnswer/AnswerCreateForm';
import ButtonFloating from '../../../common/ButtonFloating/ButtonFloating';
import DropdownKebab from '../../../common/DropdownKebab/DropdownKebab';
import styles from './AnswerMain.module.css';

export default function AnswerMain({
  // subject
  name = '아초는고양이',
  imageSource = '/src/images/profile.svg',
  alt = '사용자 이미지',

  // answer
  content = '그들을 불러 귀는 이상의 오직 피고,',
  isRejected = 'false',
  createdAt = '2주전',
  placeholder = '답변을 입력해주세요',

  // question
  answer,
}) {
  // 삭제하기 버튼 클릭 시 삭제 로직 (data가 필요없을거같음)
  const handleButtonClick = (e) => {
    console.log(e);
  };

  const list = ['수정하기', '삭제하기'];

  return (
    <main>
      <ButtonFloating handleButtonClick={handleButtonClick} text='삭제하기' className={styles.deleteButton} />
      <DropdownKebab list={list} />
      <AnswerLayout createdAt={createdAt} name={name} imageSource={imageSource} alt={alt} answer={answer}>
        {answer ? (
          <Answer content={content} isRejected={isRejected} />
        ) : (
          <AnswerCreateForm content={content} placeholder={placeholder} />
        )}
      </AnswerLayout>
    </main>
  );
}
