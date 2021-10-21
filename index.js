const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());


// const handler = (req, res) => {
//     res.send('hello from node');
// }


const users = [
    { id: 1, name: 'james bond', email: 'jamesbond@gmail.com' },
    { id: 2, name: 'steve jobs', email: 'steve@gmail.com' },
    { id: 3, name: 'Elon Musk ', email: 'elon@gmail.com' },
    { id: 4, name: 'Bill Gates ', email: 'gates@gmail.com' },
]



app.get('/users', (req, res) => {
    const search = req.query.search;
    // query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))

        res.send(searchResult);
    }
    else {

        res.send(users);
    }

})

// app method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;

    users.push(newUser);

    // res.send(JSON.stringify(newUser));

    console.log('hitting the post');
    res.json(newUser);
})


app.get('/users', (req, res) => {
    res.send(users)
})


app.get('/', (req, res) => {
    res.send('Wow.I am learning node');
});

// dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})


app.listen(port, () => {
    console.log('listening to port', port);
})