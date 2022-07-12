import { Component } from "react";

class SearchBox extends Component {
    render() {
        return (
            <div>
                <input
                    type="search"
                    placeholder={this.props.placeholderValue}
                    style={{ width: "370px" }}
                    onChange={this.props.onChangeHandler}
                />
            </div>
        );
    }
}

export default SearchBox;