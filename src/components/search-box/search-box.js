import { Component } from 'react'

class SearchBox extends Component {
  render() {
    const { search } = this.props
    return (
      <input
        className="search-box"
        type="search"
        placeholder="search monsters"
        onChange={search}
      />
    )
  }
}

export default SearchBox
