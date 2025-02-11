const promise = require('fs').promises;

const fsp = promise.writeFile('data.txt', 'Hello World using FS Promises to write data! ');
fsp.then(() => {
    console.log('File written successfully!');
}).catch((err) => {
    console.error('Error occurred while writing the file', err);
}).finally(() => {
    console.log('File writing operation completed');
});

