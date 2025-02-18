const promise = require('fs').promises;

const fsp = promise.writeFile('data.txt', 'Hello World using FS Promises to write data! ');
fsp.then(() => {
    console.log('File written successfully!');
}).catch((err) => {
    console.log('Error occurred while writing the file', err);
}).finally(() => {
    console.log('Finally close all resources automatically');
});

async function readFileAsync(){
    const data = await promise.readFile('data.txt', {encoding: 'utf-8'});
    console.log(data);
}

readFileAsync();