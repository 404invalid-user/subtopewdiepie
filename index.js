const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('*', function(req, res) {
    res.status(404).send('what??? ' + `"${req.url}"` + " is not poggers");
});


app.listen(process.env.PORT || 5000)
console.log('online i think')