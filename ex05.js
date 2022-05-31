console.log(global===this);
console.log(module===this);
console.log(module.exports===this);

this.hi = function(){

    console.log("oii!!");

}