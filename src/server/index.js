import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import { StaticRouter as Router, Route, Link, Switch } from 'react-router-dom';

import api from './api';
import configureStore from '../store/configureStore';

import App from '../App.js';
import bundles from '../client-manifest.json';

const port = process.env.PORT || 3000;
const app = express();
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../../static')));
app.use('/api', api);
app.get('/*', (req,res) => {
  let context = {};
  const preloadedState = {
    dicts: [],
    todos: []
  };
  
  const store = configureStore(preloadedState);

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <Router location={req.url} context={context}>
        <App />
      </Router>
    </Provider>
  );

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send(
    `
      <!doctype html>
      <html lang="">
        <head>
          <title>test project</title>
        </head>
        <body>
          <div id="app-root">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())};
          </script>
          <script src='${bundles['main.js']}'></script>
        </body>
      </html>
    `
    );
  }
});

app.listen(port, err => {
  if (err) console.log(err);
  else console.log('Listening at port ' + port);
});