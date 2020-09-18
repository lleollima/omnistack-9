const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();


mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack.yyl7i.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology: true,
});

// req.query  = Acessar query params ( para filtros)
// req.params = Acessar route params ( para edição , delete)
// req.body = Acessar corpo da requisição ( para criação ou edição)

app.use(express.json());
app.use(routes);



app.listen(3333);

