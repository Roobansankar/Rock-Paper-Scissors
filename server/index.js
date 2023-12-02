const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Router
const infoRouter = require('./router');
app.use('/info', infoRouter);

// listen port
const PORT = process.env.PORT || 5013;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Db Connection
mongoose.connect('mongodb://127.0.0.1:27017/mongoose', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => {
  console.log('Database connection successfully');
});

db.on('error', (err) => {
  console.error('Database connection error:', err);
});