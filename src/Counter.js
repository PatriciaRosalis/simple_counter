import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Counter.css';

const Counter = ({ counterType }) => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <div className="container">  
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      </div>
    </div>
  );
};

export default Counter;






// import { INCREMENT, DECREMENT } from "./index";

// class Counter extends React.Component {
//   increment = () => {
//     this.props.dispatch({type:"INCREMENT"})
//   }

//   decrement = () => {
//     this.props.dispatch({type:"DECREMENT"})
//   }

//   render() {
//     return (
//       <div>
//         <h2>Counter</h2>
//         <div className="mother">
//           <button onClick={this.decrement}>-</button>
//           <span>{this.props.count}</span>
//           <button onClick={this.increment}>+</button>
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   count: state.count
// });

// export default connect(mapStateToProps)(Counter);