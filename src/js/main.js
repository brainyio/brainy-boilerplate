require([
  'backbone'
], function(Backbone) {

  // override Backbone.sync because brainy-server
  // runs the API on a different port
  var sync = Backbone.sync;
  Backbone.sync = function(method, model, options) {
    options = options || {};
    var protocol = location.protocol,
      host = location.hostname,
      port = 8080,
      path = _.result(model, 'url');
    options.url = prototcol + '//' + host + ':' + port + path;
    sync.apply(null, [method, model, options]);
  };

  console.log('hello world', Backbone);

});