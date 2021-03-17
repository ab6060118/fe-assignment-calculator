import { useSelector } from 'react-redux';
import Calculator from './Calculator';

const App = () => {
  const calculator = useSelector((state) => state.calculator);
  return <Calculator />;
};

export default App;
