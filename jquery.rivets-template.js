/* global define, jQuery */
if(typeof(rivets) == "undefined") {
  throw new Error(
    "jQuery iota-rivets plugin requires the Rivets.js lib. " +
    "Get it at http://rivetsjs.com");
}

/**
 * A simple jQuery Plugin template that can optionally be loaded as an AMD module
 *
 * @author The Blacksmith (a.k.a Saulo Vallory)
 * @version  0.0.1
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {

  var Rivets = function(el, model) {
      this.$el = $(el);
      this.init(model);
    };

  var configured = false;

  function configRivets(options) {
    if(configured) return;
    rivets.configure(options);
    configured = true;
  }

  Rivets.prototype = {
    constructor: Rivets,
    init: function(model) {
      configRivets();
      //Observable.makeObservable(model);
      console.log('binding: ', this.$el);
      console.log('model: ', model);
      rivets.bind(this.$el, model);
    }
  };

  $.fn.template = function(model) {
    return this.each(function() {
      var $this = $(this),
      // don't call again if already initialised on this object
      data = $this.data('Rivets');
      if(!data){
        $this.data('Rivets', data = new Rivets($this, model));
      }
    });
  };

  $.fn.template.defaults = {
    prefix: 'jq'/*,
    adapter: {
      subscribe: function(obj, keypath, callback) {
        obj.on(keypath, callback);
      },

      unsubscribe: function(obj, keypath, callback) {
        obj.off(keypath, callback);
      },

      read: function(obj, keypath) {
        return obj.get(keypath);
      },

      publish: function(obj, keypath, value) {
        obj.set(keypath, value);
      }
    }*/
  };
}));
