const Filters = ({activeClickHandler,inactiveClickHandler,isActive,isInactive}) => {
    return (
        <div className="filters">
            <div className="filter-btns">
                <button style={isActive?({backgroundColor:"#000",color:"#fff"}):({})} onClick={activeClickHandler}>Active</button>
                <button style={isInactive?({backgroundColor:"#000",color:"#fff"}):({})}onClick={inactiveClickHandler}>Inactive</button>
            </div>
        </div>
    );
}
 
export default Filters;