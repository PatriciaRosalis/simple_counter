import React from 'react';
import Counter from './Counter';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}


export const counterType = () => dispatch => {
  dispatch({ type: "INCREMENT" },
  dispatch({ type: "DECREMENT" }
  ));
};


const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById('root'));