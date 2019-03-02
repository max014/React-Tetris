import React, { Component } from 'react';
import styles from './HighScores.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class HighScores extends Component {

	componentDidMount() {
		this.props.getScores();
	}

	render() {
		const scores = this.props.scores.map((score, index) => {
			return (
				<div key={index}>
					<h4>{score[1].name + " - " + score[1].score}</h4>
				</div>
			)
		});
		return (
			<div className={styles.HighScores}>
				<h3>High Scores</h3>
				{scores}
			</div>
		);
	}
}

const mapStateToProps = state => {
    return {
    	scores: state.scores
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getScores: (scores) => dispatch(actions.getScores())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HighScores);