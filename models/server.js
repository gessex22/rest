const express = require('express')
const cors = require('cors')
const { dbconection } = require('../db/configdb')
const dotenv = require('dotenv').config()


class Server{

    constructor(){

        this.app = express()
        this.port = process.env.PORT || 3000
        this.userpath = '/api/users'
        this.dbConect()
        
        this.middlewares()
        this.routes()
        
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    async dbConect (){
        await dbconection()
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