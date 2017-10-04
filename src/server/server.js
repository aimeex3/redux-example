const express = require('express');

const app = express();

// server any file in public 
app.use(express.static('public'));

app.listen(5000, () => {
  console.log('Server is running');
});
