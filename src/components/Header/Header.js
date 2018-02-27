
import React from 'react'
import classes from './header.css'
import logo from '../../img/logo.png'

const header=()=>{

    return(
        <div className={classes.header}>
                <img className={classes.logo}src={logo} alt="github-logo"/>
                <div className={classes.centralHeader}>
                    <a href="#about">Pull requests</a>
                    <a href="#services">Issues</a>
                    <a href="#clients">Marketplace</a>
                    <a href="#clients">Explore</a>
                </div>
        </div>
    )


}


export default header
