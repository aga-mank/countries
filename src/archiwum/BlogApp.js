import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      photos: [],
    }
  }

  componentDidMount() {
    fetch("https://fakerapi.it/api/v1/images?_width=380")
      .then((response) => {
        return response.json()
      })
      .then((photosResponseDetailedInfo) => {
        this.setState(
          () => {
            return { photos: photosResponseDetailedInfo.data }
          },
          () => {
            console.log(this.state.photos);
          }
        )
      })
  }

  render() {
    return (
      <div>
        <h1>Photo Blog</h1>
        {
          this.state.photos.map((photo) => {
            return (
              <div>
                <h2>{photo.title}</h2>
                <img src={photo.url}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App;