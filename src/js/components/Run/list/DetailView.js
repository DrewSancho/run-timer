var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var DetailView = Backbone.View.extend({
    className: 'DetailView',

    template: _.template(require('./detailView.html')),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    },

    events: {
        'click .back': 'goBack',
        'click .destroy': 'deleteRun',
        'click .edit': 'editRun'
    },

    goBack: function () {
        window.location.hash = '';
    },
    deleteRun: function (id) {
        this.model.destroy();
        window.location.hash = '';
    },
    editRun: function (id) {
        window.location.hash = 'edit/' + this.model.get('id');
    }
});

module.exports = DetailView;