var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

var StopwatchView = Backbone.View.extend({

    
    render: function () {
        $('<div>').html('this is the Stopwatch view');
    }

});

module.exports = StopwatchView;
