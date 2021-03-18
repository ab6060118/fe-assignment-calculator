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
      <Modal initTop={200} initLeft={300} id="cal">
        <Calculator />
      </Modal>
    </>
  );
};

export default App;
