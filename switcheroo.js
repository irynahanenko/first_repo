function switcheroo(x){

    return x.split('').map(el => (el === 'a') ? 'b' : (el === 'b') ? 'a' : el).join('');
  
  }