import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import Search from './containers/Search/Search.js'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

class App extends Component {

  render() {
    return (
            <Layout >
                <Header />
                <Sidebar />
                <Search  />
                <Footer />
            </Layout>
    );
  }
}

export default App;
