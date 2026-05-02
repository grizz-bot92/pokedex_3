import { State } from "./state.js";

export async function exploreMap(state: State, ...args: string[]): Promise<void>{
  if(args.length < 1){throw new Error ("No arguments given")}
  const pokeName = args[0];
  const response = await state.pokeapi.fetchLocation(pokeName);

  console.log(`Exploring ${pokeName}...`);
  console.log("Found Pokemon:");
  
  for(const pokemon of response.pokemon_encounters){
    const foundPokemon = pokemon.pokemon.name;
    console.log(` - ${foundPokemon}`);
  }
}