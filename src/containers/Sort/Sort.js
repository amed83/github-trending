
import React, { Component } from 'react';
import classes from './sort.css'

class Sort extends Component{
     state={
         sortValue:"name"
     }
     handleChange(event){
         this.props.callBackFromParent(event.target.value);
         this.setState({
             sortValue:event.target.value
         })
     }
     render(){
        return(
            <div className={classes.mainSort}>
                
                <select value={this.state.sortValue} onChange={this.handleChange.bind(this)}>
                    <option value="name">Name</option>
                    <option value="owner">Owner</option>
                    <option value="stars">Star</option>
                </select>
            </div>
        )
    }
}


export default Sort
