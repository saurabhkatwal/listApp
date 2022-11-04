const Item = ({data,deleteItem}) => {
    return (
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
                    <button>Edit</button>
                    <button onClick={()=>deleteItem(data.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
}
 
export default Item;