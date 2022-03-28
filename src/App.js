import { Component } from 'react'
import './App.css'
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchString: '',
    }

    this.search = this.search.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          () => {
            return { monsters: data }
          },
          () => {}
        )
      )
  }

  search(e) {
    const searchString = e.target.value.toLocaleLowerCase()

    this.setState(
      () => {
        return { searchString }
      },
      () => {
        console.log(this.state.monsters, this.state.searchString)
      }
    )
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(this.state.searchString)
    )
    const { search } = this

    return (
      <div className="App">
        <SearchBox onChangeHandler={search} />
        <CardList monsterList={filteredMonsters} />
      </div>
    )
  }
}

export default App
