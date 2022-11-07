import React, { Component } from 'react'
import FilterClass from './FilterClass';
import ListClass from './ListClass';
import InputClass from './InputClass';

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      activeButton: 'all',
      filteredList: [],
      displayForm: false,
      editId: '',
      editObj: {}
    }
  }
  componentDidMount() {
    let items = JSON.parse(localStorage.getItem("listItems"));
    if (items) {
      items.length===0?this.setState({list:[]}):this.setState({list:items})
      // if (items.length === 0) {
      //   this.setState({ list: [] })
      // }
      // else {
      //   this.setState({ list: items });
      // }
    }
  }

  componentDidUpdate() {
    localStorage.setItem("listItems", JSON.stringify(this.state.list));
  }
  addItem = (obj) => {
    console.log(obj);
    const newList = [...this.state.list, obj];
    this.setState({ list: newList });
  }
  deleteItem = (id) => {
    this.setState({ list: this.state.list.filter(item => id !== item.id) });
  }

  openForm = (id) => {
    const targetObj = this.getEditDataHandler(id);
    console.log("target object", targetObj)
    this.setState({ displayForm: true, editId: id, editObj: targetObj });
  }

  closeForm = () => {
    this.setState({ displayForm: false });
  }

  // activeClickHandler = () => {
  //   this.setState((prevState) => {
  //     return {
  //       ...prevState,
  //       activeButton: 'active',
  //       filteredList: this.state.list.filter(item => item.status === 'active')
  //     }
  //   });
  // }

  // inactiveClickHandler = () => {
  //   this.setState((prevState) => {
  //     return {
  //       ...prevState,
  //       activeButton: 'inactive',
  //       filteredList: this.state.list.filter(item => item.status === 'inactive')
  //     }
  //   });
  // }
  // allClickHandler = () => {
  //   this.setState((prevState) => {
  //     return {
  //       ...prevState,
  //       activeButton: 'all',
  //       filteredList: this.state.list
  //     }
  //   })
  // }
filterClickHandler=(e,text)=>{
  let newText=text.toLowerCase();
  this.setState((prevState) => {
    return {
      ...prevState,
      activeButton: newText
      // filteredList: this.state.list.filter(item => {
      //   console.log('filtered',item.status,newText);
      //   return item.status === newText})
    }
  });
}
  filterList = () => {
    let activeButton=this.state.activeButton;
    let list=this.state.list;
    return (activeButton==='active'||activeButton==='inactive')?( list.filter(item=> {return item.status===activeButton})):(list);
    // if (this.state.activeButton === 'active') {
    //   return this.state.list.filter(item => (item.status === 'active'));
    // }
    // else if (this.state.activeButton === 'inactive') {
    //   return this.state.list.filter(item => (item.status === 'inactive'));
    // }
    // else {
    //   return this.state.list;
    // }
  }

  btn1ClickHandler = (e) => {
    console.log("btn1 clicked");
    console.log(e.target.value);
  }

  editItemInList = (obj, editId) => {
    this.setState({
      list: this.state.list.map(item => {
        // item.id===editId?()
        if (item.id !== editId) {
          return item;
        }

        return { ...obj };
      })
    })
  }
  getEditDataHandler = (id) => {
    const [currEdit] = this.state.list.filter(item => {
      return id === item.id
    })
    console.log(currEdit);
    return currEdit;
  }
  render() {
    return (
      <div className="App">
        <FilterClass activeButton={this.state.activeButton}
          activeClickHandler={this.activeClickHandler}
          inactiveClickHandler={this.inactiveClickHandler}
          allClickHandler={this.allClickHandler} 
          filterClickHandler={this.filterClickHandler}/>
        <ListClass openForm={this.openForm}
          displayForm={this.state.displayForm}
          list={this.filterList()}
          deleteItem={this.deleteItem}
          addItem={this.addItem}
          closeForm={this.closeForm}
          editId={this.state.editId}
          btn1ClickHandler={this.btn1ClickHandler}
          editItemInList={this.editItemInList}
          editObj={this.state.editObj} />
        <InputClass edit={false}
          addItem={this.addItem}
          btn1Text="Add"
          btn2Text="Reset" />
      </div>
    )
  }
}
