import { v4 as uuidv4 } from 'uuid';
import Item from "./Item"
const List = ({list,deleteItem}) => {
    return (
        <div className="list-container">
            {list.map((item,index)=><Item data={item} key={uuidv4()} id={item.id} deleteItem={deleteItem}/>)}
        </div>
    );
}
 
export default List;