import React, { Component } from 'react';
import axios from '../../axios';
import styles from './HighScores.module.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

class HighScores extends Component {

	componentDidMount() {
		axios.get( '/scores.json')
            .then( response => {
            	this.props.setScores(Object.entries(response.data));
            } )
            .catch( error => {
                
            } );
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
        setScores: (scores) => dispatch({type: actionTypes.SET_SCORES, scores: scores})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HighScores);