// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone'], function(Backbone) {
    var QualityGate, _ref;
    return QualityGate = (function(_super) {
      __extends(QualityGate, _super);

      function QualityGate() {
        _ref = QualityGate.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      QualityGate.prototype.url = function() {
        return "" + baseUrl + "/api/qualitygates/show?id=" + (this.get('id'));
      };

      return QualityGate;

    })(Backbone.Model);
  });

}).call(this);
