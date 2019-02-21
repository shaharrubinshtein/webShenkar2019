const mongoose      = require('mongoose')
const shelter       = require('../models/shelterSchema') // access the MODEL
const hospitality   = require('../models/hospitalitySchema')
const citizen       = require('../models/citizenSchema')
const connection    = require('../db')
const {OAuth2Client} = require('google-auth-library');

const client = new OAuth2Client(`895506418876-jktf38vji4h0e54getonv95ue8p48bn1.apps.googleusercontent.com`);
 

// show all shelters
module.exports= {
    async showAllShelters(req,res,next){
        const result=await shelter.find({})
            if(result)
            {
                res.json(result)
            }
            else
            {
                    res.status(404).send("not found")
            }
    },

//show all hospitalities matched by city and capacity(number of people available) 



    async showHospitalityByCityAndCapacity(req,res,next){
    
        const {city= null, capacity =null} =req.body
        const result = await hospitality.find({city,remain:{$lte:capacity}},(err,relevantHospitality)=>{
            if(err){
                console.log("could not find matching house")
            }
            console.log(relevantHospitality)
        });
        if(result)
        {
            console.log(result)
            res.json(result)
        } 
        else
            res.status(404).send('not found')
    },
    // 1 is error
    // 2 not log in
    // 3 is good
    async addShelter(req,res,next){
        console.log(req.body.lng);
        console.log(req.body.lat);
        console.log(req.body.token);



        if(  isNaN(req.body.lng)==true ||   isNaN(req.body.lng)==true  ){

            res.json('4')
        }
        else   if(typeof req.body.lng=="undefined" || typeof req.body.lat=="undefined"  )
        {
            res.json('1');
        }
        else
        {
            console.log(req.body.token);

           
             client.verifyIdToken({
                    idToken:req.body.token,
                    audience:'895506418876-jktf38vji4h0e54getonv95ue8p48bn1.apps.googleusercontent.com'
                })
              .then((response)=>{
                    console.log(response);
                    citizen.find({id:response.payload.email})
                    .then((mongoRes)=>{
                        if(mongoRes==0){
                            console.log('000000');
                            var newCitizen=new citizen({
                                name:response.payload.name,
                                id:response.payload.email
                            })
                            newCitizen.save()
                            .then((newCitizenResponse)=>{
                                console.log(newCitizenResponse);
                                
                                shelter.find({})
                                .then((shelterResponse)=>{
                                    if(shelterResponse)
                                    {
                                        var shelterCount=0;
                                        var shelterNumber;
                                        for(let i=0;i<shelterResponse.length;i++)
                                        {
                                            shelterNUmber=parseInt(shelterResponse[i].shelterId);
                                            if(shelterNumber>shelterCount)
                                                shelterCount=shelterNUmber;
                                        }
                                        shelterCount = shelterCount+1;
                                        let newShelter = new shelter({
                                            shelterId:shelterCount,
                                            citizenId:response.payload.email,
                                            lat:req.body.lat,
                                            lng:req.body.lng,
                                            picturesUrl:[]
                                        });
                                        newShelter.save((err)=>{
                                            if(err)
                                                res.json(`1`);
                                            else
                                                res.json('3') //you add new shlter
                                        }) 
                                    }else{
                                        res.json('1');


                                    }


                                },(error)=>{
                                    console.log(error);
                                    res.json('1');


                                })


                                
                            },(error)=>{
                                console.log(error);
                                res.json(`1`);
                            })   

                            
                            
                        }else{
                            shelter.find({})
                                .then((shelterResponse)=>{
                                    if(shelterResponse)
                                    {
                                        var shelterCount=0;
                                        var shelterNumber;
                                        for(let i=0;i<shelterResponse.length;i++)
                                        {
                                            shelterNUmber=parseInt(shelterResponse[i].shelterId);
                                            if(shelterNumber>shelterCount)
                                                shelterCount=shelterNUmber;
                                        }
                                        shelterCount = shelterCount+1;
                                        let newShelter = new shelter({
                                            shelterId:shelterCount,
                                            citizenId:response.payload.email,
                                            lat:req.body.lat,
                                            lng:req.body.lng,
                                            picturesUrl:[]
                                        });
                                        newShelter.save((err)=>{
                                            if(err)
                                                res.json(`1`);
                                            else
                                                res.json('2') // you add new shlter
                                        }) 
                                    }else{
                                        res.json('1');


                                    }


                                },(error)=>{
                                    console.log(error);
                                    res.json('1');


                                })


                            
                        }
                        
                    },(error)=>{
                        console.log(error);
                        res.json('1');


                    })


              },(error)=>{
                console.log(error);
                res.json('3'); // you are not log on google

              })
         }
          
            

        

    
    },

//find shelters around
   
    // 1 is error
    // 2 not log in
    // 3 is good

    async findCloseShelters(req,res,next){
       
       console.log('here');
        console.log(req.query.lat);
        console.log(req.query.lng);

        if(  isNaN(req.body.lng)==true ||   isNaN(req.body.lng)==true  ){

            res.json('4')
        }
        else if(((typeof req.body.lat)=="undefined") || ((typeof req.body.lng)=="undefined"))
        {
            res.json('1')
        }
        else{
            console.log(req.body.token);
            console.log('aaaaa');
           
             client.verifyIdToken({
                    idToken:req.body.token,
                    audience:'895506418876-jktf38vji4h0e54getonv95ue8p48bn1.apps.googleusercontent.com'
                })
             .then((googleResponse)=>{
              

                  shelter.find({})
                    .then((shelterResponse)=>{
                        console.log(shelterResponse);
                        console.log(shelterResponse.length)

                       


                        var htmlstr="";
                        htmlstr=`<!DOCTYPE html>
                        <html>
                        <head>
                            <title>Simple Map</title>
                            <meta name="viewport" content="initial-scale=1.0">
                            <meta charset="utf-8">
                            <style>
                            /* Always set the map height explicitly to define the size of the div
                            * element that contains the map. */
                            #map {
                                height: 100%;
                            }
                            /* Optional: Makes the sample page fill the window. */
                            html, body {
                                height: 100%;
                                margin: 0;
                                padding: 0;
                            }
                            </style>
                        </head>
                        <body>
                            <div id="map"></div>
                            <script>`;
                            htmlstr+=`
                            function initMap() {
                                        var myLatLng = {lat: `;
                                        
                            htmlstr+=   req.body.lat ;
    
                            htmlstr+=` , lng: `;
                            
                            htmlstr+=req.body.lng;
    
                            htmlstr+=`};
                                        var map = new google.maps.Map(document.getElementById('map'), {
                                            zoom: 16,
                                        center: myLatLng
                                    });`;

                                    htmlstr+=` var marker = new google.maps.Marker({   position: {lat: `;  
                                    htmlstr+= req.body.lat ; 
                                    htmlstr+=`, lng: ` ;
                                    htmlstr+=req.body.lng;
                                    htmlstr+=`}, map: map, title: 'me'});`;       
                       
                            for(let i=0;i<shelterResponse.length;i++)
                            {
                                htmlstr+=` var marker = new google.maps.Marker({   position: {lat: `;  
                                htmlstr+= shelterResponse[i].lat ; 
                                htmlstr+=`, lng: ` ;
                                htmlstr+=shelterResponse[i].lng;
                                htmlstr+=`}, map: map, title: 'shelter'});`;
                            }
   
                        htmlstr+=   ` }`;



                        htmlstr+= `</script>  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOVK2lJ5zDy8NLQm2CAfvcLbLs9ko0wIY&callback=initMap" async defer></script> </body> </html>`;
    
        


                            console.log(htmlstr);
                        res.json(htmlstr);

                    },(error)=>{
                        console.log(error);
                        res.json(`1`);

                    })

             },(error)=>{

                console.log(error);
                res.json('2');


             })   
        }

    },

// update hospitality (insert the searching people  and updating the remain place)
    async updateHospitality(req,res,next){

        if(typeof req.body.familyHeadId=="undefined" || typeof req.body.houseId=="undefined" )
        {
            res.json('family head id or house id is missing');
        }
        else
        {
            const hospitalityResult=await hospitality.find({houseId:req.body.houseId});

            if(hospitalityResult)
            {
                if(hospitalityResult.length<=0)
                {
                    res.json('house id was not found')
                }
                else
                {
                    const citizenResult=await citizen.find({id:req.body.familyHeadId})

                    if(citizenResult)
                    {
                        if(citizenResult.length<=0)
                        {
                            res.json('family head id was not found')
                        }
                        else
                        {
                            var numberOfPeople=0;
                            if(typeof req.body.peopleArray=="object")
                            {
                                numberOfPeople=req.body.peopleArray.length;
                            }
                            numberOfPeople=numberOfPeople+1;
                            console.log(hospitalityResult[0].remain);
                            console.log(numberOfPeople);
                            if((hospitalityResult[0].remain-numberOfPeople)<0)
                            {
                                res.json('could not add more people')
                            }
                            else
                            {   
                                var newRemain=hospitalityResult[0].remain-numberOfPeople;
                                console.log(newRemain);
                                var newSearchingPeople=hospitalityResult[0].searchingPeople;
                                newSearchingPeople.push({id:citizenResult[0].id,name:citizenResult[0].name});
                                if(typeof req.body.peopleArray=="object")
                                {
                                    
                                     for(let i=0;i<req.body.peopleArray.length;i++)
                                        newSearchingPeople.push(req.body.peopleArray[i]);
                                }



                                var conditions={houseId:req.body.houseId},
                                    update={$set:{remain:newRemain,searchingPeople:newSearchingPeople}},
                                    opts={multi:true}
                                
                                hospitality.update(conditions,update,opts,(err)=>{
                                    if(err)
                                    {
                                        res.json(`update error: ${err}`)
                                    }
                                    else
                                    {
                                        res.json('adding people to hospitality succeed')
                                    }
                                });
                            }
                        }
                    }
                    else
                    {
                        res.json('could not find citizen')
                    }
                }
            }
            else
            {
                res.json('could not find hospitality')
            }
        }
    },
    
//add new hospitality
    async addHospitality(req,res,next){

        if(typeof req.body.ownerID=="undefined" || typeof req.body.capacity=="undefined" || typeof req.body.city=="undefined" )
        {
            res.json('id or capacity or city is missing');


        }
        else
        {
            const citizenResult=await citizen.find({id:req.body.ownerID});

                if(citizenResult)
                {
                    if(citizenResult.length<=0)
                    {
                        res.json('id was not found.. please try again')
                    }
                    else
                    {
                        const hospitalityResult=await hospitality.find({})

                        if(hospitalityResult)
                        {
                            var hospitalityCount=0;    
                            var hospitalityNumber=0;
                        
                            for(let i=0;i<hospitalityResult.length;i++)
                            {
                                hospitalityNumber= hospitalityResult[i].houseId;
                                
                                if(hospitalityCount<hospitalityNumber)
                                    hospitalityCount=hospitalityNumber;
                            }
                            hospitalityCount=hospitalityCount+1;

                            var livingPepole=[];
                            livingPepole.push({id:req.body.ownerID,name:citizenResult[0].name});
                           
                            if(typeof req.body.hostingPeople=="object")
                            {
                                for(let i=0;i<req.body.hostingPeople.length;i++)
                                {
                                    livingPepole.push(req.body.hostingPeople[i]);
                                }
                            }
                            
                            var newHospitality=new hospitality({
                                ownerID:req.body.ownerID,
                                houseId:hospitalityCount,
                                capacity:req.body.capacity,
                                remain:req.body.capacity,
                                searchingPeople:[],
                                city:req.body.city,
                                pictureUrl:[],
                                hostingPeople:livingPepole
                            });

                            newHospitality.save((err)=>{
                            if(err)
                            {
                                res.json(`there was a problem with save: ${err}`);
                            }
                            else
                            {
                                res.json('new hospitality added successfully') 
                            }
                        })
                    }
                    else
                    {   
                        res.json('could not find hospitality')
                    }
                }
            }
            else
            {
                 res.json('could not find citizen')
            }
        }
    }
}