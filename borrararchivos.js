const fs = require('fs');
const path = require('path');

fs.readdir('./descargas', (err, files) => {
  if (err) {
    console.log(err);
  }
  // console.log(files)
  eliminarcausas(files);
});


function eliminarcausas(files) {
  files.forEach((file) => {
    const filename = path.basename(`${file}`);
    // console.log(filename);
    if (filename.toLowerCase().includes('domicilios') || filename.toLowerCase().includes('penitencia') || filename.toLowerCase().includes('enargas') || filename.toLowerCase().includes('facebook')
            || filename.toLowerCase().includes('sicar') || filename.toLowerCase().includes('sews') || filename.toLowerCase().includes('segdet') || filename.toLowerCase().includes('domicilio')) { // para el caso de mover archivos que contengan el string 'causas' el tolower va para que pase todo a minúscula
      try {
        fs.unlinkSync(`./descargas/${file}`);
        console.log(`File removed ${file}`);
      } catch (err) {
        console.error('Something wrong happened removing the file', err);
      }
    }
  });
}


/* const filename = path.basename('./descargas/zavalla.pdf');
console.log(filename); */
