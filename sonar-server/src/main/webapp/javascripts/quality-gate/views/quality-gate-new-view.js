// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone.marionette', 'handlebars'], function(Marionette, Handlebars) {
    var QualityGateNewView, _ref;
    return QualityGateNewView = (function(_super) {
      __extends(QualityGateNewView, _super);

      function QualityGateNewView() {
        _ref = QualityGateNewView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      QualityGateNewView.prototype.className = 'quality-gate';

      QualityGateNewView.prototype.template = Handlebars.compile(jQuery('#quality-gate-new-template').html());

      QualityGateNewView.prototype.ui = {
        input: '#quality-gate-renaming-input',
        header: '.quality-gate-header'
      };

      QualityGateNewView.prototype.events = {
        'click #quality-gate-save': 'save',
        'click #quality-gate-cancel-save': 'cancel'
      };

      QualityGateNewView.prototype.onDomRefresh = function() {
        return this.ui.input.focus();
      };

      QualityGateNewView.prototype.save = function() {
        var name,
          _this = this;
        this.showHeaderSpinner();
        name = this.ui.input.val();
        return jQuery.ajax({
          url: "" + baseUrl + "/api/qualitygates/create",
          type: 'POST',
          data: {
            name: name
          }
        }).done(function(r) {
          _this.model.set(r);
          _this.options.app.qualityGates.add(_this.model);
          return _this.options.app.router.navigate("show/" + _this.model.id, {
            trigger: true
          });
        });
      };

      QualityGateNewView.prototype.cancel = function() {
        return this.options.app.openFirstQualityGate();
      };

      QualityGateNewView.prototype.showHeaderSpinner = function() {
        return this.ui.header.addClass('navigator-fetching');
      };

      QualityGateNewView.prototype.hideHeaderSpinner = function() {
        return this.ui.header.removeClass('navigator-fetching');
      };

      return QualityGateNewView;

    })(Marionette.ItemView);
  });

}).call(this);
