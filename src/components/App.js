import React from 'react';

import Game from './Game';

class App extends React.PureComponent {
  state = {
    gameId: 1
  };

  resetGame = () => {
    this.setState((prevState) => {
      return {gameId: prevState.gameId + 1};
    });
  };
  render() {
    return (
      <Game reset={this.resetGame} key={this.state.gameId}/>
    );
  }
}
export default App;
