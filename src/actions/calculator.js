export const setDigit = (value) => (dispatch, getState) => {
  if (getState().op === undefined) {
    const { firstNum } = getState().calculator;
    dispatch({
      type: 'UPDATE_DATA',
      key: 'firstNum',
      value: `${firstNum === '0' ? '' : firstNum}${value}`,
    });
  }
};

export const setOp = (value) => (dispatch, getState) => {
  console.log(value);
};

export const doFn = (value) => (dispatch, getState) => {
  if (value === 'AC') dispatch({ type: 'CAL_RESET' });
};
