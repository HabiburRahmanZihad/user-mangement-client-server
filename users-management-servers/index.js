const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const users = [
    { id: 1, name: 'John ', email: 'jhon@gmail.com' },
    { id: 2, name: 'Don ', email: 'don@gmail.com' },
    { id: 3, name: 'Chon', email: 'chon@gmail.com' },
    { id: 4, name: 'Mon', email: 'mon@gmail.com' },
]

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', (req, res) => {
    console.log('User Post method');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;

    //add data to the database
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
