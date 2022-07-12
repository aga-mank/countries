import { Component } from 'react';

// 1. Komponent klasy składa się z class NazwaKomponentu extends Component
class App extends Component {
  // 2. Funkcja render zwraca "HTML" (JSX), który chcemy wyświetlić w UI
  render() {
    // return musi zwracać "HTML" w postaci jednego zbiorczego elementu
    //        wewnątrz możemy mieć dowolną strukturę 
    return (
      <div>
        <h1>ABC</h1>
        <p>DEF</p>
      </div>
    )
  }
}

export default App;
