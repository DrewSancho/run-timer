/* eslint-env node, jasmine */

var AppView = require('../js/components/App/AppView');
var dispatcher = require('../js/components/Events/dispatcher');
var Backbone = require('backbone');

describe('AppView', function () {
    var instance = new AppView();

    it('assigns a child HeaderView on init to the `header-slot` propterty', function () {
        expect(instance.headerView).toBeDefined();
    });

    instance.render();

    it('inserts template content on render', function () {
        expect(instance.$el.find('.header-slot, .content-slot').length).toBe(2);
    });

    it('inserts the child headerView element into the `.header-slot` element', function () {
        expect(instance.$el.find('.header-slot').length).toBe(1);
    });

    var childRendered;

    var ChildView = Backbone.View.extend({
        render: function () {
            childRendered = true;
        }
    });

    var view = new ChildView();

    dispatcher.trigger('app:show', view);

    it('uses the `app:show` event to render a view instance and insert it into `.content-slot`', function () {
        expect(instance.$el.find('.content-slot').children().first()[0]).toBe(view.el);
        expect(childRendered).toBe(true);
    });
});