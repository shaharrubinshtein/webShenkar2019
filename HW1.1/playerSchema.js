const mongoose = require('mongoose')

const schema ={
    name:{type:String, index:1},
    playerID:{type:Number},
    age:{type:Number, required:true},
    weight:{type:Number, required:true},
    numOfWinnings:{type:Number},
    detailes:{
        competitionType:{type:String},
        originCountry:{type:String}
    }
}
const player_schema = new mongoose.Schema(schema)
const player        = mongoose.model('player',player_schema)
module.exports      = player 
