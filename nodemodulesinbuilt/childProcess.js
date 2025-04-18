const cal=require("../test.js")
const cp=require("child_process")
// cp.execSync("calc")
// cp.execSync("start chrome https://linkedIn.com ")
// console.log(cp.execSync("node ../test.js").toString());
console.log(cp.execSync(`node ${cal}`));

