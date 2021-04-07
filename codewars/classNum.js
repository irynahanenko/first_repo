class Numbers{
    constructor(a){
      this.x = a;
    }
    get abs(){
      return Math.abs(this.x);
    }
    get reverse(){
      return -this.x;
    }
    get round(){
      return Math.round(this.x);//added a comment
    }
    get floor(){
      return Math.floor(this.x);
    }
    get ceil(){
      return Math.ceil(this.x);
    }
    toFixed(a){
      return +this.x.toFixed(a);
    }
    toNumber(){
      this.x = Number(this.x);
    }
  }
  let num = new Numbers('12345');
  num.toNumber();
  console.log(num.x);
  console.log(num.reverse);
  console.log(num.round);
  console.log(num.floor);
  console.log(num.ceil);
  console.log(num.toFixed(2));