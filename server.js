require('dotenv').config();
const http = require('http');
const app = require('./app');
const { swaggerDocs: V1SwaggerDocs } = require("./src/v1/swagger");

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
  V1SwaggerDocs(app, port);
});
