import React, { Component } from 'react';
import { connect } from 'react-redux';
import Block from '../../components/Block/Block';
import * as actionTypes from '../../store/actions/actionTypes';
import styles from './Display.module.css';

class Display extends Component {
	constructor() {
	    super();
	    this.keydownHandler = this.keydownHandler.bind(this);
	}
	state = {
		time: Date.now()
	}

	keydownHandler(event) {
		this.props.setInput(event.keyCode)
	}

	componentDidMount() {
		// Controller
		document.addEventListener('keydown', this.keydownHandler);
		// Game Loop
		this.interval = setInterval(() => {
			this.props.update();
			this.setState({ time: Date.now()});
		}, this.props.refreshRate);
	}

	componentWillUnmount() {
		// Controller
		document.removeEventListener('keydown', this.keydownHandler);
		// Part of the loop
		clearInterval(this.interval);
	}

	render() {
		const inlineStyles = {
			height: this.props.height,
			width: this.props.step * 10
		}

		const board = this.props.board.map((row, y) => {
			return row.map((color, x) => {
				if (color !== 0){
					return (<Block x={x} y={y} color={color} key={x.toString() + "-" + y.toString()} />)
				}
				return null;
			})
		});

		return (
			<div className={styles.Display} style={inlineStyles}>
				{board}
			</div>
		);

	}
}

const mapStateToProps = state => {
    return {
        board: state.board,
        height: state.height,
        step: state.step
    };
}

const mapDispatchToProps = dispatch => {
    return {
        update: () => dispatch({type: actionTypes.UPDATE}),
        setInput: (input) => dispatch({type: actionTypes.SET_INPUT, input: input})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);