import { Component } from 'react'
import './App.css'
import CardList from './components/card-list/card-list'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchString: '',
    }
    console.log('constructor')
    this.search = this.search.bind(this)
    this.filteredMonstersFunc = this.filteredMonstersFunc.bind(this)
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


  filteredMonstersFunc() {
      const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(this.state.searchString))
      return filteredMonsters
  }

  render() {
    console.log('render')
    
    
    console.log(filteredMonsters)

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={this.search}
        />

        
        <CardList filtered={this.filteredMonstersFunc}/>
      </div>
    )
  }
}

export default App
