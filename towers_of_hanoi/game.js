

const readline = require('readline');

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class HanoiGame {
  constructor() {
    this.stacks = [[3,2,1],[],[]];
  }

  promptMove (callback) {
    this.print();
    reader.question("from stack:", function(a1){
      reader.question("to stack:", function(a2){
        const fromStack = parseInt(a1);
        const toStack = parseInt(a2);

        callback(fromStack, toStack);
      });
    });
  }

  validMove (fromStack, toStack) {
    if (fromStack < 0 || fromStack > 2 || toStack < 0 || toStack > 2)
     return false;

    const to = this.stacks[toStack];
    const from = this.stacks[fromStack];

    if (to[to.length - 1] < from[from.length - 1]) return false;
    else if (from.length === 0) return false;

    else return true;
  }

  move(fromStack, toStack) {
    if (this.validMove(fromStack, toStack)) {
      this.stacks[toStack].push(this.stacks.toStack.pop);
      return true;
    } else return false;
  }

  print(){
    JSON.stringify(this.stacks);
  }

  isWon(){
  if (this.stacks[1].length === 3 || this.stacks[2].length === 3)
    return true;
  else return false;
  }

  run(completionCallback){
    var prompt = this.promptMove(this.move);
    console.log(prompt);
    if (prompt === false) {
      console.log("Invalid Move");
    } else if (!this.isWon()) {
      console.log("buddy");
      reader.close();
      // this.run(completionCallback);
    } else completionCallback();
  }

  completionCallback(){
    console.log("Game over");
    this.print();
    reader.close();
  }

}

let boom = new HanoiGame();
boom.run(boom.completionCallback);
