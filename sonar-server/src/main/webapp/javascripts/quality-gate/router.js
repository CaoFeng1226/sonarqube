// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'quality-gate/models/quality-gate', 'quality-gate/views/quality-gate-detail-view', 'quality-gate/views/quality-gate-new-view'], function(Backbone, QualityGate, QualityGateDetailView, QualityGateNewView) {
    var QualityGateRouter, _ref;
    return QualityGateRouter = (function(_super) {
      __extends(QualityGateRouter, _super);

      function QualityGateRouter() {
        _ref = QualityGateRouter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      QualityGateRouter.prototype.routes = {
        'show/:id': 'show',
        'new': 'new'
      };

      QualityGateRouter.prototype.initialize = function(options) {
        return this.app = options.app;
      };

      QualityGateRouter.prototype.show = function(id) {
        var qualityGate, qualityGateDetailView;
        qualityGate = this.app.qualityGates.get(id);
        if (qualityGate) {
          this.app.qualityGateSidebarListView.highlight(id);
          qualityGateDetailView = new QualityGateDetailView({
            app: this.app,
            model: qualityGate
          });
          this.app.contentRegion.show(qualityGateDetailView);
          qualityGateDetailView.$el.addClass('navigator-fetching');
          return qualityGate.fetch().done(function() {
            return qualityGateDetailView.$el.removeClass('navigator-fetching');
          });
        }
      };

      QualityGateRouter.prototype["new"] = function() {
        var qualityGateNewView;
        qualityGateNewView = new QualityGateNewView({
          app: this.app,
          model: new QualityGate
        });
        return this.app.contentRegion.show(qualityGateNewView);
      };

      return QualityGateRouter;

    })(Backbone.Router);
  });

}).call(this);
