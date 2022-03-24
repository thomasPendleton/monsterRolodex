import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      filteredMonsters: [],
      searchString: '',
    }
    console.log('constructor')
    // this.filter = this.filter.bind(this)
  }

  componentDidMount() {
    console.log('component did mount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          () => {
            return { monsters: data, filteredMonsters: data }
          },
          () => {
            // console.log(this.state.monsters)
          }
        )
      )
  }

  // filter(e){
  // //   console.log(e.target.value)
  // this.setState(
  //   () => {
  //     // console.log(this.state.monsters);
  //   return this.state.monsters.filter(monster => {
  //     // console.log(monster.name)
  //     return monster.name.indexOf(e.target.value) !== -1})
  //   },
  //   () => {
  //
  //   }
  // )
  // }

  render() {
    console.log('render')
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(this.state.searchString)
    )
    console.log(filteredMonsters);

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(e) => {
            const searchString = e.target.value.toLocaleLowerCase()

            this.setState(
              () => {
                return { searchString }
              },
              () => {
                console.log(this.state.monsters, this.state.searchString)
              }
            )
          }}
        />

        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>
                {monster.name}: {monster.email}
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
