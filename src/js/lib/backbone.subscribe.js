Backbone.subscribe = function(options) {
  options = options || {};
  var model = this,
    params = options.data || {},
    path = _.result(model, 'url');

  var success = options.success;
  options.success = function(resp) {
    if (success) success(model, resp, options);
    model.trigger('subscribe', model, resp, options);
  };

  var error = options.error;
  options.error = function(resp) {
    if (error) error(model, resp, options);
    model.trigger('error', model, resp, options);
  };

  if (this.socket) {
    this.socket.disconnect();
  };
  
  var socket = this.socket = new io.Socket({
    host: location.hostname,
    secure: location.protocol == 'https:',
    port: location.port || ('https' == location.protocol? 443: 80),
    query: $.param(params)
  }).of(path);

  socket.on('add', function(m) {
    model.add(m, model, options);  
  });

  model.trigger('request', model, socket, options);
  return socket;
};

Backbone.Model.prototype.subscribe = function() {
  Backbone.subscribe.apply(this, arguments);
};

Backbone.Collection.prototype.subscribe = function() {
  Backbone.subscribe.apply(this, arguments);
};