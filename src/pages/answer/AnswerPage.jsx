import AnswerLayout from '../../components/common/FeedCardAnswer/AnswerLayout/AnswerLayout';
import Answer from '../../components/common/FeedCardAnswer/Answer/Answer';
import AnswerTextArea from '../../components/common/FeedCardAnswer/AnswerTextArea/AnswerTextArea';

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
  return (
    <AnswerLayout createdAt={createdAt} name={name} imageSource={imageSource} alt={alt} answer={answer}>
      {answer ? (
        <Answer content={content} isRejected={isRejected} />
      ) : (
        <AnswerTextArea content={content} placeholder={placeholder} />
      )}
    </AnswerLayout>
  );
}
