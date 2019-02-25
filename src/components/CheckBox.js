import React, { Component } from 'react'

export default class CheckBox extends Component {
  render() {
    return (
      <div className="check-box-container">
        <input type="checkbox" className="check-box" onClick={()=>{this.handleStockClick()}}/><p className="check-box-desc">Only show product in stock</p>
      </div>
    )
  }
  handleStockClick () {
      this.props.handleStockClick(!this.props.isStocks);
  }
}
