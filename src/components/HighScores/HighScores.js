import React, { Component } from 'react';
import styles from './HighScores.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/scoreBoard';

export class HighScores extends Component {

	componentDidMount() {
		this.props.getScores();
	}

	render() {
		return (
			<div className={styles.HighScores}>
				<h3>High Scores</h3>
				{this.props.scores.map((score, index) => (
					<div key={index} className={styles.container}>
						<h4>{score.name + " - " + score.score}</h4>
					</div>
				))}
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
        getScores: () => dispatch(actions.getScores())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HighScores);