import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import * as utility from '../../utility';
import styles from './Modal.module.css';
import * as actions from '../../store/actions/index';

class modal extends Component {
	state = {
		highScore: false,
		name: 'Name'
	}

	componentDidMount() {
		if(utility.isHighScore(this.props.score, this.props.scores)){
			this.setState({highScore: true});
		}
	}

	handleChange(event) {
		this.setState({name: event.target.value})
	}

	postAndReset = () => {
		this.props.postScore(this.props.score, this.state.name);
		utility.deleteEleventhScore(this.props.scores);
		this.props.startGame();
	}

	render() {
		let input = null;
		let button = <button onClick={this.props.startGame}>ReStart</button>;

		if(this.state.highScore){
			input = <input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleChange.bind(this)}/>;
			button = <button onClick={this.postAndReset}>Post High Score</button>;
		}

		return (
			<div className={styles.Modal}>
				<h1>Score: {this.props.score}</h1>
				{input}
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
        postScore: (score, name) => dispatch(actions.postScore(score, name)),
        startGame: () => dispatch({type: actionTypes.START_GAME})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(modal);