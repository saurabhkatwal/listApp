import React, { Component } from 'react'
// import Filters from './components/Filters';
import FilterClass from './FilterClass';
// import List from './components/List';
import ListClass from './ListClass';
import InputClass from './InputClass';
// import Input from './Input';
export default class AppClass extends Component {
constructor(props) {
  super(props);
  this.state = {
     list:[],
     activeButton:'',
     filteredList:[],
     displayForm:false,
     editId:''
  }
}
componentDidMount(){
    let items=JSON.parse(localStorage.getItem("listItems"));
    if(items){
        if(items.length===0){
            this.setState({list:[]})
        }
        else{
            this.setState({list:items});
        }
    }
}

componentDidUpdate(){
    localStorage.setItem("listItems",JSON.stringify(this.state.list));
}
addItem=(obj)=>{
    console.log(obj);
    const newList = [...this.state.list,obj];
    this.setState({list:newList});
  }
deleteItem=(id)=>{
    this.setState({list:this.state.list.filter(item=>id!==item.id)});
  }
  openForm=(id)=>{
    this.setState({displayForm:true,editId:id});
  }
  closeForm=()=>{
    this.setState({displayForm:false});
  }
activeClickHandler=()=>{
    // if(this.state.isActive){
    //     this.setState({isActive:false})
    // }
    // else{
    //     this.setState({isActive:true});
    // }
  this.setState((prevState)=>{
    return{
      ...prevState,
      activeButton:'active',
      filteredList:this.state.list.filter(item=>item.status==='active')
    }
  });
  }
inactiveClickHandler=()=>{
    // this.state.isInactive?(this.setState({isInactive:false})):(this.setState({isInactive:true}));
    this.setState((prevState)=>{
      return {
        ...prevState,
        activeButton:'inactive',
        filteredList:this.state.list.filter(item=>item.status==='inactive')
      }
    });
  }
filterList=()=>{
  if(this.state.activeButton==='active'){
    return this.state.list.filter(item=>(item.status==='active'));
  }
  else if(this.state.activeButton==='inactive'){
    return this.state.list.filter(item=>(item.status==='inactive'));
  }
  else{
    return this.state.list;
  }
}

btn1ClickHandler=(e)=>{
  console.log("btn1 clicked");
  console.log(e.target.value);
}
editItemInList=(obj,editId)=>{
this.setState({list:this.state.list.map(item=>{
  if(item.id===editId){
    item={...obj};
    return item;
  }
  else{
    return item;
  }
})})
}
  render() {
    return (
        <div className="App">
        <FilterClass activeButton={this.state.activeButton}
        activeClickHandler={this.activeClickHandler}
        inactiveClickHandler={this.inactiveClickHandler}/>
        <ListClass openForm={this.openForm} displayForm={this.state.displayForm} list={this.filterList()}
        deleteItem={this.deleteItem} addItem={this.addItem} closeForm={this.closeForm} editId={this.state.editId}
        btn1ClickHandler={this.btn1ClickHandler} editItemInList={this.editItemInList}/>
        {/* <Input addItem={this.addItem}/> */}
        <InputClass addItem={this.addItem} btn1Text="Add" btn2Text="Reset"/>
      </div>
    )
  }
}
