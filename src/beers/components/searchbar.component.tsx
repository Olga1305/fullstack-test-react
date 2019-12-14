import React from 'react';
import styles from './searchbar.module.scss';



const SearchBar = (props: any) => {    

   const handleChange = (event: any) => {       
    props.onSearch(event.target.value)       
   }

   
     return (    
        <div className={styles.searchbar}>    
          <input
            type="text"                
            name="search"
            placeholder="Search beers in catalog"
            onChange={handleChange}
          />            
        </div>           
     )
   
}

export default SearchBar;