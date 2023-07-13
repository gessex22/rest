const {Schema, model}  = require('mongoose')

const UserSchema = Schema({

    name: {
        type: String,
        required: [true, 'El nombre es obligatorio' ]
    },
    email:{
        type: String,
        required : [true, 'El correo es obligatorio' ],
        unique: true
    },
    password:{
        type: String,
        required : [true, 'password obligatorio' ]
    },
    img:{
        type: String,
    },
    rol:{
        type: String,
        required : [true, 'Rol es requerido'],
    },
    status:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default:false
    }

})

UserSchema.methods.toJSON = function (){

    const { __v, password, ...userClean} = this.toObject()
    return userClean
}

// UserSchema.method('toJSON', function() {
//     const { __v, password, ...user } = this.toObject();
//     return user;
//   });

module.exports = model('User', UserSchema)