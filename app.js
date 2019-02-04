

var fs = require("fs");  

//synchronousing files
//first file data1
fs.readFile('firstName.txt',function(err, data1){ 
    //second file data2
       fs.readFile('lastName.txt',function(err, data2){  
                    //puting data1 and data 2 into data   
                    let data = data1+data2;       
                    //create a new file called fullname and write data into it       
                    fs.writeFile('fullName.txt', data, function(err, result) { 
                        if(err) console.log('error', err)     
                    });   
          }); 
    });