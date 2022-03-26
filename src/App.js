import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchString: '',
    }
    console.log('constructor')
    this.search = this.search.bind(this)
  }

  componentDidMount() {
    console.log('component did mount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          () => {
            return { monsters: data }
          },
          () => {
            // console.log(this.state.monsters)
          }
        )
      )
  }

  search(e) {
    const searchString = e.target.value.toLocaleLowerCase()

    this.setState(
      () => {
        return { searchString, }
      },
      () => {
        console.log(this.state.monsters, this.state.searchString)
      }
    )
  }

  render() {
    console.log('render')
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(this.state.searchString)
    )
    console.log(filteredMonsters)

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={this.search}
        />

        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>
                {monster.name}
              </h1>
              <hr></hr>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App
