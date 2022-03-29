
import './card-list.css'
import Card from '../card/card'

const CardList = ({ monsterList }) => {
  return (
    <div className="card-list">
      {monsterList.map((monster) => {
        return <Card monster={monster} key={monster.id} />
      })}
    </div>
  )
}

export default CardList
