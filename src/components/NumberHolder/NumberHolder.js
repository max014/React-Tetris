import React from 'react';
import styles from './NumberHolder.module.css';

const numberHolder = (props) => {
	return (
		<div className={styles.NumberHolder}>
			<h3>{props.title}</h3>
			<h3>{props.number}</h3>
		</div>
	);
}

export default numberHolder