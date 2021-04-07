function spinWords(word){
    return word.split(' ').map(el => (el.length < 5) ? el : el.split('').reverse().join('')).join(' ');
   }