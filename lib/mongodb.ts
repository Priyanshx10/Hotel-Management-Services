// src/lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017'; // Your MongoDB connection string
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

// Create a new MongoDB client
if (process.env.NODE_ENV === 'development') {
  // In development mode, use a new client for every request
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, use a singleton client
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export the MongoDB client promise
export default clientPromise;
