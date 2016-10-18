const process = require('process');
var board = "  1 2 3 \na _|_|_ \nb _|_|_ \nc  | | ";
var player1;
var player2;

var input = (cb) => {
  process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
    if (chunk !== null) {
      cb(`${chunk}`);
    }
  });
  process.stdin.on('end', () => {
    process.stdout.write('end');
  });
}

var intro = (player) => new Promise((resolve, reject) => {
  console.log(player, ' what is your name?');
  input((chunk) => resolve(chunk));
})

var game = () => {
  var moves = 0;
  var player1;
  var player2;
  intro('player one')
    .then(name => {
      player1 = name;
      console.log('welcome, ', name);
    })
    .then(() => {
          intro('player two')
          .then(name) => {
            player2 = name;
            console.log('welcome, ',name);
          }
        });
 };

game();
