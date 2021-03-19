const initState = {
  firstNum: 0,
  secondNum: undefined,
  op: undefined,
};

const calculator = (state = initState, action) => {
  switch (action.type) {
    case '':
      return state;
    default:
      return state;
  }
};

export default calculator;
