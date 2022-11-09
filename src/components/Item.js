import React, { Component } from 'react'
import Input from './Input';
export default class ItemClass extends Component {
    render() {
        return (
            <div className="item">
                {this.props.displayForm && this.props.editId === this.props.data.id ? <Input edit={true}
                    editObj={this.props.editObj}
                    editId={this.props.editId}
                    btn1Text="Save"
                    btn2Text="Cancel"
                    closeForm={this.props.closeForm}
                    btn1ClickHandler={this.props.btn1ClickHandler}
                    editItemInList={this.props.editItemInList} /> :
                    <div className="item-container">
                        <div className="item">
                            <div className="data">
                                <div className="name-info">
                                    <h3>Name</h3>
                                    <p>{this.props.data.name}</p>
                                </div>
                                <div className="dob-info">
                                    <h3>Dob</h3>
                                    <p>{this.props.data.dob}</p>
                                </div>
                                <div className="designation-info">
                                    <h3>Designation</h3>
                                    <p>{this.props.data.designation}</p>
                                </div>
                                <div className="status-info">
                                    <h3>Status</h3>
                                    <p>{this.props.data.status}</p>
                                </div>
                            </div>
                            <div className="btns">
                                <button onClick={() => this.props.openForm(this.props.data.id)}>Edit</button>
                                <button onClick={() => this.props.deleteItem(this.props.data.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                }

            </div>

        );
    }
}
