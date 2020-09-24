# @simplifield/xxx

This is a library do ...

```
yarn add @simplifield/xxx
```

## Usage

```js
import { something } from '@simplifield/xxx';

something(); // => something
```

## Development

```
yarn dev
```

will watch your source files in `/src` and build at each change in `/dist`

## Tests

This module use jest as test runner, and you can pass jest flags through yarn.

```
yarn test
yarn test --watch
yarn test --coverage
yarn test src/something.test.ts
```

## Publishing to npm

It will take care of the bundling, you only have to run this command and chose the good version number

```
yarn publish
```

You `dist` folder will be published and you will be able to access to different packaging flavors for your module (see [microbundle]()https://github.com/developit/microbundle), and even a type definition file.
