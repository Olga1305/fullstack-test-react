import React from 'react';
import styles from './beer-details.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGravityDifference } from '../store/beers.actions'; 
import ibu from '../images/ibu-white.svg';
import style from '../images/style-white.svg';
import malt from '../images/malt-white.svg';
import hops from '../images/hops-white.svg';


const BeerDetails = (props: any) => {
    const {beer} = props;
    const difference = beer.target_og - beer.target_fg;
    

    const dispatch = useDispatch();
    const showGravity = useSelector((state: any) => state.beersReducer.showGravity);

    const hideButton = showGravity === false ? `${styles.button}` : `${styles.inactive}`;
    const showButton = showGravity === true ? `${styles.button}` : `${styles.inactive}`;
    const showDifference = showGravity === false ? `${styles.inactive}` : `${styles.point}`;


	return (
		<div className={styles.single}>
            <div className={styles.main}>
                <div className={styles.title}>
                    <div>
                        <h1>{beer.name}</h1>                        
                    </div>                    
                    <div className={styles.alc}>
                        <span className={styles.label}>Alc Vol.</span>
                        <span className={styles.abv}>{beer.abv}%</span>
                    </div>
                </div>                
                <img src={beer.image_url} alt={'beer img'}/>
            </div>
            <div className={styles.info}>
                <div className={styles.tagline}>
                    <h2>{beer.tagline}</h2>  
                    <p>Original gravity: {beer.target_og}  Final gravity: {beer.target_fg}</p>
                </div>                
                <button className={hideButton} onClick={(e) => dispatch(getGravityDifference())}>See gravity difference</button>
                <div className={styles.gravity}>
                    <h3 className={showDifference}>The gravity difference: {difference}</h3>	
                    <button className={showButton} onClick={(e) => dispatch(getGravityDifference())}>Hide</button>
                </div>                		
                <div className={styles.point}>
                    <img src={ibu} alt={'ibu img'}/>
                    <div>
                        <p><span>IBU</span> {beer.ibu}</p>
                        <p><span>FIRST BREWED:</span> {beer.first_brewed}</p>
                        <p><span>CONTRIBUTED BY:</span> {beer.contributed_by}</p>
                    </div>                    
                </div>
                <div className={styles.point}>
                    <img src={malt} alt={'malt img'}/>
                    <p><span>DESCRIPTION:</span> {beer.description}</p>
                </div>
                <div className={styles.point}>
                    <img src={style} alt={'style img'}/>
                    <p><span>FOOD PAIRING:</span></p> 
                    <ol>
                        {beer.food_pairing.map((el: any, index: number) =>
				            <li key={index}>{el} </li>					
				        )}
                    </ol>                        
                </div>               
                <div className={styles.point}>
                    <img src={hops} alt={'hops img'}/>
                    <p><span>BREWERS TIPS:</span> {beer.brewers_tips}</p>
                </div>
                
                <Link className={styles.button} to="/dashboard">
					Back to list
				</Link>
            </div>         
		</div>
	);
};

export default BeerDetails;