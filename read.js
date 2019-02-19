const fs = require('fs');
const readline = require('readline');

let lineReader = readline.createInterface({
    input: fs.createReadStream(__filename)
});

lineReader.on('line', function (line) {
    console.log("Line : ", line);
    });


/*var stream = new fs.ReadStream(__filename);

stream.on('readable', function () {
    var data = stream.read();
    console.log(data.toString());
});

stream.on('end', function () {
    console.log("THE END");
})*/

/*
fs.readFile(__filename, {encoding: 'utf-8'}, function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
})*/