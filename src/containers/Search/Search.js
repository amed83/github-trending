
import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    state={
        value:""
    }
handleChange(event){
    this.setState({
        value:event.target.value
    })
}
handleSubmit(event){
    event.preventDefault()
    let data;
    axios.get(`https://api.github.com/search/repositories?q=petition+user:${this.state.value}`)
    .then(res=> {
        data=res
        console.log(data)
        console.log(res);
    })
}

  render() {

    return (
        <form onSubmit={this.handleSubmit.bind(this)} >
            <input value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </form>
    );
  }
}

export default App;

//
// <div className="App">
//   <select value={this.state.value}onChange={this.handleChange.bind(this)}>
//       <option value="Grapefruit">Grapefruit</option>
//       <option value="lime">Lime</option>
//       <option selected value="coconut">Coconut</option>
//       <option value="mango">Mango</option>
//   </select>
//  </div>
