import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fullName: { firstName: "Arek", lastName: "Sas" },
      company: "Bluebird",
      fullName2: { firstName2: "?", lastName2: "?"  },
    }
  }

  render() {
    console.log(this.state.fullName2);
    // Chcąc mieć pewność, że otrzymamy prawidłową (najnowszą ustawioną) wartość,
    // musimy zaczekać na wynik funkcji asynchronicznej.
    // Żeby to zrobić korzystamy z składni setState(state, callback)
    // Gdzie state to funkcja ustawiająca wartość w state komponentu,
    // a callback to funkcja wywoływana po zakończeniu tej akcji
    return (
      <div>
        <div>
          <p>Cześć {this.state.fullName.firstName} {this.state.fullName.lastName}, pracuję dla {this.state.company}</p>
        </div>
        <button onClick={ () => { 
            this.setState(
              () => {
                return { fullName: { firstName: "Jan", lastName: "Kowalski" } } 
              },
              () => {
                console.log(this.state);
              }
            )
         }}/>
      </div>
    )
  }
}

export default App;