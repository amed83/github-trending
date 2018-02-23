
import React, { Component } from 'react';
import classes from './sort.css'

class Sort extends Component{

     state={
         sortValue:"Name"
     }

     handleChange(event){
         let sorted=this.state.sortValue
         this.props.callBackFromParent(event.target.value);

         this.setState({
             sortValue:event.target.value
         })
     }

    render(){
        return(
            <div className={classes.main}>
                <select value={this.state.sortValue} onChange={this.handleChange.bind(this)}>
                    <option value="name">Name</option>
                    <option value="owner">Owner</option>
                    <option value="star">Star</option>
                </select>
            </div>
        )
    }

}




export default Sort
