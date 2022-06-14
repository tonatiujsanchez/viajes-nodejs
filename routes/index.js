import express from 'express'
import { 
        paginaInicio, 
        paginaNostros, 
        paginaViajes, 
        paginaTestimoniales, 
        paginaDetalleViaje } from '../controllers/index.js'

const router = express.Router()


router.get('/', paginaInicio)

router.get('/nosotros', paginaNostros)

router.get('/viajes', paginaViajes)

router.get('/viajes/:slug', paginaDetalleViaje)

router.get('/testimoniales', paginaTestimoniales)

export default router