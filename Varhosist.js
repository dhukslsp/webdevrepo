// let counter = createCounter();
// function createCounter(){

// 	return {
// 		count:0,
// 		increment: function(){
// 			counter.count++;
// 			console.log(this);
// 		}
// 	}
// }

// counter.increment();
// counter.increment();
// var count = 0;
// function incrementCounter(counter){
// 	this.count ++;
// 	console.log(this);
// }

// incrementCounter();
// console.log(count);
"use Strict";
function useStrict(){
	return this;
}
console.log(useStrict());