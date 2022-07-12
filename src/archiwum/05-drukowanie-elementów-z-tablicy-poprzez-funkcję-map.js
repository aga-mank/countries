import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [
        {
          id: 1,
          name: "Pokemon A",
          imageUrl: "...A",
        },
        {
          id: 2,
          name: "Pokemon B",
          imageUrl: "...B",
        }
      ]
    }
  }

  /*
    1. Opcja na unikęcie problemy z właściwością key jest skorzystanie z indeksów w tablicy.
    <div>
        {this.state.pokemons.map((pokemon, index) => {
          console.log(index);
          return <p key={index}>{pokemon.name}</p>;
        })}          
    </div>

    2. Opcja to skorzystanie bezpośrednio z unikalnej właściowści obiektu.
       Przykład ten pokazaliśmy sobie poniżej.
  */

  render() {
    return (
      <div>
          {this.state.pokemons.map((pokemon) => {
            return <p key={pokemon.id}>{pokemon.name}</p>;
          })}          
      </div>
    )
  }
}

export default App;