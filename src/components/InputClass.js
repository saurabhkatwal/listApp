import React, { Component } from 'react'
export default class InputClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            dob: "",
            designation: "developer",
            status: "",
            isNameValid: true,
            isDobValid: true,
            isStatusValid: true
        }
    }
    componentDidMount(){
        if(this.props.edit){
            this.setState((prevState)=>{
            return {
                ...prevState,
                name:this.props.editObj.name,
                dob:this.props.editObj.dob,
                designation:this.props.editObj.designation,
                status:this.props.editObj.status
            }
        })
        }
        
    }
    submitHandler = (e) => {
        e.preventDefault();
        if (e.target.innerText.toLowerCase() === "save") {
            console.log(e.target.parentElement)
            console.log("save btn clicked")
            if (this.state.name.trim() === "") {
                this.setState({ isNameValid: false });
                return;
            }
            this.setState({ isNameValid: true });
            if (this.state.dob === "") {
                this.setState({ isDobValid: false });
                return;
            }
            this.setState({ isDobValid: true })
            if (this.state.status === "") {
                this.setState({ isStatusValid: false })
                return;
            }
            this.setState({ isStatusValid: true });
            let obj = {
                name: this.state.name,
                dob: this.state.dob,
                designation: this.state.designation,
                status: this.state.status,
                id: "id" + Math.random().toString().slice(2, 8)
            }
            this.props.editItemInList(obj, this.props.editId);
            this.setState((prevState => {
                return {
                    ...prevState,
                    name: "",
                    dob: "",
                    designation: "developer",
                    status: ""
                }
            }))
            console.log("form submitted successfully")

        }

        else if (e.target.innerText.toLowerCase() === 'add') {
            console.log(e.target);
            console.log("submit event");
            if (this.state.name.trim() === "") {
                this.setState({ isNameValid: false });
                return;
            }
            this.setState({ isNameValid: true });
            if (this.state.dob === "") {
                this.setState({ isDobValid: false });
                return;
            }
            this.setState({ isDobValid: true })
            if (this.state.status === "") {
                this.setState({ isStatusValid: false })
                return;
            }
            this.setState({ isStatusValid: true });
            let obj = {
                name: this.state.name,
                dob: this.state.dob,
                designation: this.state.designation,
                status: this.state.status,
                id: "id" + Math.random().toString().slice(2, 8)
            }
            this.props.addItem(obj);
            this.setState((prevState => {
                return {
                    ...prevState,
                    name: "",
                    dob: "",
                    designation: "developer",
                    status: ""
                }
            }))
            console.log("form submitted successfully")
        }

    }

    inputChangeHandler = (e) => {
        console.log("inside switch")
        console.log(e.target.name);
        switch (e.target.name) {
            case "name":
                this.setState({ name: e.target.value });
                break;
            case "dob":
                this.setState({ dob: e.target.value });
                break;
            case "designation":
                this.setState({ designation: e.target.value });
                break;
            default:
                console.log('not a valid case');
                break;
        }
    }

    btn2ClickHandler = (e) => {
        e.preventDefault();
        let text = e.target.innerText.toLowerCase();
        if (text === "reset") {
            console.log("resetting the data");
            this.setState(prevState => {
                return {
                    ...prevState,
                    name: "",
                    dob: "",
                    designation: "developer",
                    status: "",
                    isNameValid: true,
                    isDobValid: true,
                    isStatusValid: true
                }
            })
        }
        else if (text === 'cancel') {
            console.log("cancel clicked");
            this.props.closeForm();
        }
    }
    render() {
        return (
            <div className="input-container" style={this.props.edit ? { backgroundColor: "#333", color: "#fff", marginBottom: "20px" } : { backgroundColor: "#ccc", color: "#000" }}>
                <div className="form-container">
                    <form>
                        <div className="name-input input-field">
                            <label htmlFor="">Name:</label>
                            <input onChange={this.inputChangeHandler} type="text" name="name" id="" value={this.state.name} />
                            {!this.state.isNameValid && <p className="error">name is not valid</p>}
                        </div>
                        <div className="dob-input input-field">
                            <label htmlFor="">DOB:</label>
                            <input onChange={this.inputChangeHandler} type="date" name="dob" id="" value={this.state.dob} />
                            {!this.state.isDobValid && <p className="error">Dob is not valid</p>}
                        </div>
                        <div className="designation-input input-field">
                            <label htmlFor="">Designation:</label>
                            <select onChange={this.inputChangeHandler} name="designation" id="" value={this.state.designation}>
                                <option value="developer">Developer</option>
                                <option value="qa">QA</option>
                                <option value="tester">Tester</option>
                                <option value="cloud engineer">Cloud engineer</option>
                            </select>
                        </div>
                        <div className="status-input input-field">
                            <div className="status-box">
                                <label htmlFor="">Status:</label>
                                {!this.state.isStatusValid && <p className="error">Choose one of the following values</p>}
                            </div>
                            <div className="radio-input">
                                <div className="input">
                                    <label htmlFor="" className="status-radio">Active</label>
                                    <input onClick={() => { this.setState({ status: "active" }) }} type="radio" name="radioStatus" checked={this.state.status === "active" ? true : false} />
                                </div>
                                <div className="input">
                                    <label htmlFor="" className="status-radio">Inactive</label>
                                    <input onClick={() => { this.setState({ status: "inactive" }) }} type="radio" name="radioStatus" checked={this.state.status === "inactive" ? true : false} />
                                </div>
                            </div>
                        </div>
                        <div className="control-input input-field">
                            <div className="control-btns">
                                <button onClick={this.submitHandler}>{this.props.btn1Text}</button>
                                <button onClick={this.btn2ClickHandler}>{this.props.btn2Text}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
