import {Stats} from "./constants/stats.ts"
import logResults from "./deno-modules/log-results.ts"
import prompt from "./deno-modules/prompt.ts"
import EmojiLibrary from "./deno-modules/EmojiLibrary.ts"

async function main(): Promise<void> {
  let repeat: boolean = true; 
  let countCorrect = 0, countIncorrect = 0; 
  
  console.log('\nWelcome to Grey Matter 🧠\n')

  const positiveEmojiLibrary = new EmojiLibrary(['(>‿◠)✌','٩(˘◡˘)۶','(͠≖ ͜ʖ͠≖)👌','ᕙ(`▿´)ᕗ']);

  const negativeEmojiLibrary = new EmojiLibrary(['( ˘︹˘ )','( ◡́.◡̀)(^◡^ )','( ͡❛ 👅 ͡❛)','(⊙.⊙(◉̃_᷅◉)⊙.⊙)']);

  while(repeat) {
    let power = Math.ceil(Math.random()*3);
    let num1 = Math.ceil(Math.random()*10**power);
    let num2: number = Math.ceil(Math.random()*10**power);
    const answer: number = num1 * num2; 

    const question = `${num1} * ${num2} ?  `;

    let positiveEmoji = positiveEmojiLibrary.fetchFromEmojiLibrary();

    let negativeEmoji = negativeEmojiLibrary.fetchFromEmojiLibrary();

    let input = await prompt(question);

    if(input.toLowerCase() == 'quit') {
      break;
    }
  
    if(input == String(answer)) {
      countCorrect++; 
      console.log(`\nCorrect!!! ${positiveEmoji}\n${answer}\n`)
    } else {
      countIncorrect++;
      console.log(`\nIncorrect ${negativeEmoji}\nanswer: ${answer}\n`)
    }
  }
  let accuracy = countCorrect + countIncorrect !== 0 ? ((countCorrect/(countCorrect + countIncorrect))*100) : 0; 
  let stats: Stats = {correct: countCorrect, incorrect: countIncorrect, accuracy: accuracy};
  logResults(stats);
};

main(); 