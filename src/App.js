import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import Search from './containers/Search/Search.js'
import Header from './components/Header/Header'

class App extends Component {

  render() {

    return (
        <Layout>
            <Header />
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
