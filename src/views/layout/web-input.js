let head = require('./head')
let bodyScripts = require('./scripts')

module.exports = function Layout ({title = 'CascadiaJS 2022 - Live Stream', content, scripts }) {
  return /*html*/`
  <!doctype html>
  <html lang=en>
    ${ head({ title, content })}
    <body style="height:1080px;max-height:1080px;width:1920px;max-width:1920px;">
      <div style="height:1080px;max-height:1080px;width:1920px;max-width:1920px;">
      <main id="content">
        ${ content }
      </main>
      </div>
      ${ bodyScripts({ scripts })}
    </body>
  </html>
`
}
