const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://shareit:shareitdb212223@myapp.gnanh.mongodb.net/shareitdb?retryWrites=true&w=majority";


module.exports = {
  getUsers: async (req, res) => {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    await client.connect(err => {
      // perform actions on the collection object
      if (err) console.log(err);
    });
    const users = await client.db("shareit").collection('users').findOne();
    
    client.close();
    return res.status(200).json({ users: users });
  }
};