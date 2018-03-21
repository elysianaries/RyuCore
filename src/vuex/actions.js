// function makeAction(mutation) {
//     return ({ dispatch }, ...args) => dispatch(mutation, ...args)
// }

// export const increatment = makeAction('INCREATMENT')

// export const testAction = ({ dispatch }, n) => {
//     dispatch('TEST', n)
// }

export const increatment = ({commit, state}) => {
    commit('INCREATMENT')
}

// export const resetAppid = ({commit, state}, index, name) => {
//     commit('RESETAPPID', index, name)
// }
//
// export const setCurrscrollerPosition = ({commit, state}, payload) => {
//     commit('SET_CURRSCROLLERPOSITION', payload)
// }
