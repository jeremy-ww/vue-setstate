(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.setState = factory());
}(this, (function () { 'use strict';

function setState (Vue) {
  function mountState2VM (state) {
    if (state == null || Object.keys(state).length === 0) return

    for (let prop in state) {
      this[prop] = state[prop];
    }
  }

  Vue.prototype.setState = function (state) {
    mountState2VM.call(this, state);
    this.$forceUpdate();
  };

  Vue.mixin({
    beforeCreate () {
      mountState2VM.call(this, this.$options.state);
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  setState(window.Vue);
}

return setState;

})));
