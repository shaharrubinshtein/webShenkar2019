window.onclick=function(){


  document.grtElementById("multi with GET").onclick = function sumWithPOST() {
      //    POST:
      $.post("http://localhost/service_calculator/dcs_1.php",
          {func:"sum",num1:10,num2:15,num3:20},
          function( data ) {
              $(".result").append(data.retVal+"<br>");
              console.log( "Return data: " + data.retVal);
          });
  };





}