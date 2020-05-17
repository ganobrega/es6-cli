"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _meow = require('meow'); var _meow2 = _interopRequireDefault(_meow);

const cli = _meow2.default.call(void 0, `
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
        }
    }
});

if(cli.flags.help){
    console.log(_meow2.default.showHelp())
}

console.log(cli.flags, cli.input)