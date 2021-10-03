const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

const connectDB = require('./db');

const trainingRouter = require('./routes/trainingRoutes');
const galleryRouter = require('./routes/galleryRoutes');
const videoRouter = require('./routes/videoRoutes');

const app = express();
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, './config.env') });
connectDB();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

//ROUTES
app.use('/api/trainings', trainingRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/videos', videoRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});