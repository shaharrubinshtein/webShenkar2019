const mongoose      = require('mongoose')
const consts        = require('./consts')
const player        = require('./playerSchema')
const connection    = require('./db')


module.exports={
   async getAllPlayers(req,res,next){
      
        const result = await player.find({})
        if(result) 
            res.json(result)
        else
            res.status(404).send('not found')
    },
   
   async UpdateNumOfWinnings(req,res,next){

        const playerId=req.params.playerID;
        const numOfWinnings=req.body.numOfWinnings

        console.log(playerId);
        console.log(numOfWinnings);
            
        const result = await player.findOneAndUpdate({playerID:playerId},{$set:{"numOfWinnings":numOfWinnings}});
        if(result) 
            res.json(result)
        else 
            res.status(404).send('Not Found')
    },

    async getPlayersByWinningsAge(req,res,next){
    
        const {numOfWinnings= null, age =null} =req.params
        const result = await player.find({numOfWinnings,age},(err,sortedPlayer)=>{
            if(err){
                console.log("could not find player")
            }
            console.log(sortedPlayer)
        });
        if(result) 
            res.json(result)
        else
            res.status(404).send('not found')
    }

}
