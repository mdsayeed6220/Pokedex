import React, { Component } from "react";
import Pokedex from './pokedex'
class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 5, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 8, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 26, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  render() {
    let player1 = [];
    let player2 = [...this.props.pokemon];
    while (player1.length < player2.length) {
      let randIdx = Math.floor(Math.random() * player2.length);
      let randPoke = player2.splice(randIdx, 1)[0];
      player1.push(randPoke);
    }

    console.log(player1);//cross checl random array
    console.log(player2);//cross check random array
    let exp1 = player1.reduce(
      (exp, pokemon) => exp + pokemon.base_experience,
      0
    );
    let exp2 = player2.reduce(
      (exp, pokemon) => exp + pokemon.base_experience,
      0
    );
    return (
      <div>
        <Pokedex pokemon={player1} exp={exp1} isWinner ={exp1>exp2} ></Pokedex>
        <Pokedex pokemon={player2} exp={exp2} isWinner= {exp2>exp1} ></Pokedex>
      </div>
    );
  }
}

export default Pokegame;
