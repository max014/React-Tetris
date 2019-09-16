import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Block.module.css';
import colorPallets from './colorPallets';

class Block extends Component {

  render() {
    
    const inlineStyles = {
      width: this.props.step, 
      height: this.props.step,
      bottom: this.props.y * this.props.step,
      left: this.props.x * this.props.step,
      background: colorPallets[this.props.level][this.props.color]
    };

    return (
      <div className={styles.Block} style={inlineStyles}>
        <div className={styles.Inner}></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        level: state.level,
        step: state.step
    };
}

export default connect(mapStateToProps)(Block);