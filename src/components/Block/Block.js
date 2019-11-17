import React from 'react';
import { connect } from 'react-redux';
import styles from './Block.module.css';
import colorPallets from './colorPallets';

export const Block = props => (
    <div className={styles.Block} style={{
      width: props.step, 
      height: props.step,
      bottom: props.y * props.step,
      left: props.x * props.step,
      background: colorPallets[props.level][props.color]
    }}>
      <div className={styles.Inner}></div>
    </div>
);

const mapStateToProps = state => {
  return {
    level: state.level,
    step: state.step
  }
}

export default connect(mapStateToProps)(Block);