import { Component } from 'react';
import ItemList from './components/item-list/item-list.componets';

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

  render() {
    // 2. Ponizej wywołanie wydzielonego komponentu ItemList
    return (
      <div width="100%">
        <ItemList items={ this.state.filteredUsers }/>
        <input type="search"
          placeholder="Wprowadź imię lub naziwsko..."
          style={{ width: "370px" }}
          onChange={(event) => {
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
          }}
        />
        <input 
          type="checkbox"
          onChange={() => {
            this.setState(
              () => {
                return {
                  isEmailFromComDomain: !this.state.isEmailFromComDomain
                }
              },
              () => {
                this.filterUsers();
              });
          }}
        />
      </div>
    )
  }
}

export default App;