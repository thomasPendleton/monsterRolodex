import { Component } from 'react'
import './card-list.css'
import Card from '../card/card'

class CardList extends Component {
  render() {
    const { monsterList } = this.props

    return (
      <div className="card-list">
        {monsterList.map((monster) => {
          return <Card monster={monster} key={monster.id}/>
        })}
      </div>
    )
  }
}

export default CardList

