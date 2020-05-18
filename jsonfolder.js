const file = require('fs')
const student = {"name":"jey","dept":"ECE","section":"A","age":"24"}
const jsonstr = JSON.stringify(student);
console.log(jsonstr);
const jsonstring = {"name":"jey","dept":"ECE","section":"A","age":"24"}
console.log(jsonstring);
const studentjsonarray = [{"name":"jey","dept":"ECE","section":"A","age":"24"},{"name":"jey","dept":"ECE","section":"A","age":"24"}]
console.log(studentjsonarray);
console.log(JSON.stringify(studentjsonarray));
file.writeFileSync('testjson.json',jsonstr);
const studentfromfile = file.readFileSync('student.json');
const stfromfilesting = JSON.parse(studentfromfile);
console.log(stfromfilesting);