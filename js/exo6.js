var result=random(5,10);
  console.log("random = "+result);

     function random(min, max) {
        return Math.floor(min + (Math.random() * Math.floor(max - min)));
     }
