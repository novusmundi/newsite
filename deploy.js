var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '.'),{
repo: 'git@github.com:novusmundi/newsite.git'}, function(err) {
console.log(err);
console.log("Se ha subido a gh-pages correctamente");
});
