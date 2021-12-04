import mongoose from 'mongoose';

mongoose
  .connect('mongodb+srv://lfdev:lfdev@cluster0.u88eb.mongodb.net/sample_mflix?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to database');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB database', error);
  });

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
