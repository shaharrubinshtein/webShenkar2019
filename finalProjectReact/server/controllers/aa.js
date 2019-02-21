

AIzaSyBOVK2lJ5zDy8NLQm2CAfvcLbLs9ko0wIY

else if(result)
{
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
                    
        htmlstr+=   req.query.lat ;

        htmlstr+=` , lng: `;
        
        htmlstr+=req.query.lng;

        htmlstr+=`};
                    var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 16,
                    center: myLatLng
                });`;
                htmlstr+=` var marker = new google.maps.Marker({   position: {lat: `;  
                htmlstr+= req.query.lat ; 
                htmlstr+=`, lng: ` ;
                htmlstr+=req.query.lng;
                htmlstr+=`}, map: map, title: 'me'});`;       
    
        for(let i=0;i<result.length;i++)
        {
            htmlstr+=` var marker = new google.maps.Marker({   position: {lat: `;  
            htmlstr+= result[i].lat ; 
            htmlstr+=`, lng: ` ;
            htmlstr+=result[i].lng;
            htmlstr+=`}, map: map, title: 'shelter'});`;
        }

    htmlstr+=   ` }`;
    htmlstr+= `</script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEk19blgki_kfh6LPgQVocoqRfTKYsMXs&callback=initMap"
        async defer></script>
      </body>
    </html>`;
    res.send(htmlstr)
}
else
{
    res.status(404).send('not found')
}


shelter.find({})
                    .then((shelterResponse)=>{
                        console.log(shelterResponse);
                        console.log(shelterResponse.length)
                        res.json(shelterResponse);

                    },(error)=>{
                        console.log(error);
                        res.json(`1`);

                    })

































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
                                    
                        htmlstr+=   req.query.lat ;

                        htmlstr+=` , lng: `;
                        
                        htmlstr+=req.query.lng;

                        htmlstr+=`};
                                    var map = new google.maps.Map(document.getElementById('map'), {
                                        zoom: 16,
                                    center: myLatLng
                                });`;
                                htmlstr+=` var marker = new google.maps.Marker({   position: {lat: `;  
                                htmlstr+= req.query.lat ; 
                                htmlstr+=`, lng: ` ;
                                htmlstr+=req.query.lng;
                                htmlstr+=`}, map: map, title: 'me'});`;       
                    
                        for(let i=0;i<result.length;i++)
                        {
                            htmlstr+=` var marker = new google.maps.Marker({   position: {lat: `;  
                            htmlstr+= result[i].lat ; 
                            htmlstr+=`, lng: ` ;
                            htmlstr+=result[i].lng;
                            htmlstr+=`}, map: map, title: 'shelter'});`;
                        }

                    htmlstr+=   ` }`;
                    htmlstr+= `</script>
                        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEk19blgki_kfh6LPgQVocoqRfTKYsMXs&callback=initMap"
                        async defer></script>
                    </body>
                    </html>`;

