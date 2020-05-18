"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _meow = _interopRequireDefault(require("meow"));

var _cli$flags;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cli = (0, _meow["default"])("\n    Usage\n      $ foo <input>\n \n    Options\n      --rainbow, -r  Include a rainbow\n \n    Examples\n      $ foo unicorns --rainbow\n      \uD83C\uDF08 unicorns \uD83C\uDF08\n", {
  flags: {
    rainbow: {
      type: 'boolean',
      alias: 'r'
    },
    help: {
      type: 'boolean',
      alias: 'h'
    }
  }
});

if (cli.flags.h) {
  console.log(_meow["default"].showHelp());
}

console.log((_cli$flags = cli.flags) === null || _cli$flags === void 0 ? void 0 : _cli$flags.version);