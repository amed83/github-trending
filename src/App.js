import React, { Component } from 'react';
import axios from 'axios'
import Layout from './components/Layout/Layout'
import Search from './containers/Search/Search.js'
import ShowResult from './components/ShowResults/ShowResults'

class App extends Component {

  render() {

    return (
        <Layout>
            <Search />
            
        </Layout>
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
