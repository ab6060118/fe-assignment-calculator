const buttonGroups = [
  [
    { text: 'AC', color: 'gray', type: 'fun' },
    { text: '+/-', color: 'gray', type: 'fun' },
    { text: '%', color: 'gray', type: 'fun' },
    { text: '/', color: 'blue', type: 'op' },
  ],
  [
    { text: '7', color: 'black', type: 'digit' },
    { text: '8', color: 'black', type: 'digit' },
    { text: '9', color: 'black', type: 'digit' },
    { text: 'x', color: 'blue', type: 'op' },
  ],
  [
    { text: '4', color: 'black', type: 'digit' },
    { text: '5', color: 'black', type: 'digit' },
    { text: '6', color: 'black', type: 'digit' },
    { text: '-', color: 'blue', type: 'op' },
  ],
  [
    { text: '1', color: 'black', type: 'digit' },
    { text: '2', color: 'black', type: 'digit' },
    { text: '3', color: 'black', type: 'digit' },
    { text: '+', color: 'blue', type: 'op' },
  ],
  [
    {
      text: '0', color: 'black', type: 'digit', width: 2,
    },
    { text: '.', color: 'black', type: 'digit' },
    { text: '=', color: 'blue', type: 'op' },
  ],
];

const Button = ({
  text, color, handler, width,
}) => (
  <button type="button" className={`${color} calculator-button`} onClick={handler}>{text}</button>
);

const Calculator = () => (
  <div className="calculator">
    <div className="calculator-screen">screen</div>
    <div className="calculator-body">
      {
        buttonGroups.map((buttons) => (
          <div className="calculator-row">
            {
              buttons.map(({ text, color, width }) => (
                <Button color={color} text={text} width={width} />
              ))
            }
          </div>
        ))
      }
    </div>
  </div>
);

export default Calculator;
