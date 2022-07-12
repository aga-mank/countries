import { Component } from "react";

// 6. Import stworzonego pliku CSS
import "./item.styles.css";

// 1. Stworzenie komponentu Item
class Item extends Component {
    render() {

        // 2. Wyrenderowany UI w postaci jednego DIVa
        //    składa się z jednej karty (imie, nazwisko, email, zdjecie)
        // 3. Pobrać z rodzica (props) właściwości i przypiszemy je
        //    za pomocą destrukturyzacji
        const { id, firstname, lastname, email, image } = this.props.item;

        return (
            <div className="item-container" key={id}>
                <h2>{firstname} {lastname}</h2>
                <h3>{email}</h3>
                <img src={image} width={150} height={150} />
            </div>
        );
    }
}

// 4. Wyeksportowanie komponentu Item
export default Item;
