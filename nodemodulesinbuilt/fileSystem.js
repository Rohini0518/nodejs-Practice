const { log } = require("console");
const fs=require("fs")
let fileOPen=fs.readFileSync("file1.txt")
console.log("opening file--"+fileOPen);
fs.writeFileSync("file2.txt","rohih have writen in fs module2222")
fs.writeFileSync("file3.txt","rohih have writen in fs module3333")
// fs.appendFileSync("file1.txt", i", i added this text by append method")
// fs.unlinkSync("file3.txt",(error)=>{if(error){
//     console.log(error);
// }})
// fs.mkdirSync("fileDirectory")
console.log(__dirname);
console.log(__filename);
