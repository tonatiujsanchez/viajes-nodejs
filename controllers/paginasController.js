import { Testimonial } from "../models/Testimoniales.js"
import { Viaje } from "../models/Viaje.js"

const paginaInicio = ( req, res )=>{
    res.render('inicio', {
        pagina: 'Inicio'
    })
}

const paginaNostros = ( req, res )=>{

    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async ( req, res )=>{
    // Consultar DB
    const viajes = await Viaje.findAll()

    res.render('viajes', {
        pagina: 'Próximos viajes',
        viajes,
    })
}

const paginaTestimoniales = async( req, res )=>{

    try {
        const testimoniales = await Testimonial.findAll()
    
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
        
    } catch (error) {
        console.log( error );
    }
}


// Muestra un viaje por su slug
const paginaDetalleViaje = async(req, res)=>{

    const { slug } = req.params

    try {
        const viaje = await Viaje.findOne({
            where:{
                slug
            }
        })

        console.log(viaje)
        res.render('detalleViaje', {
            viaje
        })

    } catch (error) {

        console.log(error)
    }

}

export {
    paginaInicio,
    paginaNostros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}