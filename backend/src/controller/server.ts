import express from 'express';

const app = express();

app.get('/', function (req, res) {
    res.send('Rodando');
  });
  
app.listen(3000, function () {
    console.log('listening on port 3000');
});;

