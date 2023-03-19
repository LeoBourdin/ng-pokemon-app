import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>
        Welcome to {{pokemonList[0]}}!
      </h1>    
  `
})
export class AppComponent implements OnInit {
  title = 'Application de Pokémons';
  pokemonList = ['Ramoloss', 'Dracaufeu', 'Nymphali'];

  public ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon('Ramoloss');
  }

  /**
   * Sélectionne un pokémon
   * @param pokemonName Pokémon sélectionné
   */
  private selectPokemon(pokemonName : string): void {
    console.log (`Vous avez cliqué sur le pokémon ${pokemonName}`);

  } 
}
