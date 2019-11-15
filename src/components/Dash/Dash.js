import React from 'react';
import NumberHolder from '../NumberHolder/NumberHolder';
import styles from './Dash.module.css';
import { connect } from 'react-redux';

export const Dash = (props) => (
	<div className={styles.Dash}>
		<NumberHolder title="Level" number={props.level} />
		<NumberHolder title="Score" number={props.score} />
		<NumberHolder title="Lines" number={props.lines} />
	</div>
);

const mapStateToProps = state => {
    return {
        level: state.level,
        score: state.score,
        lines: state.lines
    };
}

export default connect(mapStateToProps)(Dash);