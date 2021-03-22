const updateData = (value) => ({ type: 'UPDATE_DATA', value });

const setDot = () => (dispatch, getState) => {
  const { display, op, keepDisplay } = getState().calculator;
  if (op && !keepDisplay) {
    dispatch(updateData({
      display: '0.',
      value: display,
      keepDisplay: true,
    }));
    return;
  }

  if (display.includes('.')) return;

  dispatch(updateData({
    display: `${display}.`,
    keepDisplay: true,
  }));
};

export const setDigit = (digit) => (dispatch, getState) => {
  const { display, keepDisplay } = getState().calculator;
  if (digit === '.') {
    dispatch(setDot());
    return;
  }
  if (keepDisplay) {
    dispatch(updateData(
      {
        display: display === '0' ? digit : `${display}${digit}`,
      },
    ));
    return;
  }
  dispatch(updateData({
    display: digit,
    keepDisplay: true,
  }));
};

export const setOp = (operation) => (dispatch, getState) => {
  const {
    value, display, op, keepDisplay,
  } = getState().calculator;
  const opFnMap = {
    '+': (first, last) => first + last,
    '-': (first, last) => first - last,
    '/': (first, last) => first / last,
    x: (first, last) => first * last,
  };

  if (operation === '=' && !op) return;
  if (operation === '=' && op) {
    dispatch(updateData({
      op: undefined,
      display: opFnMap[op](parseFloat(value), parseFloat(display)).toString(),
      keepDisplay: false,
    }));
    return;
  }
  if (op && operation && keepDisplay) {
    const result = opFnMap[op](parseFloat(value), parseFloat(display)).toString();
    dispatch(updateData({
      op: operation,
      value: result,
      display: result,
      keepDisplay: false,
    }));
    return;
  }
  dispatch(updateData({
    op: operation,
    value: display,
    keepDisplay: false,
  }));
};

export const doFn = (v) => (dispatch, getState) => {
  const { display } = getState().calculator;
  if (v === 'AC') dispatch({ type: 'CAL_RESET' });
  if (v === '+/-') {
    dispatch(updateData({
      display: (parseFloat(display) * -1).toString(),
    }));
  }
  if (v === '%') {
    dispatch(updateData({
      display: (parseFloat(display) * 0.01).toString(),
    }));
  }
};
