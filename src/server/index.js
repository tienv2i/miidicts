import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import api from './api';

import Html from './html';
import App from '../common/App.js';
import bundles from '../client-manifest.json';

const port = process.env.PORT || 3000;
const app = express();
app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/api', api);
app.get('/*', (req,res) => {
  res.write('<!DOCTYPE html>');
  ReactDOMServer.renderToNodeStream(
    <Html bundles={bundles}>
      <App/>
    </Html>
  ).pipe(res);
});

app.listen(port, err => {
  if (err) console.log(err);
  else console.log('Listening at port ' + port);
});