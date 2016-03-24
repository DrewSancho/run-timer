var Backbone = require('backbone');

var IndexView = require('./IndexView');
var NewRunPage = require('./NewRunPage');
var dispatcher = require('./dispatcher');
var DetailView = require('./DetailView');

var indexCollection = require('./IndexCollection');

var AppRouter = Backbone.Router.extend({
    routes: {
        'index': 'index',
        'create': 'create',
        'add': 'create',
        'detail/:id': 'detail'
    },
    index: function () {
        indexCollection.fetch();
        dispatcher.trigger('app:show', new IndexView({collection: indexCollection}));
    },
    create: function () {
        indexCollection.fetch();
        dispatcher.trigger('app:show', new NewRunPage({collection: indexCollection}));
    },
    detail: function (id) {
        indexCollection.fetch({
            success: function () {
                var model = indexCollection.find({ id: parseInt(id) });
                dispatcher.trigger('app:show', new DetailView({ model: model }));
            }
        });
    }
});

module.exports = AppRouter;