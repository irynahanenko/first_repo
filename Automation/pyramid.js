function pyramid(balls) {
    if (balls == 1) return 1;
    else {
      let levels = 0;
      let level = 1;
      do{
          if( balls - level >= 0) levels++;
          balls = balls - level;
          level++;   
      } 
      while (balls > 0)
     return levels; 
    }
  }