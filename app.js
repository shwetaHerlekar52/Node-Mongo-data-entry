const extract = require('./extractData/extract');

var paths = [];
var dumpContents = true;
process.argv.slice(2).forEach(function (arg) {
    if (arg === "--no-contents") {
        dumpContents = false;
    } else {
        paths.push(arg);
    }
});

paths.forEach(function (path, dumpContents) {
    try{
        extract.extract(path, dumpContents);
    } catch(e) {
        console.log(e.message);
    }
});