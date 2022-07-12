import { Component } from 'react';

class App extends Component {
  // 0. Diagram cyklu życia: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  //    Każdą z przedstawionych tam funkcji możemy wykorzystać, żeby wbić się w moment
  //    cyklu życia komponentu, który akurat nas interesuje.
  // 1. Na starcie komponentu wyłowayny jest kontrukstor
  constructor() {
    super();

    this.state = {
      users: [],
    }
    console.log("constructor");
  }

  // 3. Tuż przed podłączeniem komponentu zostanie wywołana ta funkcja
  componentDidMount() {
    fetch("https://fakerapi.it/api/v1/users?_quantity=10")
    .then((response) => {
      return response.json()
    })
    .then((phxotosResponseDetailedInfo) => {
      this.setState(
        () => {
          return { users: phxotosResponseDetailedInfo.data }
        }
      )
    })
    console.log("componentDidMount");
  }

  render() {
    // 2. Później wywołane będzie render.
    //    Render zostanie też wywołane za każdym razem gdy: new props, useState(), forceUpdate()
    console.log("render");
    return (
      <div>
        {
          this.state.users.map((photo) => {
            return (
              <div key={photo.id}>
                <h2>{photo.firstname} {photo.lastname}</h2>
                <img src={photo.image} width={150} height={150} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App;