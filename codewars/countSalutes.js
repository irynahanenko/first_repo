// There is a narrow hallway in which people can go right and left only. When two people meet in the hallway, by tradition they must salute each other. People move at the same speed left and right.

// Your task is to write a function that, given a string representation of people moving in the hallway, will count the number of salutes that will occur.
// Note: 2 salutes occur when people meet, one to the other and vice versa.

// Input

// People moving right will be represented by >; people moving left will be represented by <. An example input would be >--<--->->. The - character represents empty space, which you need not worry about.




function countSalutes(hallway) {
    let s = 0;
    let arr = hallway.split('');
    for(let i = 0; i < arr.length; i++){
      if(arr[i]==='>'){
        s+=arr.filter((el,j)=>el == '<' && j > i).length;
      }
    }
    return 2 * s;
  }
