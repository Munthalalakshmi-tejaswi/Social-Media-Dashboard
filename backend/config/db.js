const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/social-media';
    
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('\u2705 MongoDB connected successfully');
    console.log(`Database: ${mongoose.connection.name}`);
    
  } catch (error) {
    console.error('\u274c MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
