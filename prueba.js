// mbox-attachment-extract datos/oficina ./descargas/ -p
const { exec } = require('child_process');
const fs = require('fs');

fs.readdir('./backupMail', (err, files) => {
  if (err) {
    console.log(err);
  }
  console.log(files);
  descargas(files);
});

/* function renombrarArchivos(files){
    files.forEach(file => {
        fs.renameSync(`./backupMail/${file}`,`./backupMail/${file.replace(/\s/g, '')}`, function(error){
            if(error) console.log(error)
            console.log("joya")
        })
    })
} */

function descargas(files) {
  files.forEach((file) => {
    try {
      exec(`mbox-attachment-extract backupMail/${file} ./descargas/ -p`, (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
    } catch (e) {
      console.log(e);
    }
  });
}
