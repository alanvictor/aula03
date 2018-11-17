import { Component, OnInit, Input } from '@angular/core';
import { PokemonListItemOptions } from 'src/app/domain/pokemon-list-item.options';
import { PokemonService, PokemonDetail } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-lost-pokemon',
  templateUrl: './lost-pokemon.component.html',
  styleUrls: ['./lost-pokemon.component.scss']
})
export class LostPokemonComponent implements OnInit {
  @Input() pokemon: PokemonListItemOptions;

  resolvedData: PokemonDetail;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService
        .getFromUrl(this.pokemon.url)
        .subscribe(value => this.resolvedData = value);
  }

}


