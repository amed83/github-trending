
import React from 'react'
import classes from './header.css'
import logo from '../../img/logo.png'

const header=(props)=>{

    return(
        <div className={classes.header}>
                <img className={classes.logo}src={logo} alt="github-logo"/>
                <div className={classes.centralHeader}>
                    <div>Pull requests</div>
                    <div>Issues</div>
                    <div>Marketplace</div>
                    <div>Explore</div>
                </div>

        </div>
    )


}

export default header
