const setDot = () => (dispatch, getState) => {
  const { display, op } = getState().calculator;
  console.log('setDot', getState().calculator);
  if (display.includes('.')) return;
  dispatch({
    type: 'UPDATE_DATA',
    value: {
      op: undefined,
      display: `${display}.`,
      keepDisplay: true,
    },
  });
};

export const setDigit = (digit) => (dispatch, getState) => {
  const { display, keepDisplay } = getState().calculator;
  if (digit === '.') return dispatch(setDot());
  if (keepDisplay) {
    dispatch({
      type: 'UPDATE_DATA',
      value: {
        display: display === '0' ? digit : `${display}${digit}`,
      },
    });
  } else {
    dispatch({
      type: 'UPDATE_DATA',
      value: {
        display: digit,
        keepDisplay: true,
      },
    });
  }
};

export const setOp = (operation) => (dispatch, getState) => {
  const { value, display, op } = getState().calculator;
  const opFnMap = {
    '+': (first, last) => first + last,
    '-': (first, last) => first - last,
    '/': (first, last) => first / last,
    x: (first, last) => first * last,
  };

  if (operation === '=' && op) {
    console.log(value, display);
    return dispatch({
      type: 'UPDATE_DATA',
      value: {
        op: undefined,
        value: undefined,
        display: opFnMap[op](parseFloat(value), parseFloat(display)).toString(),
        keepDisplay: false,
      },
    });
  }

  if (operation === '=' && !op) return;

  dispatch({
    type: 'UPDATE_DATA',
    value: {
      op: operation,
      value: display,
      keepDisplay: false,
    },
  });
};

export const doFn = (value) => (dispatch, getState) => {
  if (value === 'AC') dispatch({ type: 'CAL_RESET' });
};
