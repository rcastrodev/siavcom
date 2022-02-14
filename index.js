const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static(__dirname + '/public'));


app.use(express.static(__dirname + '/public'));

// Se indica el directorio donde se almacenarán las plantillas 
app.set('views', './views');

// Se indica el motor del plantillas a utilizar
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index.pug', { mensaje: 'Usando Pug JS en Express' }); // Se muestra la plantilla hello.pug
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
