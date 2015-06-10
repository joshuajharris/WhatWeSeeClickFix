var app = app || {};

(function() {
  var Workspace = Backbone.Router.extend({
    routes: {
      "home":  "home"
    },
    home: function() {
      alert("hello");
    }
  });

  app.Workspace = new Workspace();
  Backbone.history.start();
})();
