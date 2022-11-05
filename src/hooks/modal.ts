import { useState } from 'react';

export function ShowModal() {
  const [showModal, setShowModal] = useState<boolean>(false);
  function openModal(): void {
    setShowModal(true);
  }
  function closeModal(): void {
    setShowModal(false);
  }
  return {
    showModal,
    openModal,
    closeModal,
  };
}
export default ShowModal;
