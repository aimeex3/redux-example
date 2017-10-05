import React from 'react';

import PlayNumber from './PlayNumber';
import shuffle from 'lodash.shuffle'; // don't need to import whole lodash library, only add micro module

class Game extends React.PureComponent {
  // after 10 seconds, game over
  // hitting 10 seconds will need to rerender the UI so need state in this case
  // dont need to set game status on state

  // class fields
  state = {
    // if # was selected, can't select again so need to use state
    selectedIds: [], // use index
    remainingSeconds: 10 // needs this or game status
  };

  // running sum doesn't change state of UI / rerendered

  gameStatus = 'PLAYING';

  componentDidMount() {
    // place on this component, doens't need to be on state
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.remainingSeconds === 0) {
          clearInterval(this.intervalId); // need to clear the timer!
          return null;
        }
        return {remainingSeconds: prevState.remainingSeconds - 1};
      });
    }, 1000);
  }

  // gameState: PLAYING, WON, LOST
  // anything that is computable in react component, do NOT put it in state
  // depends on selectedIds
  calcGameStatus = (nextState) => {
    console.log('CALC GAME STATUS');
    const selectedSum = nextState.selectedIds.reduce((acc, curr) =>
      acc + this.playNumbers[curr], 0
    );
    console.log(selectedSum);
    if (selectedSum > this.target || nextState.remainingSeconds <= 0) {
      return 'LOST';
    }
    if (selectedSum < this.target) {
      return 'PLAYING';
    }
    if (selectedSum === this.target) {
      return 'WON';
    }

  }

  selectId = (id) => {

    // imperitive
    // can use this way of we do not use PureComponent, but that's bad
    // this doesn't work because shallow compare of the states
    // const currentSelectedId = this.state.selectedIds;
    // currentSelectedId.push(id);
    // // array is equal to an array. object reference is the same
    // this.setState({selectedIds: currentSelectedId});

    //declarative
    // concat is ok and works
    // this.setState((prevState) => {
    //   return { selectedIds: prevState.selectedIds.concat(id) };
    // });

    // declarative best way
    this.setState((prevState) => {
      return {selectedIds: [...prevState.selectedIds, id]};
    });

  }

  // constructor() {
  //   super();
  //   this.target = 10 + Math.floor(50*Math.random());
  // }

  // works because stage 2, don't need constructor

  playNumbers = Array.from({length: 6}).map(() =>
    2 + Math.floor(12*Math.random())
  );

  target = this.playNumbers.slice(0, 3).reduce((acc, curr) => acc + curr, 0);

  // TODO: shuffle playNumbers
  playNumbers = shuffle(this.playNumbers);

  componentWillUpdate(nextProps, nextState) {
    // do we need new gameStatus
    if (nextState.selectedIds !== this.state.selectedIds ||
      nextState.remainingSeconds === 0) {
      this.gameStatus = this.calcGameStatus(nextState);
    }

    // better in terms of logic separation
    if (this.gameStatus !== 'PLAYING') {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const gameStatus = this.gameStatus;

    // slightly better than polluting gameStatus function, but should do it in componentWillUpdate
    // if (gameStatus !== 'PLAYING') {
    //   clearInterval(this.intervalId);
    // }

    return (
      <div>
        <div style={styles(gameStatus)}>{this.target}</div>
        <div>
          {
            this.playNumbers.map((playNumber, index) =>
              <PlayNumber
                id={index}
                key={index}
                number={playNumber}
                onClick={this.selectId}
                isDisabled={gameStatus !== 'PLAYING' || this.state.selectedIds.indexOf(index) >= 0}/>
            )
          }
        </div>
        {this.state.remainingSeconds}
        <br/>
        {gameStatus}
      </div>
    );
  }
}

const styles = () => ({
  backgroundColor: '#888',
  margin: '10%',
  padding: '0.5rem',
  textAlign: 'center'
});
export default Game;
