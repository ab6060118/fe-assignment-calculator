const initState = {
  firstNum: '0',
  secondNum: undefined,
  op: undefined,
};

const calculator = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'CAL_RESET':
      return initState;
    default:
      return state;
  }
};

export default calculator;
