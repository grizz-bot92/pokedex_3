import { State } from "./state.js";

export async function commandMap(state: State){
  const response = state.pokeapi.fetchLocations(state.nextLocationsURL ?? undefined);
  state.nextLocationsURL = (await response).next;
  state.prevLocationsURL = (await response).previous;
  for(const loc of (await response).results){
    console.log(loc.name);
  }
}
