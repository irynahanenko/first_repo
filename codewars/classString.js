class String{
    constructor(a){
      this.x = a;
    }
    get length(){
      return this.x.length;
    }
    get index(){
      return this.x[2]
    }
    indexOf(a){
      return this.x.indexOf(a);
    }
    includes(a){
      return this.x.includes(a);
    }
    lastIndexOf(a){
      return this.x.lastIndexOf(a);
    }
     startsWith(a){
       return this.x.startsWith(a);
     }
    endsWith(a){
      return this.x.endsWith(a);
    }
     get toLowerCase(){
      return this.x.toLowerCase();
    }
    get toUpperCase(){
      return this.x.toUpperCase();
    }
    slice(a,b){
      return this.x.slice(a,b);
    }
    substring(a){
      return this.x.substring(a);
    }
    substr(a){
      return this.x.substr(a);
    }
    replace(a,b){
      return this.x.replace(a,b);
    }
    repeat(a){
      return this.x.repeat(a);
    }
    get trim(){
      return this.x.trim();
    }
     concat(a){
       return this.x.concat(a);
     }
  }
  let str = new String('I Love New York ')
  console.log(str.x);
  console.log(str.length);
  console.log(str.index);
  console.log(str.indexOf('N'));
  console.log(str.includes());
  console.log(str.lastIndexOf('o'));
  console.log(str.startsWith("I"));
  console.log(str.endsWith());
  console.log(str.toLowerCase);
  console.log(str.toUpperCase);
  console.log(str.slice(0, 6));
  console.log(str.substring(7));
  console.log(str.substr(10));
  console.log(str.replace('I Love', 'The Best City'));
  console.log(str.repeat(5));
  console.log(str.trim);
  console.log(str.concat('Manhattan My Favorite'));
  
  
  