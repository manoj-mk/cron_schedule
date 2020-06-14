import React from 'react';
import styles from './header.module.css';
const Header = () => {
    return ( 
        <div className={styles.outer_container} >
             <div className={styles.inner_container} >
                 <h1 style={{margin:"18px 0",padding:"0"}} >Crontab (with React)</h1>
                 <p style={{marginBottom:"50px",padding:"0"}} >The quick and simple editor for cron schedule expressions</p>
             </div>
        </div>
     );
}
export default Header;