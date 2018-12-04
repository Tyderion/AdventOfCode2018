const fs = require('fs');

(async function() {
    const text = await fs.promises.readFile('01.input');
    console.log(text.toString().split(/\r?\n/i).map(line => Number(line)).reduce((acc, val) => acc += val, 0))
})()