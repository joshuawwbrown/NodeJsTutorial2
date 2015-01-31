// A slightly cooler Koa Web App

var koa = require('koa');
var app = koa();

// Awesome logging function

app.use(function *(next){

  var start = new Date;
  
  // Cascade to the next function...
  yield next; 
  
  // And when it's done, continue right here!
  var finish = new Date;
  var elapsed = finish - start;
  console.log('[%s] %s %s (%s)', start, this.method, this.url, elapsed);

});

// Response

app.use(function *(){
  this.body = 'Hello Koa';
});

app.listen(1337);
