import { PokeAPI, type Pokemon } from './pokeapi.js';
import { stdin, stdout } from "process";
import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";

export type State = {
  readline: Interface,
  commands: Record<string, CLICommand>,
  pokeapi:PokeAPI,
  nextLocationsURL: string | null,
  prevLocationsURL: string | null,
  caughtPokemon: Record<string, Pokemon>
};

export type CLICommand = {
  name: string,
  description: string,
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState(): State {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > "
  });

  return {
    readline: rl,
    commands: getCommands(),
    pokeapi: new PokeAPI(0.001),
    nextLocationsURL: null,
    prevLocationsURL: null,
    caughtPokemon: {},
  }

}