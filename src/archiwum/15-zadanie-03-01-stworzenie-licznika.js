import { useEffect, useState } from 'react';
import FilterCheckbox from './components/filter-checkbox/filter-checkbox.components';
import ItemList from './components/item-list/item-list.componets';
import SearchBox from './components/search-box/search-box.components';

const App = () => {
  // 1. Inicjalizacja state komponentu z domyślną wartością 0 dla liczby
  const [number, setNumber] = useState(0);

  // 3. Przygotowanie funkcji, która będzie modyfikować state komponentu
  //    w taki sposób, aby wartość zmiennej number podnieść o 1
  const modifyNumber = () => { 
    setNumber(number + 1); 
  }

  // 2. Wyrenderowanie UI (liczba + przycisk)
  //    Przycisk odwołuje się w momencie kliknięcia do funkcji
  //    zapisanej w zmiennej modifyNumber
  return (
    <div>
      <div>
        {number}
        <button onClick={modifyNumber}>Zwiększ liczbę o 1</button>
      </div>
    </div>
  );
}

export default App;