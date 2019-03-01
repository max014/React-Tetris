import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import * as utility from '../../utility';
import styles from './Modal.module.css';

class modal extends Component {
	state = {
		highScore: false
	}

	componentDidMount() {
		if(utility.isHighScore(this.props.score, this.props.scores)){
			this.setState({highScore: true});
		}
	}

	postAndReset = () => {
		this.props.postScore();
		this.props.startGame();
	}

	render() {
		let button = <button onClick={this.props.startGame}>ReStart</button>;

		if(this.state.highScore){
			button = <button onClick={this.postAndReset}>Post High Score</button>;
		}

		return (
			<div className={styles.Modal}>
				<h1>Score: {this.props.score}</h1>
				{button}
			</div>
		);
	}
}

const mapStateToProps = state => {
    return {
    	scores: state.scores,
        score: state.score
    };
}

const mapDispatchToProps = dispatch => {
    return {
        postScore: () => dispatch({type: actionTypes.POST_SCORE}),
        startGame: () => dispatch({type: actionTypes.START_GAME})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(modal);