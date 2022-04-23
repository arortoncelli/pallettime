const routes = require('./routers/route');
var cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
const express = require('express');
const path = require('path');
const app = express();
app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
app.set('view engine',' ');
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(
    express.urlencoded({
        extended: true
    })
)

var porta = process.env.PORT || 8081;
app.listen(porta);