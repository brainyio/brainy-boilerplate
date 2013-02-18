# brainy-boilerplate

a dead simple client side boilerplate implementing Backbone and RequireJS. this repository can be used as a stand alone boilerplate, but it is additionally used as a scaffolding boilerplate for [brainy-server](http://github.com/brainyio/brainy-server).

## use

simply clone the repository, and begin modifying the project. to run a static server, run the following from the boilerplates root directory:

```
$ brainy-boilerplate --paths.src=src
```

this will serve the `src` directory on port 80. you can point the `brainy-boilerplate` command to any directory, effictively doubling brainy-boilerplate as a portable static file server. `paths.src` will default to `process.cwd()`.