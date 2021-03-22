const initState = {
  display: '0',
  value: undefined,
  keepDisplay: true,
  op: undefined,
};

const calculator = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        ...action.value,
      };
    case 'CAL_RESET':
      return initState;
    default:
      return state;
  }
};

export default calculator;
