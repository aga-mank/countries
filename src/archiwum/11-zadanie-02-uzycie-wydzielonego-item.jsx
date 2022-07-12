import { Component } from "react";
import Item from "../item/item.components";

import "./item-list.styles.css";

class ItemList extends Component {

    render() {
        const { items } = this.props;
        
        return (
            <div className="item-list-container">
                {items.map((item) => {
                    return (
                        // 5. Wywołanie komponentu Item zamiat drukowania wprost 
                        //    DIVa z informacjami
                        <Item item={item}/>
                    )
                })}
            </div>
        )
    }
}

export default ItemList;