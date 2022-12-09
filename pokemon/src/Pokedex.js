import React, { Component } from 'react' // tip: type imrc to auto-import this linee. Have to download react snippets extension
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component {
    render() {
        let title;
        if(this.props.isWinner) {
            title = <h1 className='Pokedex-winner'>Winning Hand!</h1>
        }
        else {
            title = <h1 className='Pokedex-loser'>Losing Hand!</h1>
        }

        return (
            <div className='Pokedex'>
                {title}
                <h4>Total Expereince: {this.props.exp}</h4>
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map((pokemon) => (
                        <Pokecard id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.base_experience}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;