var Backbone = require('backbone');

var EditView = require('./Run/forms/EditView');
var DashboardView = require('./Run/list/DashboardView');
var NewRunPage = require('./Run/forms/NewRunPage');
var dispatcher = require('./Events/dispatcher');
var DetailView = require('./Run/list/DetailView');
var BioView

var indexCollection = require('./Run/list/IndexCollection');

var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index',
        'add': 'create',
        'detail/:id': 'detail',
        'edit/:id': 'edit',
        'runs/': 'runs',
        'bio': 'bio'
    },
    index: function () {
        indexCollection.fetch();
        dispatcher.trigger('app:show', new DashboardView({collection: indexCollection}));
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
    },

    runs: function () {
        indexCollection.fetch({

        });
    },

    bio: function () {
        indexCollection.fetch({
            success: function () {
                dispatcher.trigger('app:show', new BioView());
            }
        });
    }
});

module.exports = AppRouter;