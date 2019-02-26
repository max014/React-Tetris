import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Block.module.css';

class Block extends Component {

  render() {
    const color = () => {
      switch(this.props.color){
        case 1:
          return "red";
        case 2:
          return "blue";
        case 3:
          return "green";
        case 4:
          return "purple";
        case 5:
          return "orange";
        case 6:
          return "pink";
        case 7:
          return "gray";
        case 8:
          return "linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))";
        default:
          return null;
      }
    };
    
    const inlineStyles = {
      width: this.props.step, 
      height: this.props.step,
      bottom: this.props.y * this.props.step,
      left: this.props.x * this.props.step,
      background: color()
    };

    return (
      <div className={styles.Block} style={inlineStyles}>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        step: state.step
    };
}

export default connect(mapStateToProps)(Block);