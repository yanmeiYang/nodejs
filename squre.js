var i = 0.1;
var y = 0.1;
var l = 50;
var test = function(){
  for(i;i<l;i++){
    for(y;y<l;y++){
      console.log("i="+i+"y="+y);
       if((i*i-y*y)==23){
         console.log("i="+i);
         console.log("y="+y);
       }
   }
  console.log("没有"+i);
  }
console.log("test");
}
exports.test = test
