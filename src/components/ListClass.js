import React, { Component } from 'react'
import Item from './Item'
import {v4 as uuidv4} from "uuid";
export default class ListClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
        <div className="list-container">
        {this.props.list.map((item,index)=><Item data={item}
         key={uuidv4()}
         id={item.id}
         deleteItem={this.props.deleteItem}
         displayForm={this.props.displayForm}
         openForm={this.props.openForm}
         closeForm={this.props.closeForm}
         editId={this.props.editId}
         btn1ClickHandler={this.props.btn1ClickHandler}
         editItemInList={this.props.editItemInList}
        />)}
    </div>
    )
  }
}
