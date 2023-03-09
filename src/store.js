import { createStore } from 'vuex'

const mutations = {
  item(state) {
    state.something =
      'Did ' +
      'you ' +
      'find ' +
      'what ' +
      'you ' +
      'are ' +
      'looking ' +
      'for? '
  }
}

const state = {
  something: 'Press here'
}

export default createStore({ mutations, state, strict: true })
