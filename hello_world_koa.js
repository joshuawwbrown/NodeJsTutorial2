// Hello world, KOA version

var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Hello KOA';
});

app.listen(1337);
