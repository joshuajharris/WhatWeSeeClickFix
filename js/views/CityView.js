var app = app || {};

(function(){
  var CityView = Backbone.View.extend({
    el: $('#container'),
    template: _.template("<h2>Hello <%= name %></h2>"),
    initialize: function(){
      this.render();
    },
    render: function(){
      this.$el.html(this.template({name: 'Joshua'}));
    }
  });

  app.cityView = new CityView();
})(jQuery);
