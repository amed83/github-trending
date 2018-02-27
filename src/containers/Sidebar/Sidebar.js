
import React, { Component} from 'react'
import classes from './sidebar.css'
import logo from '../../img/logo.png'

class Sidebar extends Component{
    render(){
        return(
            <div className={classes.sidebar}>
                    <img className={classes.logo}src={logo} alt="github-logo"/>
                    <div className={classes.centralSidebar}>
                            <a href="#about">Pull requests</a>
                            <a href="#services">Issues</a>
                            <a href="#clients">Marketplace</a>
                            <a href="#clients">Explore</a>
                    </div>
            </div>
        )
    }
}



export default Sidebar
