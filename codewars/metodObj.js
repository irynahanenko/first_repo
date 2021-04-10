let obj = {
  arr : [],
  a : 0,
  b : 0,
   length(){
    return this.arr.length;
  },
  number(){
    return this.arr.filter(el => typeof(el)=== 'number');
  },
  last(){
    return this.arr[this.length()-1];
  },
  index(a){
    return this.arr.indexOf(a);
  },
  init(a,b){
  this.a = a;
  this.b = b;
},
  print(){
    console.log(this.a);
    console.log(this.b);
    console.log(this.arr);
  }
}
obj.arr.push(5,4,6);
obj.arr.push('hello','is','my','first')
console.log(obj.length());
console.log(obj.arr);
console.log(obj.number());
console.log(obj.last());
console.log(obj.index('hello'));