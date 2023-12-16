import { useParams } from 'react-router-dom';
import ModalButton from '../../../src/components/Modal/ModalButton';

export default function PostPage() {
  const { id } = useParams;
  const url = 'subjects/${id}/';
  return (
    <div>
      <ModalButton id={id} />
    </div>
  );
}
