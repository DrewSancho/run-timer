var Backbone = require('backbone');
var _ = require('underscore');

var EditView = Backbone.View.extend({
    className: 'editView',
    template: _.template(require('./editView.html')),
    events: {
        'click .submit': 'editRun',
        'click .cancel': 'formCancel',
        'keydown': 'onKeydown'
    },
    editRun: function () {
        var runTime = this.$('.runTime').val();
        var runName = this.$('.runName').val();
        var runDate = this.$('.runDate').val();
        var runNotes = this.$('.runNotes').val();

        this.model.set({
            runTime: runTime,
            runName: runName,
            runDate: runDate,
            runNotes: runNotes
        });

        this.model.save();
        window.location.hash = 'detail/' + this.model.get('id');
    },
    formCancel: function () {
        window.location.hash = 'detail/' + this.model.get('id');
    },
    onKeydown: function (e) {
        if (e.keyCode === 13) {
            this.editRun();
        }
    },
    render: function () {
        this.$el.html(this.template(this.model.attributes));
    }
});

module.exports = EditView;