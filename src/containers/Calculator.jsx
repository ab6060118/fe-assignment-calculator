const buttons = [
  { text: 'AC', color: 'gray', type: 'fun' },
  { text: '+/-', color: 'gray', type: 'fun' },
  { text: '%', color: 'gray', type: 'fun' },
  { text: '/', color: 'blue', type: 'op' },
  { text: 'x', color: 'blue', type: 'op' },
  { text: '-', color: 'blue', type: 'op' },
  { text: '+', color: 'blue', type: 'op' },
  { text: '=', color: 'blue', type: 'op' },
  { text: '7', color: 'black', type: 'digit' },
  { text: '8', color: 'black', type: 'digit' },
  { text: '9', color: 'black', type: 'digit' },
  { text: '4', color: 'black', type: 'digit' },
  { text: '5', color: 'black', type: 'digit' },
  { text: '6', color: 'black', type: 'digit' },
  { text: '1', color: 'black', type: 'digit' },
  { text: '2', color: 'black', type: 'digit' },
  { text: '3', color: 'black', type: 'digit' },
  {
    text: '0', color: 'black', type: 'digit', width: 2,
  },
  { text: '.', color: 'black', type: 'digit' },
];

const Button = ({ text, color, handler }) => (
  <button type="button" className={`${color} calculator-button`} onClick={handler}>{text}</button>
);

const Calculator = () => (
  <div className="calculator">
    <div className="calculator-screen">screen</div>
    <div className="calculator-body">
      <div className="calculator-col">
        {
          buttons.filter(({ type }) => ['fun', 'digit'].includes(type))
            .map(({ text, color, width }) => (
              <div
                className="calculator-col-cell"
                key={text}
                style={{
                  ...(width && { flexBasis: `${width * 33}%` }),
                }}
              >
                <Button color={color} text={text} />
              </div>
            ))
        }
      </div>
      <div className="calculator-col">
        {
          buttons.filter(({ type }) => type === 'op')
            .map(({ text, color }) => (
              <div className="calculator-col-cell" key={text}>
                <Button color={color} text={text} />
              </div>
            ))
        }
      </div>
    </div>
  </div>
);

export default Calculator;
