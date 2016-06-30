var exec = require('exec')
exec('php -S 127.0.0.1:2009 -t view/mock/', function(err, out, code) {
  if (err instanceof Error)
    throw err;
  process.stderr.write(err);
  process.stdout.write(out);
  process.exit(code);
});

var app = require('fms')
app.run({
    static: './output',
    port: '2000',
    view: {
        server: 'http://127.0.0.1:2009'
    }
})


app.view({
    title: '演示',
    url: '/demo/',
    template: 'demo/index.html'
})
