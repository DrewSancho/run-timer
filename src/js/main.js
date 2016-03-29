var Backbone = require('backbone');

var dispatch = require('./components/dispatcher');
var AppView = require('./components/AppView');
var AppRouter = require('./components/AppRouter');

var appView = new AppView();

appView.render();

var router = new AppRouter();

dispatch.trigger('change', 'spider');

document.body.appendChild(appView.el);

Backbone.history.start();