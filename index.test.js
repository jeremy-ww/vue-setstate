import { mount } from 'vue-test-utils'
import setState from './'
import Vue from 'vue'

Vue.use(setState)

describe('vue-setstate', () => {
  const vm = mount({
    template: `
      <section>
        <h1>{{ msg }}</h1>
        <button @click="changeMessage">Change Message</button>
      </section>
  `,

    state: {
      msg: 'The Original Message Here.'
    },

    methods: {
      changeMessage () {
        this.setState({ msg: 'I Changed Message!' })
      }
    }
  })

  it('should mount state to vm', () => {
    expect(vm.html()).toContain('<h1>The Original Message Here.</h1>')
  })

  it('should update view', () => {
    const button = vm.find('button')
    button.trigger('click')
    expect(vm.html()).toContain('<h1>I Changed Message!</h1>')
  })
})
