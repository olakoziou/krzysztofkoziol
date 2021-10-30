const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

const connectDB = require('./db');

const trainingRouter = require('./routes/trainingRoutes');
const galleryRouter = require('./routes/galleryRoutes');
const videoRouter = require('./routes/videoRoutes');
const buyTrainingRouter = require('./routes/buyTrainingRoutes');
const sendEmailRouter = require('./routes/sendEmailRoutes');

const app = express();
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, './config.env') });
connectDB();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

//ROUTES
app.use('/api/trainings', trainingRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/videos', videoRouter);
app.use('/api/kup-szkolenie', buyTrainingRouter);
app.use('/api/send-email', sendEmailRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
