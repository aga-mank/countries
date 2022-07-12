import { Component } from "react";

// 5. Import CSSa
import "./filter-checkbox.styles.css";

// 1. Stworzenie komponentu klasowego FilterCheckbox
class FilterCheckbox extends Component {
    // 2. Wyrednerowanie zawartości komponentu (checkbox + label)
    render() {
        return (
            <div className="filter-checkbox-container">
                <input
                    id="filterCheckbox"
                    type="checkbox"
                    onChange={this.props.onChangeHandler}
                />
                <label htmlFor="filterCheckbox">Filtruj</label>
            </div>
        );
    }
}

// 3. Wyeksportowanie komponentu
export default FilterCheckbox;