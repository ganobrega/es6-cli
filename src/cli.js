import fs from 'fs';
import path from 'path';
import meow from 'meow';

const cli = meow(`
    Usage
      $ foo <input>
 
    Options
      --rainbow, -r  Include a rainbow
 
    Examples
      $ foo unicorns --rainbow
      🌈 unicorns 🌈
`, {
    flags: {
        rainbow: {
            type: 'boolean',
            alias: 'r'
        },
        help: {
          type: 'boolean',
          alias: 'h'
        }
    },
});

if(cli.flags.h){
    console.log(meow.showHelp())
}

console.log(cli.flags?.version);