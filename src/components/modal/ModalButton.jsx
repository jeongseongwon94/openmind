import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosBaseURL from '../../apis/axiosBaseURL';
import Modal from './Modal';
import '../../styles/global.css';

export default function ModalButton() {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState('');

  const fetchUser = async () => {
    const response = await axiosBaseURL.get(`subjects/${id}/`);
    const data = response.data;
    const { name, imageSource } = data;
    return { name, imageSource };
  };

  const getUser = async () => {
    const data = await fetchUser();
    setUser(data);
    console.log(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={showModal}>모달버튼</button>
      {modalOpen && <Modal setModalOpen={setModalOpen} id={id} name={user.name} image={user.imageSource} />}
    </div>
  );
}
// Post 내 '질문작성하기' 버튼에 적용되어야할 함수를 미리 만들어뒀습니다.
