import React from 'react'
import styles from "./SearchBar.module.css"
const SearchBar = ({width, placeholder}) => {
  return (
    <div className={styles.searchBar} style={{width: width}}>
        <img src="/assets/Images/zoom.png" alt="" width={17} height={17}/>
        <input type="text" className={styles.search} placeholder={placeholder}/>
    </div>
  )
}

export default SearchBar