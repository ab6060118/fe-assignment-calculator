import { useSelector } from 'react-redux';

const buttons = [
  { text: 'AC', color: 'gray', type: 'fun' },
  { text: '+/-', color: 'gray', type: 'fun' },
  { text: '%', color: 'gray', type: 'fun' },
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
  console.log(calculator);
  return (
    <div className="calculator">
      <div className="calculator-screen">screen</div>
      <div className="calculator-body">
        {
        buttons.map(({ text, color, helf }) => (
          <div className={`calculator-cell ${helf === true ? 'helf' : ''}`} key={text}>
            <Button color={color} text={text} />
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Calculator;
