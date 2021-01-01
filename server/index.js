const express = require('express')
const fs = require('fs')
const app = express()
// const port = process.env.PORT || 8080

app.use(require('cors')())
app.use(express.json())
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization');
  res.header('Access-Control-Max-Age', 2592000);
  if (req.method == 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
});


app.listen(3001, () => {
  console.log('app running on: http://localhost:3001')
})

app.get('/toolsapi/hello', async (req, res) => {
  res.send({ code: 200, data: 'Hello node express api!'})
})
app.post('/toolsapi/file/create', async (req, res) => {
  const reqParams = req.body;
  fs.writeFile(
    "/Users/laststory/Desktop/" + "test.txt",
    reqParams.content,
    function(err) {
      if (err) {
        res.send({ code: 400, data: err})
      }
      res.send({ code: 200, data: '', msg: 'success' })
    }
  );
})
// app.use((request, response) => {
//     response.status(404).send("Page not found!");
// });