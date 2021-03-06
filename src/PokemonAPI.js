import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Pokemon from './Pokemon'

import './PokemonAPI.css'

class PokemonAPI extends Component {
  state = {
    pokemon: '',
  }

  handleChange = (ev) => {
    const pokemon = ev.currentTarget.value
    this.setState({ pokemon })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.pokemon}`)
    this.setState({pokemon: ''})
  }

  render() {
    return (
      <div className="pokemonapi">
        <img src="http://gran4u.xtgem.com/Pokedex.png" alt="pokedex" className="pokedex"/>
        <form onSubmit={  this.handleSubmit.bind(this)}>
          <div>
            <input 
              type="text"
              value={this.state.pokemon}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up Pokemon</button>
          </div>
        </form>
        <Route exact path='/pokemon' render={() => <h3>Please enter a Pokemon name.</h3>} />
        <Route path='/pokemon/:username' component={Pokemon} />
      </div>
    )
  }
}

export default PokemonAPI