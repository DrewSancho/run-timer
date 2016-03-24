var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var DetailView = Backbone.View.extend({
    className: 'DetailView',

    template: _.template(`
        <h2 class="title"> My Run</h2>
        <div class="runDate"> <%= runDate %> </div>
        <div class="runTime"> <%= runTime %> </div>
        <p class="runNotes"> <%= runNotes %> </p>
        <div class="detailNav">
        <button class="back"> Back </button>
        <button class="destroy"> Delete </button>
        </div>
    `),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    },

    events: {
        'click .back': 'goBack',
        'click .destroy': 'deleteRun'
    },

    goBack: function () {
        window.location.hash = 'index';
    },
    deleteRun: function (id) {
        this.model.destroy();
        window.location.hash = 'index';
    }
});

module.exports = DetailView;