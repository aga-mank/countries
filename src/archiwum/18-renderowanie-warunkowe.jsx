import { Component } from "react";

import "./item.styles.css";

class Item extends Component {
    render() {
        const { id, firstname, lastname, email, image, username } = this.props.item;
        
        /*
        RENDEROWANIE WARUNKOWE (CONDITIONAL RENDERING)
            1. Poprzez zmienne
            2. Inline (bezpośrednio przy renderowaniu)

        Obie opcje są tak samo dobre/poprawne. Od Ciebie zależy wybór.
        Kwestia czytelności, kwestia wspólnego podejścia w projekcie itd.
        */

        // 1. Opcja 1 z wykorzystaniem zmiennej
        // 1.1. Zdefiniowanie zmiennej
        const usernameSection = username.includes(".")
            ? <h3>{username}</h3>
            : null;

        return (
            <div className="item-container" key={id}>
                <h2>{firstname} {lastname}</h2>
                <h3>{email}</h3>
                // 1.2. Użycie zmiennej
                {usernameSection}
                // 2. Opcja 2 z wykorzystaniem warunku bezpośrednio przy renderowaniu
                // 2.1. Zdefiniowanie bezpośredniego warunku
                {
                    username.includes(".")
                        ? <h3>2: {username}</h3>
                        : null
                }
                <img src={image} width={150} height={150} />
            </div>
        );
    }
}

export default Item;
