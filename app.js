// if not in production, require the dotenv package
if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const express = require("express"); 
const bodyParser = require('body-parser')
const app = express();

const path = require('path'); //so we can set views directory below
const ejsMate = require('ejs-mate'); //engine used to parse EJS

//TO USE ON EVERY ROUTE
app.engine('ejs', ejsMate); //telling app to use this engine instead of default one
app.set('view engine', 'ejs'); //per the ejs docs
app.set('views', path.join(__dirname,'views')); //making sure "views" folder is relative to this file
app.use(express.json());
app.use(express.urlencoded({ extended: true })) //for passing things through forms
app.use(express.static(path.join(__dirname, 'public'))); //telling it to serve "public" directory (the public folder we created).
// if in production, check that it's on https (otherwise redirect to https)
if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
      if (req.header('x-forwarded-proto') !== 'https')
        res.redirect(`https://${req.header('host')}${req.url}`)
      else
        next()
    })
}

//REQUIRE ROUTE FILES
const mainRoute = require('./routes/main');

//USE ROUTE FILES -> had to move this down in the code, otherwise sessions do not work!
app.use('/', mainRoute);

//HOME PAGE
app.get('/', (req, res) => {
    res.render('home');
});

//FOR ALL NON-EXISTING ROUTES
app.all('*', (req, res, next) => { 
	res.render('404.ejs', {pageTitle: 'Page Not Found...'})
})

//PORT LISTENING
app.listen(process.env.PORT || 3001, () => {
    console.log("VeeKay server started - listening...");
});