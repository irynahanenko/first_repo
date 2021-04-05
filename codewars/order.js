// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).


function order(words){
    let arr = [];
    let newWords = words.split(' ');
    for(let i = 1; i <= newWords.length;i++){
      arr.push(newWords.find(el => el.includes(String(i))));
    }
    return arr.join(" ");
   }