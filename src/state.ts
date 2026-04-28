import { stdin, stdout } from "process";
import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";

export type State = {
  readline: Interface,
  commands: Record<string, CLICommand>
};

export type CLICommand = {
  name: string,
  description: string,
  callback: (state: State) => void;
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
  }

}