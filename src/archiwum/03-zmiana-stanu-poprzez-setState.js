import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "Arek",
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.state.firstName}
        </div>
        // 1. Dodanie przycisku oraz wywołanie zmiany stanu poprzez setState
        <button onClick={ () => { this.setState( { firstName: "Eryk" } ) }}/>
      </div>
    )
  }
}

export default App;
