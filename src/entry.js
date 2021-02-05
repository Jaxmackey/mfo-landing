import createApp from './main'
import createRenderer from 'vue-server-renderer'
const renderer = createRenderer()
const app = createApp()
if (typeof dispatch !== 'undefined') {
  renderer.renderToString(app, (err, html) => {
    if (err) {
      throw new Error(err)
    }
    renderer.dispatch(html)
  })
}
