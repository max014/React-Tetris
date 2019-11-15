import React from 'react';
import styles from './NumberHolder.module.css';

export const NumberHolder = (props) => (
	<div className={styles.NumberHolder}>
		<h3>{props.title}</h3>
		<h3>{props.number}</h3>
	</div>
);

export default NumberHolder