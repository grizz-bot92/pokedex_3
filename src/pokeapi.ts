import { Cache, CacheEntry } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache : Cache;

  constructor(interval: number) {
    this.#cache = new Cache(interval);
  } 

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;   
    const cachedURL = this.#cache.get<ShallowLocations>(url);
  
     if(cachedURL){ return cachedURL }

    const response = await fetch(url);
    if(!response.ok){
      throw new Error(`${response.status} ${response.statusText}`)
    }
    const data = await response.json();

    this.#cache.add<ShallowLocations>(url, data);

    return data;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}/`
    const cachedURL = this.#cache.get<Location>(url);
    
    if(cachedURL){return cachedURL}

    const response =  await fetch(url);
    if(!response.ok){
      throw new Error(`${response.status} ${response.statusText}`)
    }
    const data  = await response.json();
    this.#cache.add<Location>(url, data)

    return data;
 } 
}

export type ShallowLocation = {
  name: string,
  url: string;
}

export type ShallowLocations = {
  count: number,
  next: string | null,
  previous: string | null,
  results: ShallowLocation[];
};

export type Location = {
  id: number,
  name: string,
  encounter_method_rates: any[],
  pokemon_encounters: any[],
}