const addItem=(obj)=>{
    console.log(obj);
    const newList = [...this.state.list,obj];
    this.setState({list:newList});
  }
export default addItem;