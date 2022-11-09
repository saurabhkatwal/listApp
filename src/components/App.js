import React, { Component } from 'react'
import Filter from './Filter';
import List from './List';
import Input from './Input';

export default class App extends Component {
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
  saveStateToLocalStorage = () => {
    localStorage.setItem("listItems", JSON.stringify(this.state.list));
  }

  componentDidMount() {
    let items = JSON.parse(localStorage.getItem("listItems"));
    if (items) {
      items.length === 0 ? this.setState({ list: [] }) : this.setState({ list: items })
      window.addEventListener(
        "beforeunload",
        this.saveStateToLocalStorage
      );
    }
    else {
      console.log("in")
      localStorage.setItem("listItems", JSON.stringify([]))
      this.setState({ list: [] });
    }
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage
    );
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
    this.setState({ displayForm: true, editId: id, editObj: targetObj });
  }

  closeForm = () => {
    this.setState({ displayForm: false });
  }

  getEditDataHandler = (id) => {
    const [currEdit] = this.state.list.filter(item => {
      return id === item.id
    })
    return currEdit;
  }

  filterClickHandler = (e) => {
    let newText = e.target.innerText.toLowerCase();
    this.setState((prevState) => {
      return {
        ...prevState,
        activeButton: newText
      }
    });
  }

  filterList = () => {
    let activeButton = this.state.activeButton;
    let list = this.state.list;
    return (activeButton === 'all') ?(list):
      (list.filter(item => { return item.status === activeButton }));
  }

  editItemInList = (obj, editId) => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id !== editId) {
          return item;
        }

        return { ...obj };
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Filter testFn={this.testFn} activeButton={this.state.activeButton}
          activeClickHandler={this.activeClickHandler}
          inactiveClickHandler={this.inactiveClickHandler}
          allClickHandler={this.allClickHandler}
          filterClickHandler={this.filterClickHandler} />
        <List openForm={this.openForm}
          displayForm={this.state.displayForm}
          list={this.filterList()}
          deleteItem={this.deleteItem}
          addItem={this.addItem}
          closeForm={this.closeForm}
          editId={this.state.editId}
          btn1ClickHandler={this.btn1ClickHandler}
          editItemInList={this.editItemInList}
          editObj={this.state.editObj} />
        <Input edit={false}
          addItem={this.addItem}
          btn1Text="Add"
          btn2Text="Reset" />
      </div>
    )
  }
}
