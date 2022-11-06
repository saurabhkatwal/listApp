import React, { Component } from 'react'

export default class FilterClass extends Component {

  render() {
    return (
        <div className="filters">
        <div className="filter-btns">
            <button style={this.props.activeButton==="active"?({color:"#fff",backgroundColor:"#000"}):({})} onClick={this.props.activeClickHandler}>Active</button>
            <button style={this.props.activeButton==="inactive"?({color:"#fff",backgroundColor:"#000"}):({})} onClick={this.props.inactiveClickHandler}>Inactive</button>
        </div>
    </div>
    )
  }
}
