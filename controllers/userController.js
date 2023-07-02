const { response } = require("express");

const userGet = (req, res =  response) => {

        const {nombre = 'undefined', apkey} = req.query

  res.json({
    msg: "get - api - controller",
    nombre,
    q,
    apkey
  });
};

const userPut = (req,res =  response) =>{

    const {userId}  = req.params

res.status(500).json({
    msg: "put - api - controller",
    userId
})

}
const userDel = (req,res =  response) =>{
    res.json({
        msg: "del - api - controller",
      });
    
}
const userPost = (req,res =  response) =>{
    const body = req.body
    res.status(201).json({
        msg: "post - api - controller",
        body
      });
}

const userPatch = (req,res =  response) =>{

    res.json({
        msg: "path - api - controller",
      });
}

module.exports = {
  userGet,
  userPut,
  userDel,
  userPost,
  userPatch
};
