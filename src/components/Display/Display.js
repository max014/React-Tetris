import React, { Component } from 'react';
import { connect } from 'react-redux';
import Block from '../Block/Block';
import * as actionTypes from '../../store/actions/actionTypes';
import styles from './Display.module.css';

export class Display extends Component {
	keydownHandler = event => this.props.setInput(event.keyCode);

	componentDidMount() {
		document.addEventListener('keydown', this.keydownHandler);
		// Game Loop
		this.interval = setInterval(() => {
			this.props.update();
			// if game ends
			if(this.props.lost){
				this.props.end();
			}
		}, 1000/30);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.keydownHandler);
		clearInterval(this.interval);
	}

	render() {
		return (
			<div className={styles.Display} style={{height: this.props.height, width: this.props.step * 10}}>
				{this.props.board.map((row, y) => {
					return row.map((color, x) => {
						return color ? <Block x={x} y={y} color={color} key={`${x}-${y}`} /> : null;
					})
				})}
			</div>
		);
	}
}

const mapStateToProps = state => {
    return {
        board: state.board,
        height: state.height,
        step: state.step,
        lost: state.lost
    };
}

const mapDispatchToProps = dispatch => {
    return {
        update: () => dispatch({type: actionTypes.UPDATE}),
        setInput: (input) => dispatch({type: actionTypes.SET_INPUT, input: input}),
        end: () => dispatch({type: actionTypes.END})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);