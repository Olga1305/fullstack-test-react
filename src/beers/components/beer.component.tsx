import React from 'react';
import styles from './beer.module.scss';


const Beer = (props: any) => {
	const {beer} = props;
	return (
		<div className={styles.beer}>
			<h4>{beer.name}</h4>
			<p>{beer.tagline}</p>
			<img src={beer.image_url} alt={'beer img'}/>
		</div>
	);
};

export default Beer;