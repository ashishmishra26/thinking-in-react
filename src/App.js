import React, { Component } from 'react';
import './App.css';
import data from './data';
import SearchBox from './components/SearchBox';
import CheckBox from './components/CheckBox';
import List from './components/List';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: data,
      isStocks: false,
      searchText: ''
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBox searchText={this.state.searchText} handleSearchText={this.handleSeachText}/>
        <CheckBox isStocks={this.state.isStocks} handleStockClick={this.handleStockClick}/>
        <List isStocks={this.state.isStocks} data={this.state.data} searchText={this.state.searchText}/>
      </div>
    );
  }
  handleStockClick = (value) => {
    this.setState({isStocks: value});
  }
  handleSeachText = (value) => {
    this.setState({searchText: value});
  }
}

export default App;
