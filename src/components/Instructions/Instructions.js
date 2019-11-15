import React from 'react';
import styles from './Instructions.module.css';

export const Instructions = (props) => (
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

export default Instructions;