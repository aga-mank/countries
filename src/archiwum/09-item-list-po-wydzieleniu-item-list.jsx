import { Component } from "react";

class ItemList extends Component {
    // Dane przekazywane są do komponentów w postaci props.
    // Chcąc odczytać props: this.props.atrybut_docelowy

    render() {
        // 1. Pobierzmy dane z props
        // const items = this.props.items;
        // Poniżej: przypisanie destrukturyzujące
        const { items } = this.props;
        
        return (
            <div>
                {console.log(items)}
                {items.map((item) => {
                    return (
                        <div key={item.id}>
                            <h2>{item.firstname} {item.lastname}</h2>
                            <h3>{item.email}</h3>
                            <img src={item.image} width={150} height={150} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ItemList;