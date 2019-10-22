const timers = (process.argv.slice(2));
console.log(timers);
for (let i = 0; i < timers.length; i++ ){
  if (timers[i] < 0 || isNaN(parseInt(timers[i]))) {

  }
  else {
    setTimeout(() =>{process.stdout.write('Beep!\n')
  }, timers[i] * 1000)
  }
}


/* Take array from command line (process. args)
trim the array from first two elements
reject non valid entries
.sort array
write alarm function that beeps using process.stdout.write at the value of each array element
run loop through array calling Alarm function at each */