import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    }
  }

  incrementCounter() {
    this.setState(oldState => ({ counter: oldState.counter + 1 }))
  }

  render() {
    return (
      <div>
        <div>
          {this.state.counter}
        </div>
        <button onClick={ () => { this.incrementCounter() }}/>
      </div>
    )
  }
}

export default App;
