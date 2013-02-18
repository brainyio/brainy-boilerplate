require([
  'nconf',
  'express'
], function(nconf, express) {

  nconf.argv();
  nconf.env();

  nconf.defaults({

    http: {
      port: 80
    },

    paths: {
      src: process.cwd()
    }

  });

  var app = express();
  app.use(express.static(nconf.get('paths').src));
  app.listen(nconf.get('http').port);

});
