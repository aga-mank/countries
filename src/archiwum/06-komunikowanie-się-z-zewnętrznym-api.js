import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    // 0. Zaincjlizowanie stanu
    this.state = {
      pokemonsUrls: [],
      pokemons: [],
    }
  }

  // 1. Wbicie się w moment, kiedy komponent jest montowany do drzewa DOM
  componentDidMount() {
    // 2. Podłączenie się pod zewnątrzne API z danymi (fetch/axios)

    // 2.1. Pobranie informacji ogólnych nt. Pokemonów
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((response) => response.json())
      .then((allPokemons) => {
        this.setState(
          () => {
            return { pokemonsUrls: allPokemons.results }
          },
          // 2.1.2 Callback opcjonalny. Zostawimy go dla czytelności
          //      co znajduej się w state (console.log)
          () => {
            // 2.2. Pobranie informacji szczegółowych nt. Pokemonów
            // 2.2.1 Przejdziemy przez wszystkie linki z this.state.pokemonsUrls
            // 2.2.2 Dla każdego adresu pobierzemy dane i umieścimy je w tablicy allPokemons
            // 2.2.3 Całą gotową tablicę umieścimy w state (pokemons)
            const allPokemons = [];
            // 2.2.1
            this.state.pokemonsUrls.forEach((pokemonInfo) => {
              // 2.2.2
              fetch(pokemonInfo.url)
                .then((response) => response.json())
                .then((pokemonDetails) => {
                  const pokemon = { 
                    name: pokemonDetails.name,
                    imageUrl: pokemonDetails.sprites.front_default,
                  }
                  allPokemons.push(pokemon);
                  // 2.2.3
                  this.setState(
                      () => { return { pokemons: allPokemons } },
                      () => { console.log(this.state.pokemons) }
                  )
                });
            })
          }
        )
      })
  }

  render() {
    return (
      <div>
        {
          this.state.pokemons.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                  <h1>{pokemon.name}</h1>
                  <img src={pokemon.imageUrl}/>
              </div>
            );
          })
        }
      </div>
    )
  }
}

export default App;