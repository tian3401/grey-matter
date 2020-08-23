import {Stats} from "./constants/stats.ts"

async function main(): Promise<void> {
  let repeat: boolean = true; 
  let countCorrect = 0, countIncorrect = 0; 
  
  console.log('\nWelcome to Grey Matter 🧠\n')

  while(repeat) {
    let power = Math.ceil(Math.random()*3);
    let num1 = Math.ceil(Math.random()*10**power);
    let num2: number = Math.ceil(Math.random()*10**power);
    const answer: number = num1 * num2; 

    const question = `${num1} * ${num2} ?  `;

    let input = await prompt(question);

    if(input.toLowerCase() == 'quit') {
      break;
    }
  
    if(input == String(answer)) {
      countCorrect++; 
      console.log(`\nCorrect ᕙ(\`▿´)ᕗ!\n${answer}\n`)
    } else {
      countIncorrect++;
      console.log(`\nIncorrect (⊙.⊙(◉̃_᷅◉)⊙.⊙)\nanswer: ${answer}\n`)
    }
  }
  let accuracy = countCorrect + countIncorrect !== 0 ? ((countCorrect/(countCorrect + countIncorrect))*100) : 0; 
  let stats: Stats = {correct: countCorrect, incorrect: countIncorrect, accuracy: accuracy};
  logResults(stats);
};

async function prompt(message: string = "") {
  const buffer = new Uint8Array(1024);
  await Deno.stdout.write(new TextEncoder().encode(message));
  const number = <number>await Deno.stdin.read(buffer); 
  return new TextDecoder().decode(buffer.subarray(0, number)).trim();
};

function getDate() {
  const today = new Date();
  const date = today.getFullYear()+'-'+today.getMonth()+'-'+today.getDay();
  return date; 
}


async function logResults(stats: Stats) {
  const { correct, incorrect, accuracy} = stats;
  const encoder = new TextEncoder(); 
  const decoder = new TextDecoder();

  const today = getDate(); 
  const result = `${today}: correct: ${correct} incorrect: ${incorrect} accuracy: ${accuracy.toFixed()}%`;
  

  console.log(`\nHere are your results for today:\n${result}\n`)

  //read the log first 
  const content = await Deno.readFile('log.txt')
  const history = decoder.decode(content);
  //combine and rewrite the log
  const combinedResult = history.concat(`\n${result}`);
  const encodedResult = encoder.encode(combinedResult);

  console.log('\nWriting your results to the log...\n');
  await Deno.writeFile("log.txt", encodedResult);
  console.log('\nDone!\n')
}

main(); 