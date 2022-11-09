import React, { Component } from 'react'

export default class Filter extends Component {

  render() {
    return (
      <div className="filters">
        <div className="title">
          <h1>List App</h1>
        </div>
        <div className="filter-btns" onClick={this.props.filterClickHandler}>
          <button style={this.props.activeButton === "all" ? ({ color: "#fff", backgroundColor: "#000" }) : ({})} >All</button>
          <button style={this.props.activeButton === "active" ? ({ color: "#fff", backgroundColor: "#000" }) : ({})} >Active</button>
          <button style={this.props.activeButton === "inactive" ? ({ color: "#fff", backgroundColor: "#000" }) : ({})} >Inactive</button>
        </div>
      </div>
    )
  }
}

