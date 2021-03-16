import ReactDom from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './index.scss';

const store = createStore(reducers);

const App = () => {
  const calculator = useSelector((state) => state.calculator);
  return <div>fe-assignment</div>;
};

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
