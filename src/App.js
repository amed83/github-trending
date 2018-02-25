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
