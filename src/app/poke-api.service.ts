import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(private httpClient : HttpClient) {}

  getPokemons(search: string):Observable<any> {
    return this.httpClient.get<any>(environment.apiUrl + 'pokemon/' + search);
  }
}
