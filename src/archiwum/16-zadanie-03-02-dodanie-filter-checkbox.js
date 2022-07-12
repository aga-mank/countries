import { useEffect, useState } from 'react';
import FilterCheckbox from './components/filter-checkbox/filter-checkbox.components';
import ItemList from './components/item-list/item-list.componets';
import SearchBox from './components/search-box/search-box.components';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [nameFilterValue, setNameFilterValue] = useState("");
  // 1. Dodanie nowej zmiennej do stanu komponentu
  //    Domyślnie filtr ma być wyłączony, dlatego domyślna wartość to false
  const [isEmailFromComDomain, setIsEmailFromComDomain] = useState(false);

  const onSearchBoxChangeHandler = (event) => {
    setNameFilterValue(event.target.value.toLowerCase());
  };

  // 2. Dodanie funkcji, która będzie zmieniać stan zmiennej setIsEmailFromComDomain
  //    z true na false lub odwrotnie w momencie, gdy ktoś kliknie w checkbox
  const onFilterCheckboxChangeHandler = () => {
    setIsEmailFromComDomain(!isEmailFromComDomain);
  }

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/users?_quantity=10")
      .then((response) => response.json())
      .then((usersInfo) => {
        setUsers(usersInfo.data);
        setFilteredUsers(usersInfo.data);
      })
  }, []); // [] -> to samo co componentDidMount

  const filterUsers = () => {
    
    const filteredUsers = users
      .filter((user) => {
        return user.firstname.toLowerCase().includes(nameFilterValue)
          || user.lastname.toLowerCase().includes(nameFilterValue);
      })
      // 5. Dodanie odpowiedniej akcji, która w momencie włączonego filtra do domen
      //    filtruje adresy mailowe lub przepuszcza wszystkie wpisy, jeżeli 
      //    filtr jest wyłączony
      .filter((user) => {
        if (isEmailFromComDomain) {
          return user.email.endsWith(".com");
        }
        return true;
      });
      
    setFilteredUsers(filteredUsers);
  }

  // 4. Wywołanie funkcji filtrującej w momencie, 
  //    gdy zmieni się status filtra isEmailFromComDomain
  
  // 4.1. Sposób 1: Ponowne wykorzystanie hooka: useEffect
  // useEffect(() => {
  //   filterUsers();
  // }, [isEmailFromComDomain])

  // 4.2. Sposób 2: Dodanie zmiennej isEmailFromComDomain do już
  //      istniejącej obsługi filtrowanie poprzez useEffect
  useEffect(() => { 
    filterUsers();
  }, [nameFilterValue, isEmailFromComDomain]);
  // [nameFilterValue, isEmailFromComDomain] -> to samo co componentDidUpdate

  // 3. Wywołanie komponentu FilterCheckbox oraz przekazanie funkcji
  //    zmieniającej stanu filtru po kliknięciu w checkbox
  return (
    <div>
      <SearchBox
        placeholderValue="Wprowadź imie lub nazwisko..."
        onChangeHandler={onSearchBoxChangeHandler}
      />
      <FilterCheckbox onChangeHandler={onFilterCheckboxChangeHandler}/>
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