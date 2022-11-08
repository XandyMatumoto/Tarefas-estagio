
const fs = require('fs');
const path = require('path');

fs.readdir(__dirname +'/tarefa-3', (err, files) => {
    if (err)
      console.log(err);
    else {
      nome =[];
      files.forEach(file => {
        nome.push(file)
      })
    }
    for (let i = 0; i < nome.length; i++) {
    fs.writeFile(path.join(__dirname,"tarefa-3",nome[i]), nome[i], (err) => {
        if (err)
        console.log(err);
        else {
        console.log(`arquivo ${nome[i]} editado `);
        }
    }
    )}
})