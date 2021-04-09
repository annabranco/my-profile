window.interceptedDispatch = ({ type, payload }) =>
  console.log(`Dispatched ${type} with payload "${payload}"`);

export default () => next => action => {
  window.interceptedDispatch(action);
  next(action);
};
