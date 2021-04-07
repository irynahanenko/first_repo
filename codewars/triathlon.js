function iTri(s){
    const d = 140.6;
     if (s === 0){
       return 'Starting Line... Good Luck!';
     } 
     else if(s > 0 && s <= 2.4){
       return { 
       Swim : (d - s).toFixed(2) + ' to go!'
       }
     }
      else if(s > 2.4 && s <= 114.4 ){
       return { 
       Bike : (d - s).toFixed(2) +' to go!'
       }
     }
      else if(s > 114.4 && s <= 130.6){
       return { 
       Run : (d - s).toFixed(2) + ' to go!'
       }
     }
     else if(s > 130.6 && s < d){
       return { 
       Run : 'Nearly there!'
       }
     }
   else {
     return "You're done! Stop running!"
   }
   }