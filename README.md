# hestia-touch-one-ui

ONE UI files shown on the touch LCD.

## Development and compiling

### Setup

Install [nodejs](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/lang/en/) package manager.

With yarn installed, run the following command to install fonts and other asset dependencies.
This creates a `/node_modules/` directory.

```sh
yarn install
```

### Generate a distributable web app folder

This creates a minified copy of the code in the `/dist/` directory.

```sh
yarn build
```

In this folder will be an index.html you can open locally or on the Pi's browser.

### Run a local web server

For development, it's more practical to run a server on your localhost.
This will compile and hot-reload code in realtime.
It also has the benefit of checking your code and reporting errors when they happen.

```sh
yarn run serve
```

### Lints and fixes files

If you need to check for errors without starting the local webserver, you can use the following command.

```sh
yarn run lint
```

### Customize configuration

This app was built using [Vue.js](https://vuejs.org/) and [Vue CLI](https://cli.vuejs.org/).
For extending the configuration, see [Configuration Reference](https://cli.vuejs.org/config/).
