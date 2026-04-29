export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;   
    const response = await fetch(url);
    if(!response.ok){
      throw new Error(`${response.status} ${response.statusText}`)
    }
    return response.json()
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `https://pokeapi.co/api/v2/location-area/${locationName}/`
    
    const response =  await fetch(url);
    if(!response.ok){
      throw new Error(`${response.status} ${response.statusText}`)
    }
    return response.json();
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