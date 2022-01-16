const express = require("express");
const { nextTick } = require("process");

const app = express();
const morgan = require('morgan');

app.set("view engine", "ejs");

app.listen(3000);
app.use(morgan(dev));
app.use(express.static('public'));

// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
//   });
  
//   app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
//   });
  

const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    


app.get("/", (req, res) => {
    // res.send("<p>home page</p>");
   res.render('index', { title: 'Home', blogs});
});


app.get("/about", (req, res) => {
    // res.send("<p>about page</p>");
    res.render('about', { title: 'About'});
});

// app.get('/about-us', (req, res) => {
//    // res.redirect('/about');
// });


app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog'});
})

app.use((req, res) => {
    res.render('404', { title: '404'});
});
