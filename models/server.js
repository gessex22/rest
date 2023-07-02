const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()


class Server{

    constructor(){

        this.app = express()
        this.port = process.env.PORT
        this.userpath = '/api/users'
        
        this.middlewares()
        this.routes()
        
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.userpath, require('../routes/user-routes'))
    }
    
    
    listen(){

        this.app.listen(this.port , ()=>{

            console.log('Servidor REST online en el puerto '+ this.port)
        })
    }
    



    }






module.exports = Server