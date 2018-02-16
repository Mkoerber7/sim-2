const express= require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();

//Middleware
const checkSession = require('./middlewares/checkSession');

//Controls
const auth_control = require('./controllers/auth_control');

const app = express();

app.use( bodyParser.json() );
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use ( checkSession );
//app.use( express.static(  ) );

//Auth_control
app.post( '/api/auth/login', auth_control.login);
app.post( '/api/auth/register', auth_control.register);
app.post( '/api/auth/logout', auth_control.logout);

const port = process.env.PORT || 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );