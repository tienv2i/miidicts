import express from 'express';
import path from 'path';
import fs from 'fs';

const rawData = fs.readFileSync(path.resolve(process.cwd(), 'datax.json'));
const data = JSON.parse(rawData.toString()).dicts.words;

const apiRouter = express.Router();

apiRouter.use('/', (req, res) => {
	res.send(data);
});

export { apiRouter };