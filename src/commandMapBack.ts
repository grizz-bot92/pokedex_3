import { PokeAPI } from "./pokeapi.js";
import { State } from "./state.js";

export async function commandMapBack(state: State){
  const response = state.pokeapi.fetchLocations(state.prevLocationsURL ?? undefined);
  if(!state.prevLocationsURL){
    console.log("No previous locations");
    return;
  }
  state.nextLocationsURL = (await response).next;
  state.prevLocationsURL = (await response).previous;
  console.log(response);

}