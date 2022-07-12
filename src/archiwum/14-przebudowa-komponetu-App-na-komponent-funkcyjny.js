import { useEffect, useState } from 'react';
import FilterCheckbox from './components/filter-checkbox/filter-checkbox.components';
import ItemList from './components/item-list/item-list.componets';
import SearchBox from './components/search-box/search-box.components';

// 1.Komponent funkcyjny to funkcja zwracająca "HTML" w postaci JSX
//   Komponenty funkcyjne składają się z funkcji oraz efektów ubocznych.
//   Funkcje -> przyjmują argumenty oraz zwracają wynik

// 2. Czym są efekty uboczne?
//    Pure Functions -> zwracają taki sam wynik dla takich samych argumentów
//    Impure Functions -> nie zawsze zwracają taki sam wynik dla takich samych argumentów
//                        lub wpływają na właściwości elementów spoza funkcji
//    Hooks -> będą przykład Impure Functions, bo będą powodować efekty uboczne
const App = () => {
  // 3. W jaki sposób ustawiać state wewnątrz komponentów funkcyjnych?
  //    Do tej pory korzystaliśmy z setState()
  //    Dla funkcyjnych korzystamy z useState()
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [nameFilterValue, setNameFilterValue] = useState("");

  // 4. Jak ustawić wartość elementu ze state?
  // 4.1. Wykorzystać stworzony setter: setUsers("ABC");
  // 4.2. Podać właściwość domyślną bezpośrednio przy funkcji useState(): useState("ABC");

  const onSearchBoxChangeHandler = (event) => {
    setNameFilterValue(event.target.value.toLowerCase());
  };

  // 5. Uderzanie w moment zmiany wartości za pomocą useEffect
  //    Przekazanie jako zależności pustych nawiasów []:
  //      spowoduje wykonanie funkcji JEDEN RAZ
  //    Przekazanie jako zależności niepustych nawiasów [nameFilterValue]:
  //      spowoduje wykonanie funkcji PRZY KAŻDEJ ZMIANIE TEJ WSKAZANEJ WARTOŚCI 

  // 5.1. Pobranie danych z API powinno nastąpić tylko raz
  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/users?_quantity=10")
      .then((response) => response.json())
      .then((usersInfo) => {
        setUsers(usersInfo.data);
        setFilteredUsers(usersInfo.data);
      })
  }, []);

  // Zdefiniowanie funkcji, która pobiera wszystkich użytkowników. Następnie
  // odfiltorowuje tych, którzy nie spełniają założeń. I na końcu ustawia
  // przefiltrowaną tablicę jako wartość w state filteredUsers
  const filterUsers = () => {
    const filteredUsers = users
      .filter((user) => {
        return user.firstname.toLowerCase().includes(nameFilterValue)
          || user.lastname.toLowerCase().includes(nameFilterValue);
      });
      
    setFilteredUsers(filteredUsers);
  }

  // Wywołanie funkcji filterUsers() za każdym razem, gdy nameFilterValue
  // się zmieni.
  useEffect(() => { 
    filterUsers() 
  }, [nameFilterValue]);

  // Wyrenderowanie UI
  return (
    <div>
      <SearchBox
        placeholderValue="Wprowadź imie lub nazwisko..."
        onChangeHandler={onSearchBoxChangeHandler}
      />
      <ItemList items={filteredUsers} />
    </div>
  );
}
/*
class App extends Component {
  filterUsers() {
    const filterValue = this.state.nameFilterValue.toLowerCase();
    const shouldFilterByEmailDomain = this.state.isEmailFromComDomain;

    const filteredUsers = this.state.users
      .filter((user) => {
        return user.firstname.toLowerCase().includes(filterValue)
          || user.lastname.toLowerCase().includes(filterValue);
      })
      .filter((user) => {
        if (shouldFilterByEmailDomain) {
          return user.email.endsWith(".com");
        }
        return true;
      })
    this.setState(() => { return { filteredUsers: filteredUsers } })
  }

  onFilterCheckboxChangeHandler = () => {
    this.setState(
      () => {
        return {
          isEmailFromComDomain: !this.state.isEmailFromComDomain
        }
      },
      () => {
        this.filterUsers();
      });
  }

  render() {
    return (
      <div width="100%">
        <FilterCheckbox onChangeHandler={this.onFilterCheckboxChangeHandler} />
      </div>
    )
  }
}
*/

export default App;