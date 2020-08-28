import ElContainer from './Container'

/* istanbul ignore next */
ElContainer.install = function (app) {
  app.component(ElContainer.name, ElContainer)
}

export default ElContainer
