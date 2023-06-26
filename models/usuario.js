//Migracion 
const {Schema, model}=require('mongoose')

const UsuarioSchema= Schema({
    //se define tipos de datos
    nombre:{
        unique:[true, 'El nombre:{VALUE} ya existe'],
        type: String,
        required: [true,'El campo  es requerido']

    },
    password:{
        type: String,
        required:[true, 'El password es requerido'],
        minlength: [3, 'Debe tener minimo 3 caracteres'],

        
    },

    rol:{
        type:String,
        required:true,
        enum:['Admin', 'Asesor']

    },

    estado:{
        type: Boolean,
        required:[true, 'El estado es obligatorio'],
        default:false,
    }
})
//este es el nombre del objeto Usuario
module.exports = model('Usuario', UsuarioSchema)//Exportar el modelo

