import express from 'express';
const api = express.Router();

api.get('/*', (req, res) => {
  res.send('API SERVER STARTED');
})

export default api;