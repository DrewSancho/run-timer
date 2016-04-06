var Backbone = require('backbone');

var EditView = require('./Run/forms/EditView');
var IndexView = require('./Run/list/IndexView');
var NewRunPage = require('./Run/forms/NewRunPage');
var dispatcher = require('./Events/dispatcher');
var DetailView = require('./Run/list/DetailView');

var indexCollection = require('./Run/list/IndexCollection');

var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index',
        'create': 'create',
        'add': 'create',
        'detail/:id': 'detail',
        'edit/:id': 'edit'
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
    },
    edit: function (id) {
        indexCollection.fetch({
            success: function () {
                var model = indexCollection.find({ id: parseInt(id) });
                dispatcher.trigger('app:show', new EditView({ model: model }));
            }
        });
    }
});

module.exports = AppRouter;