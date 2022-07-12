
const CheckBox = (props) => {

    return (
        <div id="checkbox-container">
            <div>
                <input
                    id={props.filter}
                    type="checkbox"
                    onChange={props.onChangeHandler}></input>

                <label className="item-list-container" htmlFor={props.filter}> {props.filter} </label>
            </div>
        </div>
    )

}

export default CheckBox;