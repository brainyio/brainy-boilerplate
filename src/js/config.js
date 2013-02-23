require.config({
  name: 'index',
  deps: ['main'],
  baseUrl: 'js',

  paths: {
    'jquery': 'lib/jquery',
    'underscore': 'lib/underscore',
    'backbone': 'lib/backbone',
    'backbone.subscribe': 'lib/backbone.subscribe',
    'backbone.layout': 'lib/backbone.layout',
    'socket.io': 'lib/socket.io',
    'handlebars': 'lib/handlebars',
    'hbs': 'lib/require.handlebars'
  },

  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'backbone.subscribe': {
      deps: ['jquery', 'backbone', 'socket.io'],
      exports: 'Backbone.subscribe'
    },
    'backbone.layout': {
      deps: ['backbone'],
      exports: 'Backbone.Layout'
    }
  },

  hbs: {
    disableI18n: true
  }
});
