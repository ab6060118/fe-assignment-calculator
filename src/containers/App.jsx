import { useState } from 'react';
import Calculator from './Calculator';
import Modal from './Modal';

const App = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <div className="button-container">
        <button type="button" onClick={() => { setShowModal(!showModal); }} disabled={showModal}>Open Modal</button>
      </div>
      <Modal
        initTop={50}
        initLeft={50}
        show={showModal}
        closeFn={() => { setShowModal(false); }}
      >
        <Calculator />
      </Modal>
    </>
  );
};

export default App;
