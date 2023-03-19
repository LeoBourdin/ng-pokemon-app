import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: `
      <h1>
        Liste de Pokémons
      </h1>    
  `
})
export class AppComponent implements OnInit {
  title = 'Application de Pokémons';
  pokemonList: Pokemon[] = POKEMONS;

  public ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[4]);
  }

  /**
   * Sélectionne un pokémon
   * @param pokemon Pokémon sélectionné
   */
  private selectPokemon(pokemon : Pokemon): void {
    console.log (`Vous avez cliqué sur le pokémon ${pokemon.name}`);

  } 
}
