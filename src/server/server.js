const express = require('express');

const app = express();

// serve any file in public 
app.use(express.static('public'));

app.listen(5000, () => {
  console.log('Server is running');
});
