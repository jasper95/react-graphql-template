import mongoose from 'mongoose';

mongoose
  .connect(process.env.DB_URL ?? '')
  .then(() => {
    console.log('Successfully connected to database');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB database', error);
  });

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
