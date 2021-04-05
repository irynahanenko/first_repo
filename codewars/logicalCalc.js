// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.


function logicalCalc(array, op){
    if (op === "AND") {
       return array.reduce((acc,el) => acc && el)
     }
      if (op === "OR") {
       return array.reduce((acc,el) => acc || el)
     }
      if (op === "XOR") {
       return array.reduce((acc,el) => acc !== el)
     }
    }