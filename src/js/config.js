require.config({
  name: 'brainy-boilerplate',
  deps: ['main'],
  baseUrl: 'js',

  paths: {
    'jquery': 'lib/jquery',
    'underscore': 'lib/underscore',
    'backbone': 'lib/backbone'
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
    }

  }

});