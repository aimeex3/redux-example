import React from 'react';

import PlayNumber from './PlayNumber';

class Game extends React.PureComponent {

  // class fields
  state = {
    // if # was selected, can't select again so need to use state
    selectedIds: [] // use index
  };

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

  // running sum doesn't change state of UI / rerendered

  render() {
    return (
      <div>
        <div style={styles.target}>{this.target}</div>
        <div>
          {
            this.playNumbers.map((playNumber, index) =>
              <PlayNumber
                id={index}
                key={index}
                number={playNumber}
                onClick={this.selectId}
                isDisabled={this.state.selectedIds.indexOf(index) >= 0}/>
            )
          }
        </div>
      </div>
    );
  }
}

const styles = {
  target: {
    backgroundColor: '#888',
    margin: '10%',
    padding: '0.5rem',
    textAlign: 'center'
  },
  playNumber: {
    border: 'thin solid #c8f7c8',
    margin: '2.5%',
    width: '40%',
    display: 'inline-block',
    backgroundColor: '#b8ceb8',
    textAlign: 'center',
    padding: '.25rem'
  }
};
export default Game;
