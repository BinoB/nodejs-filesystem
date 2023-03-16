const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const folderPath = './'; // actual folder path

// to create a text file with the current timestamp
app.post('/create-file', (req, res) => {
  const now = new Date();
  const fileName = `${now.toISOString()}.txt`;
  const filePath = path.join(folderPath, fileName);
  const fileContent = now.toString();

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating file');
    } else {
      console.log(`File ${fileName} created`);
      res.status(200).send('File created');
    }
  });
});

//  retrieve all text files in the folder
app.get('/get-files', (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving files');
    } else {
      const textFiles = files.filter(file => path.extname(file) === '.txt');
      res.status(200).send(textFiles);
    }
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});


