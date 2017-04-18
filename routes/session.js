var express = require('express')
var parseurl = require('parseurl')
// var session = require('express-session')

var router = express.Router()

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true
// }))

router.get('/foo', function(req, res, next) {
  res.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
  res.send('you viewed this page ' + req.session.views['/session/foo'] + ' times')
})

router.get('/bar', function(req, res, next) {
  res.send('you viewed this page ' + req.session.views['/session/bar'] + ' times')
})

module.exports = router
