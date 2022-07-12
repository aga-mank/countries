import { Component } from 'react';

// 1. Dodanie search-box wyszukujący po imieniu oraz nazwisku
// 2. Dodanie filtrowania adresów mailowych po stałych wartościach

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

    // 1. Filtrując dane bierzemy wszystkich użytkowników, a później
    //    usuwamy z tej tablicy elementy, które nie pasują do szukanego wzorca
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
    // 2. Poniżej mamy funkcję podłączone pod inputy, które reagują na zmiany
    //    wprowadzane przez użytkownika. Jeśli ktoś zaznaczy np. checkbox
    //    to włączamy odpowiedni filtr
    return (
      <div width="100%">
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
        {
          this.state.filteredUsers.map((user) => {
            return (
              <div key={user.id}>
                <h2>{user.firstname} {user.lastname}</h2>
                <h3>{user.email}</h3>
                <img src={user.image} width={150} height={150} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App;