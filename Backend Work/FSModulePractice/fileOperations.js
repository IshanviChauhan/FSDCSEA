const promise = require('fs').promises;

async function dataCopy(){
    const data = await promise.readFile('studentData.json');
    const fsp = promise.writeFile('updatedStudentData.json',data);
    fsp.then(() => {
        console.log("Data Written Successfully");
    }).catch((err) => {
        console.log("Error "+err);
    }).finally(() => {
        console.log("Done");
    }
)

const data1 = await promise.readFile('updatedStudentData.json');
console.log(data1.toString());
}

//dataCopy();
const obj = {
    dataCopy:dataCopy
}
module.exports=obj;