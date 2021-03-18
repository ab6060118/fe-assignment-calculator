import { useSelector } from 'react-redux';
import Calculator from './Calculator';
import Modal from './Modal';

const App = () => {
  const calculator = useSelector((state) => state.calculator);
  return (
    <>
      <div className="button-container">
        <button type="button">open</button>
      </div>
      <Modal>
        <Calculator />
      </Modal>
    </>
  );
};

export default App;
