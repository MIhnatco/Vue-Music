import _ from 'lodash'

export default {
  install(app) {
    const baseComponent = import.meta.glob('../components/base/*.vue', {
      eager: true
    })

    Object.entries(baseComponent).forEach(([path, module]) => {
      const componentName = _.upperFirst(
        _.camelCase(
          path
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
      )

      app.component(`Base${componentName}`, module.default)
    })
  }
}
