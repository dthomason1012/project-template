require('dotenv').config({ path: '../.env' });

const express = require('express');
const cors = require('cors');
const helloRoute = require('./routes/route');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', helloRoute);

app.listen(process.env.SERVER_PORT, () => {
  console.log('Connected to DB; listening on port', process.env.SERVER_PORT);
});
