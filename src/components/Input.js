import { useState } from "react";
const Input = ({addItem}) => {
    const [name,setName]=useState("");
    const [dob,setDob]=useState("");
    const [designation,setDesignation]=useState("developer");
    const [status,setStatus]=useState("");
    const [isNameValid,setIsNameValid]=useState(true);
    const [isDobValid,setIsDobValid]=useState(true);
    const[isStatusValid,setIsStatusValid]=useState(true);

    const submitHandler=(e)=>{
        e.preventDefault();
        if(name.trim()===""){
            setIsNameValid(false);
            return;
        }
        setIsNameValid(true);
        if(dob===""){
            setIsDobValid(false);
            return;
        }
        setIsDobValid(true);
        if(status===""){
            setIsStatusValid(false);
            return;
        }
        setIsStatusValid(status);
        let obj={
            name,
            dob,
            designation,
            status,
            id:"id"+Math.random().toString().slice(2,8)
        }
        addItem(obj);
        setName("");
        setDob("");
        setDesignation("developer");
        setStatus("");
        console.log("form submitted successfully")
    }
    const inputChangeHandler=(e)=>{
        switch(e.target.name){
            case "name":
                setName(e.target.value);
                break;
            case "dob":
                setDob(e.target.value);
                break;
            case "designation":
                setDesignation(e.target.value);
                break;
            default:
                console.log('not a valid case');
                break;
        }
    }
    const resetFormData=(e)=>{
        e.preventDefault();
        setName("");
        setDob("");
        setDesignation("developer");
        setStatus("");
        setIsNameValid(true);
        setIsDobValid(true);
        setIsStatusValid(true);
    }

    return (
        <div className="input-container">
            <div className="form-container">
                <form onSubmit={submitHandler}>
                    <div className="name-input input-field">
                        <label htmlFor="">Name:</label>
                        <input onChange={inputChangeHandler} type="text" name="name" id="" value={name}/>
                        {!isNameValid&&<p className="error">name is not valid</p>}
                    </div>
                    <div className="dob-input input-field">
                        <label htmlFor="">DOB:</label>
                        <input onChange={inputChangeHandler} type="date" name="dob" id="" value={dob}/>
                        {!isDobValid&&<p className="error">Dob is not valid</p>}
                    </div>
                    <div className="designation-input input-field">
                        <label htmlFor="">Designation:</label>
                        <select onChange={inputChangeHandler} name="designation" id="" value={designation}>
                            <option value="developer">Developer</option>
                            <option value="qa">QA</option>
                            <option value="tester">Tester</option>
                            <option value="cloud engineer">Cloud engineer</option>
                        </select>
                    </div>
                    <div className="status-input input-field">
                        <div className="status-box">
                        <label htmlFor="">Status:</label>
                        {!isStatusValid&&<p className="error">Choose one of the following values</p>}
                        </div>
                        <div className="radio-input">
                        <div className="input">
                        <label htmlFor="" className="status-radio">Active</label>
                        <input onClick={()=>{setStatus("active")}}type="radio" name="radioStatus" checked={status==="active"?true:false}/>
                        </div>
                        <div className="input">
                            <label htmlFor="" className="status-radio">Inactive</label>
                            <input onClick={(e)=>{setStatus("inactive")}}type="radio" name="radioStatus" checked={status==="inactive"?true:false}/>
                        </div>
                        </div>
                    </div>
                    <div className="control-input input-field">
                        <div className="control-btns">
                            <button type="submit">Add</button>
                            <button onClick={resetFormData}>Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Input;