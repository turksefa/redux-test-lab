// import React from "react";
// import { useSelector, useDispatch } from "react-redux";

// export default function Counter() {
//   const count = useSelector((state) => state.count);
//   const dispatch = useDispatch();

//   const increment = () => {
//     dispatch({ type: "INCREMENT" });
//   };

//   const decrement = () => {
//     dispatch({ type: "DECREMENT" });
//   };

//   return (
//     <div>
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <h1>Sayac: {count}</h1>
//         <button onClick={increment}>Artır</button>
//         <button onClick={decrement}>Azalt</button>
//       </div>
//     </div>
//   );
// }

import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Sayac: {count}</h1>
          <button onClick={this.increment}>Artır</button>
          <button onClick={this.decrement}>Azalt</button>
        </div>
      </div>
    );
  }
}

// Redux store ile bağlama
const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);