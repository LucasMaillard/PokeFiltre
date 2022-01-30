import { Component } from '@angular/core';
import { FormControl} from "@angular/forms";
import { PokeAPIService } from 'src/app/poke-api.service';

@Component({
  selector: 'app-poke-finder',
  templateUrl: './poke-finder.component.html',
  styleUrls: ['./poke-finder.component.css']
})
export class PokeFinderComponent {

  searches = ['']
  datas: any = []
  name = new FormControl('');
  private pokemons: any;
  constructor(private PokeAPIService:PokeAPIService ) { }

  searchPokemon(){
    let Search = this.name.value
    let search = (Search.toLowerCase())
    var add = this.searches.push(search)
    console.log(search)
    this.PokeAPIService.getPokemons(search).subscribe((data:any) => {
      this.datas.push(data);
      console.log(data[0].name)
    });

}
  ngOnInit(): void {
  }

}
