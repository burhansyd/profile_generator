const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favorite? ", (answer4) => {
        rl.question("What's your favorite thing to eat for that meal? ", (answer5) => {
          rl.question("Which is your absolute favorite sport? ", (answer6) => {
            rl.question("what is your superpower? ", (answer7) => {
              console.log(`Hi I am ${answer1}! I like ${answer2}, during which I listen to ${answer3}. My favorite meal is ${answer4}, and I like eating ${answer5}. My favorite sport is ${answer6} and I wish I could play it with the superpower of ${answer7}!`);
              rl.close();
            })
          })
        })
      })
    })
  })
});