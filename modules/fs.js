const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname,"/Papka"), {}, (err) => {
//     if(err) throw err;
//     console.log("папка успешно создана ! ☺☺☺");
// })
 
// fs.writeFile(path.join(__dirname,"/Papka","Message.txt"), "Abduvohid bot ", (err) =>{
//     if(err) throw err;
//     console.log("файл успешно создан ! ☺☺☺");
// })

// fs.appendFile(path.join(__dirname,"/Papka","Message.txt"), " Javohir bot", (err) =>{
//     if(err) throw err;
//     console.log("файл успешно обнавлён ! ☺☺☺");
// })

fs.readFile(path.join(__dirname,"/Papka","Message.txt"), "utf-8", (err,data) => {
    if(err) throw err
    console.log(data)
})

fs.rename(
    path.join(__dirname, "/Papka","Message.txt"),
    path.join(__dirname, "/Papka","63-group.txt"),
    (err)=>{
        if(err) throw err
        console.log("файл успешно переименован ! ☺☺☺")
    }
)