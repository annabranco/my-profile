const jsonServer = require('json-server');
const path = require('path');

const DATABASES = [
  'texts',
  'projectsDB',
  'skills',
  'formation',
  'experiences',
  'languages'
];

DATABASES.forEach((fileName, index) => {
  const port = Number(`303${index}`);
  const server = jsonServer.create();
  const jsonPath = path.join(__dirname, '/src/db/', `${fileName}.json`);
  const router = jsonServer.router(jsonPath);
  const middlewares = jsonServer.defaults();
  server.use(middlewares);
  server.use(router);
  server.listen(port, () => {
    console.log(
      `Fake ${fileName.toUpperCase()} server is running on port ${port}.`
    );
  });
});
