import React from 'react';

class Game extends React.PureComponent {
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

  render() {
    return (
      <div>
        <div style={styles.target}>{this.target}</div>
        <div>
          {
            this.playNumbers.map((playNumber, index) =>
              <div key={index} style={styles.playNumber}>
                {playNumber}
              </div>
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
