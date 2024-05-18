const fs = require("fs");

// reading a file text

//const readText = fs.readFileSync("./txt/read.txt", "utf-8");

fs.readFile("./txt/read.txt","utf-8", (err, data) =>{
    if(err) {
        throw Error('Error reading text')
    }
    console.log(data);
    fs.writeFile('./txt/read2.txt', data, 'utf-8', (err) =>{
        if(err){
            throw Error('error when writing data')
        }
    })
});


// writing a text

//const writtenText = fs.writeFileSync("./txt/read.txt", readText + "hi this is samir from raipur")

