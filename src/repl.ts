import { createInterface } from "readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { getCommands } from "./command.js";

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
};

export function startREPL(){
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > "
  });
  
  const commands = getCommands();

  rl.prompt();
  
  rl.on("line", (input) => {
    cleanInput(input);
    if(input.length === 0){
      rl.prompt();
      return;
    }
    if(input === "exit"){
      commandExit();
    }else if(input === "help"){
      commandHelp(commands);
    }else{
      console.log("Unknown command")
    }
    
    rl.prompt();
  }); 
}

