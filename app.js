const express = require('express');
const http = require('http');
const path = require('path');
const url = require('url');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
  res.redirect(
    url.format({
      pathname: 'https://' + req.headers.host,
      query: req.query
    })
  );
});

const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running'));
