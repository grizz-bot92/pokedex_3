import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]){
  const name = args[0];
  const pokemon = await state.pokeapi.fetchPokemon(name);
  console.log(`Throwing a Pokeball at ${name}...`);
  const randomNum = 100000000;
  if(randomNum > pokemon.base_experience){
    console.log(`${name} was caught!`)
    state.caughtPokemon[pokemon.name] = pokemon;
  }else{
    console.log(`${name} escaped!`)
  }
}