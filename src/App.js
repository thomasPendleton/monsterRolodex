import { useState, useEffect } from 'react'

import './App.css'
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'

const App = () => {
  const [searchField, setSearchField] = useState('')

  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setMonsters(data))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const search = (e) => {
    const searchString = e.target.value.toLocaleLowerCase()
    setSearchField(searchString)
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Roledex</h1>
      <SearchBox
        onChangeHandler={search}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsterList={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchString: '',
//     }

//     this.search = this.search.bind(this)
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((data) =>
//         this.setState(
//           () => {
//             return { monsters: data }
//           },
//           () => {}
//         )
//       )
//   }

//   search(e) {
//     const searchString = e.target.value.toLocaleLowerCase()

//     this.setState(
//       () => {
//         return { searchString }
//       },
//       () => {
//         console.log(this.state.monsters, this.state.searchString)
//       }
//     )
//   }

//   render() {
//     const filteredMonsters = this.state.monsters.filter((monster) =>
//       monster.name.toLocaleLowerCase().includes(this.state.searchString)
//     )
//     const { search } = this

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Roledex</h1>
//         <SearchBox onChangeHandler={search} placeholder='search monsters' className='monsters-search-box'/>
//         <CardList monsterList={filteredMonsters} />
//       </div>
//     )
//   }
// }

export default App
