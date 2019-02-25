import React, { Component } from 'react'

export default class ListContent extends Component {
  render() {
      let data = this.props.data,
      items = [],
      lastCategory = null,
      isStocks = this.props.isStocks,
      searchText = this.props.searchText;
      data.forEach(element => {
        if (element.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
            return;
        }
        if (isStocks && !element.stocked) {
            return;
        }
        if (element.category !== lastCategory) {
            items.push(
              <div className="category" key={element.category}>{element.category}</div>
            );
        }
        items.push(
            <div className="item" key={element.name}><p className={element.stocked ? 'text-white': 'text-red'}>{element.name}</p> &nbsp; &nbsp; &nbsp; <p>{element.price}</p></div>
          )
        lastCategory = element.category
      });
    return (
        <div>{items}</div>
    );
  }
}
