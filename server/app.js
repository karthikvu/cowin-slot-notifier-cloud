var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config()

var subscriptions = require('./routes/subscriptions');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());





app.use((req, res, next) => {
  console.log()
  if(!req.url.includes('/api')){
    next();
    return
  }
  
  if(!req.headers['x-identifier']){
    res.status(400).json({})
    return;
  }
  var b64string = req.headers['x-identifier']
  var user = Buffer.from(b64string, 'base64').toString(); // Ta-da
  req.user = user
  next()
})

app.use('/api/subscriptions', subscriptions);
// catch 404 and forward to error handler

if (process.env.NODE_ENV === 'production') {
  console.log(`Production mode detected: Serving react-ui`)
  const path = require('path')
  const buildDir = path.join(__dirname, '../client/build')
  console.log(buildDir)
  app.use(express.static(buildDir))

  app.get('*', (req, res) => {
    res.sendFile(path.join(buildDir, 'index.html'))
    return
  })
}

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



module.exports = app;
