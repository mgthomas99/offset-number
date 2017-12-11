# offset-number

Apply an offset to a JavaScript numeric value.

## Usage

### Installation

```shell
    npm install offset-number --save # Installs via NPM
    yarn add offset-number # Installs via Yarn
```

### API

```javascript
    var offset = require("offset-number");

    offset(42, 2) // -> A random number in the range [40,44).
    offset(5, 10) // -> A random number in the range [-5,15).
```

## Build

```shell
    npm run build # Runs an NPM script which builds the project
    gulp build # Directly execute the gulp build script
```

Both the above commands perform the same operation internally; the NPM `build`
script calls the `Gulp` build script.

## Test

```shell
    npm run test # Runs an NPM script which tests the project
```

Due to the project being written in TypeScript and the tests written in
Javascript, the project must be built before it can be tested.

## License

See the `LICENSE` file for license information.
