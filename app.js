const express = require('express')
const nav = [
    {
        link:'./books', name:'Books'
    },
    {
        link:'./authors', name:'Authors'
    },
    {
        link:'./admin', name:'Add book'
    },
    {
        link:'./adminauthor', name:'Add author'
    },
    {
        link:'./signin', name:'Signin'
    },
    {
        link:'./signup', name:'signup'
    },
];


const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const adminRouter = require('./src/routes/adminroutes')(nav)
const addauthorRoute = require('./src/routes/addauthor')(nav)
const signin = require('./src/routes/signin')(nav)
const signup = require('./src/routes/signup')(nav)
const app = express();

app.use(express.static('./public'))

// Router Handlers
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/admin', adminRouter);
app.use('/adminauthor', addauthorRoute);
app.use('/signin', signin);
app.use('/signup', signup);

app.set('view engine','ejs')
app.set('views',__dirname + '/src/views')

app.get('/', (req, res) => {
    res.render("index", {
        nav,
        title: 'Library App'
    })
})

app.listen(5050);