const yauzl = require("yauzl");
const fs = require('fs');
const readline = require('readline');

var extract = (path, dumpContents) => {
    yauzl.open(path, function (err, zipfile) {
        if (err) throw err;
        zipfile.on("error", function (err) {
            throw err;
        });
        zipfile.on("entry", function (entry) {
            console.log(entry);
            console.log(entry.getLastModDate());
            zipfile.openReadStream(entry, function (err, readStream) {
                if (err) throw err;
                extractLine(readStream)
            });
        });
    });
}

var extractLine = (readStream) => {
    const rl = readline.createInterface({
        input: readStream,
        crlfDelay: Infinity
    });
    rl.on('line', (line) => {
       console.log(`line : ${line}\n`);
    });
}

module.exports.extract = extract;