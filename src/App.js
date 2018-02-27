import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import Search from './containers/Search/Search.js'
import Header from './components/Header/Header'
import Sidebar from './containers/Sidebar/Sidebar'

class App extends Component {

  render() {
    return (
            <Layout >
                <Header />
                <Sidebar />
                <Search  />
            </Layout>
    );
  }
}

export default App;
