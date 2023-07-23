import { useState } from 'react';
import ModalWindow from 'components/shared/ModalWindow';

export default function OurFriendsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <h1>Our Friends</h1>
      <button onClick={openModal}>Open Modal</button>

      {modalOpen && (
        <ModalWindow onClose={closeModal}>
          <>
            <h2>Attention</h2>
            <p>
              We would like to remind you that certain functionality is
              available only to authorized users.If you have an account, please
              log in with your credentials. If you do not already have an
              account, you must register to access these features.
            </p>
          </>
        </ModalWindow>
      )}
    </div>
  );
}
