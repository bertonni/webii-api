require('dotenv').config();
const { MongoClient } = require('mongodb');

module.exports = {
  getUsers: async () => {
    const uri = process.env.DB_CONNECTION_URI;
    
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    if (!client.isConnected()) await client.connect();
    const query = {};
    const users = await client.db(process.env.DB_NAME).collection("users").find(query).toArray();
    
    await client.close();
    return users;
  },
  getUser: async (name) => {
    // const uri = "mongodb+srv://shareit:shareitdb212223@myapp.gnanh.mongodb.net/shareitdb?retryWrites=true&w=majority";
    const uri = process.env.DB_CONNECTION_URI;

    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (!client.isConnected()) await client.connect();
    const query = { name: name };
    const user = await client.db(process.env.DB_NAME).collection("users").findOne(query);
    
    await client.close();
    return user;
  }

};