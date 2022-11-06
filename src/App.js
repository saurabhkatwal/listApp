// import './App.css';
// import Filters from './components/Filters';
// import List from './components/List';
// // import Input from './components/Input';
// import InputClass from './components/InputClass';
// import { useState,useEffect } from 'react';
// function App() {
//   const initialStateFn=()=>{
//     let listItems=JSON.parse(localStorage.getItem("listItems"));
//     if(listItems.length===0){
//       return [];
//     }
//     else{
//       return listItems;
//     }
//   }
//   const [list,setList]=useState(initialStateFn());
//   const [isActive,setIsActive]=useState(false);
//   const [isInactive,setIsInactive]=useState(false);
//   useEffect(()=>{
//     localStorage.setItem("listItems",JSON.stringify(list));
//   },[list]);
//   const addItem=(obj)=>{
//     console.log(obj);
//     const newList = [...list,obj];
//     setList(newList);
//   }
//   const deleteItem=(id)=>{
//     setList(list.filter(item=>id!==item.id));
//   }
//   const activeClickHandler=()=>{
//     isActive?(setIsActive(false)):(setIsActive(true));
//   }
//   const inactiveClickHandler=()=>{
//     isInactive?(setIsInactive(false)):(setIsInactive(true));
//   }
 
//   return (
//     <div className="App">
//       <Filters isActive={isActive}
//       isInactive={isInactive}
//       activeClickHandler={activeClickHandler}
//       inactiveClickHandler={inactiveClickHandler}/>
//       <List list={list}
//       deleteItem={deleteItem}/>
//       {/* <Input addItem={addItem}/> */}
//       <InputClass addItem={addItem}/>
//     </div>
//   );
// }

// export default App;