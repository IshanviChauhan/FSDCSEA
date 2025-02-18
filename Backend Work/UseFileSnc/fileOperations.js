const fs = require('fs');

fs.writeFileSync('data.txt', 'Hello Node.js using FS module!');
console.log('File written successfully');
const rf1 = fs.readFileSync('data.txt');
console.log(rf1);
console.log(rf1.toString());

function dataWrite() {
    try{
        fs.writeFileSync('data.txt', 'Hello Node.js using FS module!');
        console.log('File written successfully');
    }
    catch(err){
        console.log('Error writing file' + err);
    }
}

function dataRead() {
    try{
        const rf = fs.readFileSync('data.txt', {encoding:'utf-8'});
        console.log(rf);
    }
    catch(err){
        console.log('Error reading file' + err);
    }
}

function dataAppend() {
    fs.appendFileSync('data.txt', ' Appending using FS module!');
    console.log('File appended successfully');
}

function dataDelete() {
    fs.unlinkSync('data.txt');
    console.log('File deleted successfully');
}

const obj = {
    dataWrite,
    dataRead,
    dataAppend,
    dataDelete
}

module.exports = obj;