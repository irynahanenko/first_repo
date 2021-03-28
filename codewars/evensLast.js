// Given a sequence of integers, return the of all the integers that have an even index, multiplied by the integer at the last index.
// If the sequence is empty, you should return 0


function evenLast(numbers) {
    return numbers.length > 0? numbers.reduce((acc,el,i) => (i % 2 === 0)? acc + el : acc,0) * numbers[numbers.length -1] : 0;
  }
