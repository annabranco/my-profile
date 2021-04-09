import http from 'http';
import express from 'express';
import fs from 'fs';
import cors from 'cors';

const SERVER_PORT = 3031;

const app = express();
app.use(cors());
const pathForJsonFiles = 'src/db/';

app.get('/', async (req, res) => {
  res.statusMessage = `A filename must be specified on the request.`;
  res.status(400).end();
});

app.get('/health', async (req, res) => {
  res.sendStatus(200);
});

app.get('/:file', async (req, res) => {
  fs.readFile(pathForJsonFiles + req.params.file, (error, jsonFile) => {
    if (error) {
      res.statusMessage = `No filename "${req.params.file}" was found.`;
      res.status(404).end();
    }
    res.setHeader('Content-Type', 'application/json');
    res.statusMessage = `${req.params.file} sent to host.`;
    res.send(jsonFile);
  });
});

http.createServer(app).listen(SERVER_PORT, () => {
  console.debug(
    `[INFO] Development server started at ${SERVER_PORT} | ${new Date()}`
  );
});
