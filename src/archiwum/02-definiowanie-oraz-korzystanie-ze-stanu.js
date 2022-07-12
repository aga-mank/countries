import { Component } from 'react';

class App extends Component {
  // 1. Wywołanie konstuktora
  constructor() {
    super();

    // 2. Zdefiniowanie stanu
    this.state = {
      firstName: "Arek",
    }
  }

  render() {
    // 3. Użycie i wyrenderowanie wartości ze stanu
    return (
      <div>
        {this.state.firstName}
      </div>
    )
  }
}

export default App;
