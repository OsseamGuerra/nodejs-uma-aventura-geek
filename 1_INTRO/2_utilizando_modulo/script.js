const fs = require('fs') // File system

fs.readFile('arquivo.txt', 'utf-8', (error, data) => {
  if(error) {
    console.log(error)
    return
  }
  console.log(data)
})