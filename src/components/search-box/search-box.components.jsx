import "./search-box.styles.css";

// 1. Stworzenie komponentu funkcyjnego SearchBox, który pobiera props z rodzica
const SearchBox = (props) => {
    // 2. Pobranie props odbywa się poprzez props.nazwaWlasciwosci
    return (
        <div>
            <input
                className="search-box-container"
                type="search"
                placeholder={props.placeholder}
                style={{ width: "370px" }}
                onChange={props.onChangeHandler}
            />
        </div>
    );
}

export default SearchBox;