const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {

    res.send('Hello from my second  to node server');
});

const users = [
    {id:0, name:'sabana', email:'sabana@gmail.com'},
    {id:1, name:'sonia', email:'sonia@gmail.com'},
    {id:2, name:'sabnur', email:'sabnur@gmail.com'},
    {id:3, name:'samanta', email:'samanta@gmail.com'},
    {id:4, name:'sania', email:'sania@gmail.com'}
]
app.get('/users',(req, res) => {
    const search = (req.query.search);
    if(search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
} )

app.post('/users',(req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    res.send(JSON.stringify(newUser))
})

//dynamic api

app.get('/users/:id', (req, res) => {
    const index = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})