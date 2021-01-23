const express = require('express')

const nav1 = [
    {
        link:'./adminbooks', name:'Books'
    },
    {
        link:'./adminauthors', name:'Authors'
    },
    {
        link:'./admin', name:'Add book'
    },
    {
        link:'./', name:'Logout'
    },
];

const nav = [

    {
        link:'./signin', name:'Signin'
    },
    {
        link:'./signup', name:'signup'
    },
];



const booksRouter = require('./src/routes/bookRoutes')(nav1)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const adminRouter = require('./src/routes/adminroutes')(nav1)
const signin = require('./src/routes/signin')(nav)
const signup = require('./src/routes/signup')(nav)


const adminbooksRouter = require('./src/routes/adminbookroutes')(nav1)
const adminauthorsRouter = require('./src/routes/adminauthoroutes')(nav1)



const app = express();

app.use(express.static('./public'))

// Router Handlers
app.use(express.urlencoded({extended:true}));
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/admin', adminRouter);
app.use('/adminbooks', adminbooksRouter);
app.use('/adminauthors', adminauthorsRouter);

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

app.listen(5070);