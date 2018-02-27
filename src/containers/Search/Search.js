
import React, { Component } from 'react';
import axios from 'axios'
import ShowResults from '../ShowResults/ShowResults'
import {Selector} from './style.js'
import classes from './search.css'

class Search extends Component {

    state={
        inputValue:"",
        results:[],
        option:'repo',
        error:""
    }
componentDidMount(){
    function formatDate(date) {
    var d = date,
        month = '0' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    return [year, month, day].join('-');
}
 let today = formatDate(new Date())

 console.log(today);
    axios.get(`https://api.github.com/search/repositories?q=created:${today}&sort=stars&order=desc`)
        .then(res=>{
            let data=res.data.items.slice(0,10)
            this.setState({
                results:data
            })
        })
}
handleChange(event){
    this.setState({
        inputValue:event.target.value,
        error:""
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

         axios.get(`https://api.github.com/search/repositories?q=${this.state.inputValue}`)
             .then(res=> {
                 if(res.data.total_count<1){
                         this.setState({
                             error:`We couldn't find this repo, sorry :(`,
                             results:[]
                         })
                     return;
                 }
                 else{
                     data=res.data.items.slice(0,10)
                     data.map(result=>{
                        let url= result.contributors_url
                        return axios.get(url)
                         .then(res=>{
                              result.countContr=res.data.length
                              return this.setState({
                                  results:data
                             })

                        })

                   })
               }
          })
    }
    else {
        if(this.state.option==='owner'){
             axios.get(`https://api.github.com/users/${this.state.inputValue}/repos`)
             .then(res=>{
                 console.log('res',res.message)
                 data=res.data
                 this.setState({
                     results:data.slice(0,10)
                 })
             }).catch(e=> {
                 this.setState({
                     error:`Sorry, this user doesn't not exist`,
                     results:[]
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
                        <input placeholder='Insert a Repo or User name'
                            value={this.state.inputValue}
                            onChange={this.handleChange.bind(this)}
                        />

                        <Selector value={this.state.option}onChange={this.handleOption.bind(this)}> >
                            <option value="repo">Repo</option>
                            <option value="owner">User</option>
                        </Selector>
                    </form>

                </div>
                    <ShowResults data={this.state.results}/>
                    <div className={classes.errorMessage}>
                        {this.state.error}
                    </div>
        </div>
    );
  }
}

export default Search;
