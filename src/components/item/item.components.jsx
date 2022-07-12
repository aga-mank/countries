import "./item.styles.css";

const Item = (props) => {

    const country = props.item;

    return (
        <div key={country.name.common} className="item-container">
            <h2>{country.name.common}</h2>
            <h4>Country code: {country.cca2}</h4>
            <h4>Capital: {country.capital}</h4>
            <h4>Continent: {country.continents}</h4>
            <img src={country.flags.svg} width={"300px"} alt={`${country.name.common} flag`} />
        </div>
    );
}


export default Item;
