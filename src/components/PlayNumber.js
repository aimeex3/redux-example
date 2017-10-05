import React from 'react';

// PureComponent is better than function components if you are not using redux
class PlayNumber extends React.PureComponent {
  // javascript way
  // use bind in constructor
  // constructor() {
  //   super();
  //   this.handleClick = this.handleClick.bind(this);
  // }
  //
  // handleClick() {
  //   console.log('PF', this.props.id);
  // }

  // class fields only in stage 2
  // prototype function
  handleClick = () => {
    if (this.props.isDisabled) {
      return;
    }
    console.log('PF', this.props.id);
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <div onClick={this.handleClick} style={styles(this.props.isDisabled)}>
        {this.props.number}
      </div>
    );
  }
}

const styles = (isDisabled) => ({
  border: 'thin solid #c8f7c8',
  margin: '2.5%',
  width: '40%',
  display: 'inline-block',
  backgroundColor: '#b8ceb8',
  textAlign: 'center',
  padding: '.25rem',
  opacity: isDisabled ? 0.3 : 1,
});
export default PlayNumber;
