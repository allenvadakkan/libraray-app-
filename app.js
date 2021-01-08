const express = require('express')
const nav = [
    {
        link:'./books', name:'Books'
    },
    {
        link:'./authors', name:'Authors'
    }
];


const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const app = express();

app.use(express.static('./public'))

// Router Handlers
app.use('/books', booksRouter)
app.use('/authors', authorsRouter)

app.set('view engine','ejs')
app.set('views',__dirname + '/src/views')

app.get('/', (req, res) => {
    res.render("index", {
        nav,
        title: 'Library App'
    })
})

app.listen(5000);