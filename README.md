# hestia-touch-one-ui

[![License](https://img.shields.io/github/license/HestiaPi/hestia-touch-openhab.svg)](https://github.com/HestiaPi/hestia-touch-one-ui/blob/master/LICENSE.md)

ONE UI files shown on the touch LCD. Backend repository is [here](https://github.com/HestiaPi/hestia-touch-openhab).

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
The environment variable `MQTT_SERVER` specifies the ip address of the server where openHAB is running.
Omit this environment variable to default to localhost.

```sh
MQTT_SERVER=192.168.1.23 yarn build
```

In this folder will be an index.html you can open locally or on the Pi's browser.

### Run a local web server

For development, it's more practical to run a server on your localhost.
This will compile and hot-reload code in realtime.
It also has the benefit of checking your code and reporting errors when they happen.

```sh
MQTT_SERVER=192.168.1.23 yarn serve
```

As with the build command, the `MQTT_SERVER` environment variable is optional and will default to localhost if omitted, but likely you want to develop from another machine and connect remotely to the openHAB server.

### Deploy to your HestiaPi instance

After [generating a distributable web app folder](#generate-a-distributable-web-app-folder), you can deploy it to your HestiaPi instance using the following command

```sh
HESTIA=192.168.1.23 yarn deploy
```

> :warning: THIS WILL REPLACE YOUR HESTIAPI FILES! Make sure to make a backup if you want a rollback

### Lint and fix files

If you need to check for errors without starting the local webserver, you can use the following command.

```sh
yarn lint
```

### Extended features

This app was built using [Vue.js](https://vuejs.org/) and [Vue CLI](https://cli.vuejs.org/), although the code should be approachable to anyone with basic knowledge of modern javascript and component architecture.
For extending and configuring the asset toolchain, see [Configuration Reference](https://cli.vuejs.org/config/).
