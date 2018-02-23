
import React, { Component } from 'react';
import axios from 'axios'
import ShowResults from '../../components/ShowResults/ShowResults'


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
                 console.log('data',data);
                 this.setState({
                     results:data
                 })
             })
        }
    }
  }

  render() {
      console.log('sorting',this.props)
    return (
        <div>
            <form onSubmit={this.handleSubmit.bind(this)} >
                <input value={this.state.value} onChange={this.handleChange.bind(this)}/>
                <select value={this.state.option}onChange={this.handleOption.bind(this)}>
                    <option value="repo">Repo</option>
                    <option value="owner">Owner</option>
                </select>
            </form>
            <ShowResults data={this.state.results}/>
        </div>
    );
  }
}

export default Search;

//
// <div className="App">
//   <select value={this.state.value}onChange={this.handleChange.bind(this)}>
//       <option value="Grapefruit">Grapefruit</option>
//       <option value="lime">Lime</option>
//       <option selected value="coconut">Coconut</option>
//       <option value="mango">Mango</option>
//   </select>
//  </div>

// https://api.github.com/search/repositories?q=petition+user:${this.state.value}
