//npm modules
const express   = require('express');
const morgan    = require('morgan');
var path = require('path');

//my additional modules
const shelterController = require('./controllers/shelterController')
const asyncWrapper      = require('./async.wrapper')

//establish app()
const app   = express()
const port  = process.env.PORT || 3003;

//middleware
app.set('port',port)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use('/',express.static('./public'))//for API
app.use(
    (req,res,next) =>{
        res.header("Access-Control-Allow-Origin","*")
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept")
        //res.set("Content-Type", "application/json")
        next()
    }
);

app.get('/nir',(req,res,next)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/map.html'));
   

    //res.sendFile(__dirname+"/map.html");
});
app.post('/showCloseSheltersAuto',asyncWrapper(shelterController.showCloseSheltersAuto));

app.post('/AllHouse', asyncWrapper(shelterController.AllHouse));
app.post('/updateHospitality', asyncWrapper(shelterController.updateHospitality));
app.post('/showHospitalityByCityAndCapacity', asyncWrapper(shelterController.showHospitalityByCityAndCapacity));
app.post('/addHospitality',asyncWrapper(shelterController.addHospitality));
app.post('/findCloseShelters',asyncWrapper(shelterController.findCloseShelters));//
app.post('/addShelter', asyncWrapper(shelterController.addShelter));//
app.all('*',(req,res)=>{
    res.send('not found');
})



//run the server
app.listen(port,
    ()=>console.log('Express server ready for requests on: ',port))