var $ = require('jquery');
var Backbone = require('backbone');

var StopwatchView = Backbone.View.extend({

    //template: = _.template(require('../stopwatchView.html')),

//    events {
//        'click .stop-button',
//        'click .pause-button'
//    },
    
    render: function () {
        $('<div>').html("this is the Stopwatch view");

    }

});

module.exports = new StopwatchView;