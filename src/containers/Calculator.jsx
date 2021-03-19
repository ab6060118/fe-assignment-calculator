import { useDispatch, useSelector } from 'react-redux';
import { setDigit, setOp, doFn } from '../actions/calculator';

const buttons = [
  { text: 'AC', color: 'gray', type: 'fn' },
  { text: '+/-', color: 'gray', type: 'fn' },
  { text: '%', color: 'gray', type: 'fn' },
  { text: '/', color: 'blue', type: 'op' },
  { text: '7', color: 'black', type: 'digit' },
  { text: '8', color: 'black', type: 'digit' },
  { text: '9', color: 'black', type: 'digit' },
  { text: 'x', color: 'blue', type: 'op' },
  { text: '4', color: 'black', type: 'digit' },
  { text: '5', color: 'black', type: 'digit' },
  { text: '6', color: 'black', type: 'digit' },
  { text: '-', color: 'blue', type: 'op' },
  { text: '1', color: 'black', type: 'digit' },
  { text: '2', color: 'black', type: 'digit' },
  { text: '3', color: 'black', type: 'digit' },
  { text: '+', color: 'blue', type: 'op' },
  {
    text: '0', color: 'black', type: 'digit', helf: true,
  },
  { text: '.', color: 'black', type: 'digit' },
  { text: '=', color: 'blue', type: 'op' },
];

const Button = ({ text, color, handler }) => (
  <button type="button" className={`${color} calculator-button`} onClick={handler}>{text}</button>
);

const Calculator = () => {
  const calculator = useSelector((state) => state.calculator);
  const dispatch = useDispatch();
  const handleOnClick = (value, type) => {
    const actionMap = {
      digit: setDigit,
      op: setOp,
      fn: doFn,
    };
    dispatch(actionMap[type](value));
  };
  return (
    <div className="calculator">
      <div className="calculator-screen">{calculator.firstNum}</div>
      <div className="calculator-body">
        {
        buttons.map(({
          text, color, helf, type,
        }) => (
          <div className={`calculator-cell ${helf === true ? 'helf' : ''}`} key={text}>
            <Button color={color} text={text} handler={() => handleOnClick(text, type)} />
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Calculator;
