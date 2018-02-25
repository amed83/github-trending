
import React, { Component } from 'react';
import axios from 'axios'
import ShowResults from '../../components/ShowResults/ShowResults'
import styled from 'styled-components'
import {Selector} from './style.js'
import classes from './search.css'
class Search extends Component {
    constructor(props){
        super(props)
    }
    state={
        value:"",
        results:[],
        option:'repo'
    }
handleChange(event){
    this.setState({
        value:event.target.value
    })
}
handleOption(event){
    this.setState({
        option:event.target.value
    })
}
handleSubmit(event){
    event.preventDefault()
    let data;
    if(this.state.option==='repo'){
         axios.get(`https://api.github.com/search/repositories?q=${this.state.value}`)
             .then(res=> {
                 data=res.data.items
                 this.setState({
                 results:data.slice(0,10)
                 })
             })
    }else {
        if(this.state.option==='owner'){
             axios.get(`https://api.github.com/users/${this.state.value}/repos`)
             .then(res=>{
                 data=res.data
                 this.setState({
                     results:data
                 })
             })
        }
    }
  }

  render() {

    return (
            <div>
                <div className={classes.mainContainer}>
                    <form className={classes.content} onSubmit={this.handleSubmit.bind(this)} >
                        <input placeholder='Input a Repo or User name' value={this.state.value} onChange={this.handleChange.bind(this)}/>
                        <select value={this.state.option}onChange={this.handleOption.bind(this)}>
                            <option value="repo">Repo</option>
                            <option value="owner">User</option>
                        </select>
                    </form>
                </div>
                <ShowResults data={this.state.results}/>
        </div>
    );
  }
}

export default Search;
