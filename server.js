import express from 'express';
import connectDb from './config/dbConnection.js';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './Routes/authRoutes.js';
import activityRoutes from './Routes/activityRoutes.js';
import bookingRoutes from './Routes/bookingRoutes.js';
import mongoose from 'mongoose';
import addActivities from './utils/sampleData.js'



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());


// Database Connection
connectDb().then(() => {
  console.log('Database connection established');
}).catch(err => {
  console.error('Database connection failed:', err);
  process.exit(1);
});

// Routes

app.get('/', (req, res) => {
  res.send("Hello from root route!");
});


app.use('/api/users', authRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/bookings', bookingRoutes);


mongoose.connection.once('open', () => {
   if (process.env.NODE_ENV === 'development') {
    addActivities(); 
  }
  // app.listen(PORT, () => {
  //   console.log(`Server running on port ${PORT}`);
  //   console.log(`Connected to DB: ${mongoose.connection.name}`);
  // });
});

export default app;