var rand=random (1;100);

 if(rand<50) {
   console.log("jes suis nul");
 }

     else {
       console.log("je suis bon");
     }

        function random (min, max) {
          return Math.floor(min + (Math.random() + Math.floor(max-min)));
        }
