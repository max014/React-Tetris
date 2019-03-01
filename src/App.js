import React, { Component } from 'react';
import styles from './App.module.css';
import Background from './containers/Background/Background';
import Display from './containers/Display/Display';
import HighScores from './components/HighScores/HighScores';
import { connect } from 'react-redux';
import Modal from './components/Modal/Modal';

class App extends Component {
	render() {
		let display = null;
		if(!this.props.modalUp){
			display = <Display refreshRate={1000/30}/>
		} else {
			display = <Modal />;
		}
		return (
			<div className={styles.App}>
				<Background />
					<HighScores />
					{display}
				<Background />
			</div>
		);
	}
}

const mapStateToProps = state => {
    return {
        modalUp: state.modalUp
    };
}

export default connect(mapStateToProps)(App);
