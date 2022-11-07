import React, { Component } from 'react'
// import Item from './Item'
import ItemClass from './ItemClass';
import { v4 as uuidv4 } from "uuid";
export default class ListClass extends Component {

  render() {
    return (
      <div className="list-container">
        {this.props.list.map((item, index) => <ItemClass data={item}
          key={uuidv4()}
          id={item.id}
          deleteItem={this.props.deleteItem}
          displayForm={this.props.displayForm}
          openForm={this.props.openForm}
          closeForm={this.props.closeForm}
          editId={this.props.editId}
          btn1ClickHandler={this.props.btn1ClickHandler}
          editItemInList={this.props.editItemInList}
          editObj={this.props.editObj}
        />)}
      </div>
    )
  }
}
