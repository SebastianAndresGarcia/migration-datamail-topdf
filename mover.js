const fs = require('fs');
const path = require('path');

fs.readdir('./descargas', (err, files) => {
  if (err) {
    console.log(err);
  }
  // console.log(files)
  movercausas(files);
});


function movercausas(files) {
  files.forEach((file) => {
    // const reg=/(?<=-)[1-9][0-9]{6,7}/g; // reg.test(filename) para que me encuentre dni en filename que vengan dps del guión y empiecen con un nro distinto de cero https://regexr.com/
    // https://docs.microsoft.com/es-es/dotnet/standard/base-types/regular-expression-language-quick-reference
    const filename = path.basename(`${file}`);
    // console.log(filename);

    if (filename.toLowerCase().includes('causa') || filename.toLowerCase().includes('causs') || filename.toLowerCase().includes('cauas') || filename.toLowerCase().includes('caussa')) { // para el caso de mover archivos que contengan el string 'causas' el tolower va para que pase todo a minúscula
      // if (reg.test(filename)) {
      const currentPath = path.join(__dirname, 'descargas', `${file}`);
      const destinationPath = path.join(__dirname, 'causasdni', `${file}`);

      fs.rename(currentPath, destinationPath, (err) => {
        if (err) {
          throw err;
        }
        console.log(`Successfully moved the file ${file}!`);
      });
    }
  });
}


/* const filename = path.basename('./descargas/zavalla.pdf');
console.log(filename); */
