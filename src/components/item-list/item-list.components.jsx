import "./item-list.styles.css";
import Item from "../item/item.components";

const ItemList = (props) => {

    const items = props.items;
        
        return (
            <div className="item-list-container">
                {items.map((item) => {
                    return (
                        <Item key={item.cca2} item={item}/>
                    )
                })}
            </div>
        )
    
}

export default ItemList;