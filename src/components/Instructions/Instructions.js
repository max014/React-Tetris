import React from 'react';
import styles from './Instructions.module.css';

const instructions = (props) => {
	return (
		<div className={styles.Instructions}>
			<h4>Rotate</h4>
			<div className={styles.Container}>
				<div className={styles.Key}>
					S
				</div>
				<div className={styles.Key}>
					D
				</div>
			</div>
		</div>
	);
}

export default instructions;