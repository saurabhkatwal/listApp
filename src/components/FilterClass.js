import React, { Component } from 'react'

export default class FilterClass extends Component {

  render() {
    return (
      <div className="filters">
        <div className="title">
          <h1>List App</h1>
        </div>
        <div className="filter-btns">
          <button style={this.props.activeButton === "all" ? ({ color: "#fff", backgroundColor: "#000" }) : ({})} onClick={(e)=>this.props.filterClickHandler(e,'all')}>All</button>
          <button style={this.props.activeButton === "active" ? ({ color: "#fff", backgroundColor: "#000" }) : ({})} onClick={(e)=>this.props.filterClickHandler(e,'active')}>Active</button>
          <button style={this.props.activeButton === "inactive" ? ({ color: "#fff", backgroundColor: "#000" }) : ({})} onClick={(e)=>this.props.filterClickHandler(e,'inactive')}>Inactive</button>
        </div>
      </div>
    )
  }
}
