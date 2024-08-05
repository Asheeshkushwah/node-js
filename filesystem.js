const f = require('fs')
// //console.log(f)

// //async
// f.readFile(__dirname+"/student.text","utf8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })
// console.log("webdiesin full stack")

// const data = f.readFileSync(__dirname+"/student.txt","utf-8");
// console.log(data);
// console.log('hello pninfosys')

try {
    f.readFile(__dirname + "/student.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
    });

} catch (error) {
    console.log(error)
}
console.log("web desien full stack")
