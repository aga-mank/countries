import { Component } from 'react';
import FilterCheckbox from './components/filter-checkbox/filter-checkbox.components';
import ItemList from './components/item-list/item-list.componets';
import SearchBox from './components/search-box/search-box.components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      filteredUsers: [],
      nameFilterValue: "",
      isEmailFromComDomain: false,
    }
  }

  componentDidMount() {
    fetch("https://fakerapi.it/api/v1/users?_quantity=10")
      .then((response) => {
        return response.json()
      })
      .then((usersResponseDetailedInfo) => {
        this.setState(
          () => {
            return {
              users: usersResponseDetailedInfo.data,
              filteredUsers: usersResponseDetailedInfo.data
            }
          }
        )
      })
  }

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

  onSearchBoxChangeHandler = (event) => {
    this.setState(
      () => {
        return {
          nameFilterValue: event.target.value
        }
      },
      () => {
        this.filterUsers();
      }
    )
  };

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
    // 4. Wyświetlenie komponentu FilterCheckbox
    return (
      <div width="100%">
        <SearchBox
          placeholderValue="Wprowadź imię lub naziwsko..."
          onChangeHandler={this.onSearchBoxChangeHandler}
        />
        <FilterCheckbox onChangeHandler={this.onFilterCheckboxChangeHandler} />
        <ItemList items={this.state.filteredUsers} />
      </div>
    )
  }
}

export default App;