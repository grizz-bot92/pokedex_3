import { State } from "./state.js";

export async function commandMap(state: State){
  const response = state.pokeapi.fetchLocations(state.nextLocationsURL ?? undefined);
  state.nextLocationsURL = (await response).next;
  state.prevLocationsURL = (await response).previous;
  console.log((await response).results);
}
