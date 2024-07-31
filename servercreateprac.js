const h = require('http')
// console(h)


h.servercreate((req, res) => {
    res.write('welcoce node js234567iw3456789')
    res.end()
}).listen((3000, () => console.log("server start localhost:3000")))