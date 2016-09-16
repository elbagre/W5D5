// class Clock {
//   constructor() {
//     const today = new Date(Date.now());
//
//     this.hours = today.getHours();
//     this.minutes = today.getMinutes();
//     this.seconds = today.getSeconds();
//
//     this.printTime();
//     window.setInterval(this._tick.bind(this), 1000);
//   }
//
//   printTime() {
//     // Format the time in HH:MM:SS
//     console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
//     // Use console.log to print it.
//   }
//
//   _tick() {
//     // 1. Increment the time by one second.
//
//     if (this.hours === 23 && this.minutes === 59 && this.seconds === 59){
//       this.hours = 0;
//       this.minutes = 0;
//       this.seconds = 0;
//     } else if (this.minutes === 59 && this.seconds === 59) {
//       this.hours += 1;
//       this.minutes = 0;
//       this.seconds = 0;
//     } else if (this.seconds === 59) {
//       this.minutes += 1;
//       this.seconds = 0;
//     } else {
//       this.seconds += 1;
//     }
//     this.printTime();
//   }
// }
//
// // const clock = new Clock();


// const readline = require('readline');
//
// reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

//   input: process.stdin,
//   output: process.stdout
// });
//
// function addNumbers(sum, numsLeft, completionCallback){
//   if (numsLeft > 0) {
//     reader.question("Give me a number", function (number){
//       const cur_number = parseInt(number);
//       sum += cur_number;
//       console.log(sum);
//       addNumbers(sum, numsLeft - 1, completionCallback);
//     });
//   } else {
//     completionCallback(sum);
//   }
// }
//
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// function askIfGreaterThan(el1, el2, callback) {
//   reader.question(`${el1} is bigger than ${el2}`, function(answer) {
//     if (answer === "true" || answer === "yes") callback (true);
//     else callback (false);
//   });
// }
//
// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
//   if (i == arr.length - 1) outerBubbleSortLoop(madeAnySwaps);
//   else {
//     askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
//       if (isGreaterThan) {
//         const temp_num = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i+1] = temp_num;
//         madeAnySwaps = true;
//       }
//       innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
//     });
//   }
// }
//
// function absurdBubbleSort(arr, sortCompletionCallback) {
//   function outerBubbleSortLoop(madeAnySwaps) {
//     if (madeAnySwaps === false ) {
//       sortCompletionCallback(arr);
//     } else {
//       madeAnySwaps = false;
//       innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
//     }
//   }
//   outerBubbleSortLoop(true);
// }
//
// function sortCompletionCallback(arr) {
//   console.log(arr);
//   reader.close();
//   }

// absurdBubbleSort([2,3,7,4,5,1], sortCompletionCallback);

Function.prototype.myBind = function (context) {
  return (arg) => this.apply(context, args);
};


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

var turnOn = function() {
   console.log("Turning on " + this.name);
   console.log(arguments);
};

var lamp = new Lamp();

// turnOn.myBind(lamp);

// const boundTurnOn = turnOn.bind(lamp);
var myBoundTurnOn = turnOn.myBind(lamp);
//
// boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn("one", "two", "three"); // should say "Turning on a lamp"
































//end of doc
