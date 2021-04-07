let obj = {
    arr : [],
    init(array){
      this.arr = [...array];
      
    },
    print(){
    console.log(...this.arr);
   },
    sum(){
      return this.arr.reduce((acc,el) => acc + el,0);
    },
    min(){
      return Math.min(...this.arr);
    },
  }
  
  
  obj.init([1,2,3]);
  // console.log(obj.arr);
  obj.print();
  console.log(obj.sum());
  console.log(obj.min());