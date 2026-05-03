import { commandExit } from "./command_exit.js";
import { exploreMap } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./commandMap.js";
import { commandMapBack } from "./commandMapBack.js";
import { commandCatch } from "./catch_command.js";
import { CLICommand, State } from "./state.js";

export function getCommands(): Record<string, CLICommand>{
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays the next 20 location areas of Pokemon world",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Displays the previous 20 location areas of Pokemon world",
      callback: commandMapBack,
    },
    explore: {
      name: "explore",
      description: "Allows user to explore the pokemon within different areas",
      callback: exploreMap,
    },
    catch: {
      name: "explore",
      description: "Attempts to catch pokemon and returns a successful or unsuccessful response",
      callback: commandCatch,
    }
  };
}