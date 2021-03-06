//create express variable
var express = require('express');

// create our app
var app = express();

//For Heroku
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
})

//folder to use
app.use(express.static('public'));

//start server
app.listen(PORT, function () {
  console.log('express server is up on port ' + PORT);
});
