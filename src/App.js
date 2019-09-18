import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './services/store';
import Filters from './component/shelf/filter';
import Shelf from './component/shelf/productList/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Filters/>
        <Shelf/>
      </Provider>
    );
  }
}

export default App;