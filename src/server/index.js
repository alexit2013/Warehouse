import express from 'express';
import path from 'path';
// import https from 'https';
import fs from 'fs';
import proxy from 'http-proxy-middleware';

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8089;
const config = JSON.parse(fs.readFileSync(path.join(__dirname, './config/api.config.json'), 'utf8'));

const app = express();

const proxyHost = config['schema-catalog-rest'];
// const options = {
//   rejectUnauthorized: false,
// };
// const httpsAgent = new https.Agent(options);
// proxyHost.agent = httpsAgent;
const proxySchemaCatalog = proxy(proxyHost);

app.use('/', express.static(__dirname));
app.use('/assets', express.static(`${__dirname}/assets`));
app.use('/api', proxySchemaCatalog);
app.all('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.listen(port, () => {
  console.log(`Running Express on port - ${port}`);
});
