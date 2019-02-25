import React, { Component } from 'react';
import ListHeader from './ListHeader';
import ListContent from './ListContent';

export default class List extends Component {
  render() {
        let { data, isStocks, searchText} = this.props; 
    return (
      <div className="list">
      <ListHeader />
      <ListContent data={data} isStocks={isStocks} searchText={searchText}/>
      </div>
    )
  }
}
