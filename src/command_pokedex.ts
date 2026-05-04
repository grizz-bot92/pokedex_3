import { State } from "./state.js";

export async function pokedexCommand(state: State){
  const caughtPokes = state.caughtPokemon;

  console.log("Your Pokedex:");
  for(const pokemon in caughtPokes){
    console.log(` - ${pokemon}`)
  }
}