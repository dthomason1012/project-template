require('dotenv').config({ path: '../.env' });

const express = require('express');
const cors = require('cors');
const helloRoute = require('./routes/helloRoute');
const bookRoutes = require('./routes/bookRoutes');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/hello', helloRoute);
app.use('/api/books', bookRoutes);

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server listening on port', process.env.SERVER_PORT);
});
