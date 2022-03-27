import { Component } from 'react'

class CardList extends Component {
  render() {
    
    const { monsterList } = this.props
    
    return monsterList.map((monster) => {
      return (
        <div key={monster.id}>
          <h1>{monster.name}</h1>
          <hr></hr>
        </div>
      )
    })
  }
}

export default CardList
