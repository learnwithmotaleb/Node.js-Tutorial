const file=require('./myModules');
console.log(file.nila());
console.log(file.munna());
console.log(file.NilaMunna);

All file seen
const fs = require('fs');
console.log(fs);

writeFile of Node.js
const fs = require('fs');
fs.writeFile('nila.txt',"Amar sonar bangla ami tomay vlobashi chorodin tomar askash tomar batash amr prane bajay bashi_____",(err)=>{
    if(err){
        console.log("Err");
    }else{
        console.log("Successfully Program");
    }
});


appendFile of Node.js
const fs = require('fs');
fs.appendFile('nila.txt',"The quick brownt the fox jumped over the lazy dog",(err)=>{
    if(err){
        console.log("err");
    }else{
        console.log("Successfully Program");
    }
});

readFile of Node.js
const fs = require('fs');
fs.readFile('nila.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

rename Node.js
const fs = require('fs');
fs.rename('nila.txt','munna.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Successfully Program");
    }
});

unlink/delete Node.js
const fs = require('fs');
fs.unlinkSync('munna.txt',(err)=>{
    if(err){
        console.log(err);

    }else{
        console.log("successfully Program");
    }
});

exists Node.js
const fs = require('fs');
fs.exists('munna.txt',(result)=>{
    if(result){
        console.log("Found");
    }else{
        console.log("Not Found !");
    }
});

