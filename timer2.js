const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

function timer(time) {
  process.stdout.write(`Setting a timer for ${time} seconds.`);
  setTimeout(() =>{process.stdout.write('Beep!\n')
    }, time * 1000)
  }
  
  stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit(console.log("\nThanks for using me ciao!"));
  }
  if (key === '\u0062') {
  process.stdout.write('Beep!');
  }
  if (key >= 0 && key <= 9) {
    timer(key);
  }
});


 /* take user input
 if user inputs b process.stdout.write "beep" imediately
 if user inputs a set of numbers immediately print "Setting alarms for times"
 print beep at the value of numbers
 exit at user input ctrl +c
 */

