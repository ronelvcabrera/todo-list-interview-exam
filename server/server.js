// Packages
const express = require('express'),
  serveStatic = require('serve-static')

const port = PORT || 5000
const app = express()

if (ENVIRONMENT === 'production') {
  app.use(history())
  app.use(serveStatic(path.join(__dirname, 'dist', 'pwa')))
}
app.listen(port, '0.0.0.0', (params) => {
  console.log(`OFSDS app listening at http://localhost:${port}`)
  pouchListener()
  runScheduler()
})
