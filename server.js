const express = require('express');
const app = express();
const menu = require('./routes/menu');
const { getUsers, getUser } = require('./database/database');
const PORT = process.env.PORT ?? 3080;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

module.exports = app
app.use('/menu', menu);
// app.use('/users', users);

app.get('/', (req, res) => {
  const body = `
    <h1>Hello! Welcome to this API</h1>
    <p>There are just few endpoints available at moment. Here they are: '/menu', '/users', '/user/{name}'. Try it</p>
    `;
  res.send(body);
})

app.get('/users', async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

app.get('/users/:name', async (req, res) => {
  const user = await getUser(req.params.name);
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})