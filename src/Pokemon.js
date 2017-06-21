import React, { Component } from 'react'

import './Pokemon.css'

class Pokemon extends Component {
   state = {
    pokemon: {
      // sprites: {front_default: null},
      name: '',
      base_experience: '',
      height: '',
      weight: '',
    }
  }

   constructor(props) {
    super(props)
    this.fetchUserData(props)
  }

  fetchUserData = (props) => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.pokemon}`)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }
  render() {
    const { pokemon } = this.state
    return (
      <div className="pokemon">
        {/*<img src={pokemon.sprites[front_default]} alt="pokemon"/>*/}
        <h2>{pokemon.name}</h2>
        <h3>Base Experience: {pokemon.base_experience}</h3>
        <h3>Height: {pokemon.height}lb</h3>
        <h3>Weight: {pokemon.weight}in</h3>
      </div>
    );
  }
}

export default Pokemon