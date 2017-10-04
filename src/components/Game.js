import React from 'react';
class Game extends React.PureComponent {
  render() {
    return (
      <div>
        <div style={styles.target}>42</div>
        <div>
          <div>4</div>
          <div>3</div>
          <div>23</div>
          <div>2</div>
          <div>44</div>
          <div>5</div>
        </div>
      </div>
    );
  }
}

const styles = {
  target: {
    backgroundColor: '#888'
  }
};
export default Game;
