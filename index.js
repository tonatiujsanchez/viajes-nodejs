import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'


const app = express()

// Conectar la base de datos
db.authenticate()
    .then(()=> console.log('Base de datos conectada'))
    .catch((error)=> console.log(error))

// definir puerto
const port = process.env.PORT || 4000

//Habilitar pug
app.set('view engine', 'pug')


//obtener el año actual
app.use( (req, res, next)=>{
    
    const year = new Date().getFullYear()

    res.locals.actualYear = year 
    res.locals.nombreSitio = 'Agencia de Viajes' 

    next()
})

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}))

// Definir la carpeta public
app.use(express.static('public'))

// Agregar router a app
app.use('/', router)



app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto: ${ port }`)
})