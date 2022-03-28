import { Component } from 'react'
import './card.css'


class Card extends Component {
    render() {
        const { id, name, email } = this.props.monster

        const address = 'https://robohash.org/'
        return (
            <div  className="card-container">
              <img
                alt={`monster ${name}`}
                src={`${address}${id}?set=set2&size=180x180`}
              />
              <h2>{name} </h2>
              <p>{email}</p>
            </div>
        )
    }
}

export default Card