import mongoose from 'mongoose';

const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    // Use existing database connection
    console.log('Using existing connection');
    return;
  }
  // Use a new db connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('MongoDb connected');
  connection.isConnected = db.connections[0].readyState;
}

export default connectDb;
