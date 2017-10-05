import React from 'react';
import {connect} from 'react-redux';

import Game from './Game';
//import store from '../store/store';

// need to whitelist which actions
import {resetGame} from '../store/actions';

// class App extends React.PureComponent {
//   // state = {
//   //   gameId: 1
//   // };
//   //
//   // resetGame = () => {
//   //   this.setState((prevState) => {
//   //     return {gameId: prevState.gameId + 1};
//   //   });
//   // };
//   //
//   // render() {
//   //   return (
//   //     <Game reset={this.resetGame} key={this.state.gameId}/>
//   //   );
//   // }
//
//
//   render() {
//     return (
//       <Game reset={this.props.resetGame} key={this.props.gameId}/>
//     );
//   }
// }
// export default App;

// can use function component now because no state so it's optimized
const App = (props) =>
  <Game reset={props.resetGame} key={props.gameId}/>;

// only subscribes to state it needs
const mapStateToProps = (state) => ({
  gameId: state.global.gameId
});

// can do this too, or simplify by using {resetGame} as second argument
// const mapDispatchToProps = (dispatch) => ({
//   actions: {
//     resetGame: () => {
//       dispatch(resetGame());
//     }
//   }
// });
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default connect(mapStateToProps, {resetGame})(App);

// This is what `connect()` does internally
// import React from 'react';
// class AppContainer extends React.Component {
//   state = {
//     gameId: 1
//   };
//   render() {
//     return (
//       <App gameId={this.state.gameId}/>
//     );
//   }
// }
// export default AppContainer;
