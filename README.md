[![Build Status](https://travis-ci.org/Graylog2/graylog2-web-interface.png)](https://travis-ci.org/Graylog2/graylog2-web-interface)

## Development Setup

* Make sure Java 7 is installed
* Install [Typesafe Activator](https://typesafe.com/activator) version 1.2.x and ensure the `activator` binary is in `PATH`

* Run the server

```
$ activator run
[...]

--- (Running the application from SBT, auto-reloading is enabled) ---

[info] play - Listening for HTTP on /0:0:0:0:0:0:0:0:9000

(Server started, use Ctrl+D to stop and go back to the console...)

```

### Javascript

* Install [node.js](http://nodejs.org/) and npm.
* cd javascript/
* npm install
* node_modules/.bin/gulp watch

When using IntelliJ or WebStorm, be sure to enable `JSX harmony` (available in IntelliJ 14 and WebStorm 9)
as JavaScript language version to properly support react templates.