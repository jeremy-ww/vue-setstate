function setState (Vue) {
  function mountState2VM (state) {
    if (state == null || Object.keys(state).length === 0) return

    for (var prop in state) {
      this[prop] = state[prop]
    }
  }

  Vue.prototype.setState = function (state) {
    mountState2VM.call(this, state)
    this.$forceUpdate()
  }

  Vue.mixin({
    beforeCreate: function () {
      mountState2VM.call(this, this.$options.state)
    }
  })
}

export default setState

if (typeof window !== 'undefined' && window.Vue) {
  setState(window.Vue)
}

