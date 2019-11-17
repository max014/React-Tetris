import React from 'react';
import styles from './App.module.css';
import Display from './components/Display/Display';
import HighScores from './components/HighScores/HighScores';
import { connect } from 'react-redux';
import Modal from './components/Modal/Modal';
import Dash from './components/Dash/Dash';
import Instructions from './components/Instructions/Instructions';

export const App = props => (
	<React.Fragment>
		<div className={styles.App}>
			<HighScores className={styles.Main} />
			{props.modalUp ? <Modal /> : <Display/>}
			<div style={{display: 'flex', flexDirection: 'column', width: '300px'}}>
				<Dash />
				<Instructions />
			</div>
		</div>
		<div className={styles.TooSmall}>
			<h2>This screen is too narrow.<br/> Please use a computer.</h2>
		</div>
	</React.Fragment>
);

const mapStateToProps = state => {
 return {
	 modalUp: state.modalUp
 }
}

export default connect(mapStateToProps)(App);
