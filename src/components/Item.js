// import { useState } from "react";
import InputClass from "./InputClass";
const Item = ({data,displayForm,openForm,deleteItem,closeForm,editId,btn1ClickHandler,editItemInList}) => {
    
    // const [displayForm,setDisplayForm]=useState(false);
    // const openForm=()=>{
    //     setDisplayForm(true);
    // }
    return (
        <>
        {displayForm&&editId===data.id?<InputClass editId={editId} btn1Text="Save" btn2Text="Cancel" closeForm={closeForm} btn1ClickHandler={btn1ClickHandler} editItemInList={editItemInList}/>:
        <div className="item-container">
        <div className="item">
            <div className="data">
                <div className="name-info">
                <h3>Name</h3>
                <p>{data.name}</p>
                </div>
                <div className="dob-info">
                <h3>Dob</h3>
                <p>{data.dob}</p>
                </div>
                <div className="designation-info">
                <h3>Designation</h3>
                <p>{data.designation}</p>
                </div>
                <div className="status-info">
                <h3>Status</h3>
                <p>{data.status}</p>
                </div>
            </div>
            <div className="btns">
                <button onClick={()=>openForm(data.id)}>Edit</button>
                <button onClick={()=>deleteItem(data.id)}>Delete</button>
            </div>
        </div>
    </div>
    }
        
        </>
        
    );
}
 
export default Item;