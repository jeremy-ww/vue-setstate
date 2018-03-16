import isType from 'sewing/dist/isType'

function setState (Vue) {
  function assignmentProp2State (vm, state) {
    for (var prop in state) {
      vm[prop] = state[prop]
    }
  }

  function mountState2VM (state) {
    if (state == null) return

    if (isType(state, 'Object')) {
      assignmentProp2State(this, state)
    }

    if (isType(state, 'Function')) {
      assignmentProp2State(this, state.call(this, this))
    }
  }

  Vue.prototype.setState = function (state) {
    mountState2VM.call(this, state)
    this.$nextTick(this.$forceUpdate)
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
