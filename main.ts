import {Select} from 'https://deno.land/x/cliffy/prompt/mod.ts';
import {Stats} from "./constants/interfaces.ts";
import logResults from "./deno-modules/log-results.ts";
import EmojiLibrary from "./deno-modules/EmojiLibrary.ts";
import {MentalMath, KoreanVocabulary} from "./deno-modules/Problems.ts";

async function main(): Promise<void> {
  const positiveEmojiLibrary = new EmojiLibrary(['(>‿◠)✌','٩(˘◡˘)۶','(͠≖ ͜ʖ͠≖)👌','ᕙ(`▿´)ᕗ']);
  const negativeEmojiLibrary = new EmojiLibrary(['( ˘︹˘ )','( ◡́.◡̀)(^◡^ )','( ͡❛ 👅 ͡❛)','(⊙.⊙(◉̃_᷅◉)⊙.⊙)']);

  console.log('\nWelcome to Grey Matter 🧠\n')
  console.log('Let\'s get your brain roll\'n! 🐙\n');

  const selector = await Select.prompt( {
    message: `What do you want to learn?`,
    options: [
      {name: 'Mental Math', value: 'Mental Math package is loading...'},
      {name: 'Korean', value: 'Korean package is loading...'}
    ]
  });

  let countCorrect,
      countIncorrect; 

  switch(selector) {
    case 'Mental Math package is loading...':
      const mentalMathProblems = new MentalMath('mental-math','math',positiveEmojiLibrary,negativeEmojiLibrary);
      await mentalMathProblems.generateProblem(); 

      countCorrect = mentalMathProblems.correct;
      countIncorrect = mentalMathProblems.incorrect;

      writeStat(countCorrect, countIncorrect);
      break;

    case 'Korean package is loading...':
      const wordMap = new Map([['것','thing,object'],['하다', 'to do']]); 
      const koreanProblems = new KoreanVocabulary('matty\'s korean','language',positiveEmojiLibrary,negativeEmojiLibrary,wordMap);
      await koreanProblems.generateProblem();

      countCorrect = koreanProblems.correct;
      countIncorrect = koreanProblems.incorrect;

      writeStat(countCorrect, countIncorrect);
      break;

    default: 
      console.log('sorry I don\'t recognize that package');
  } 

  function writeStat(countCorrect: number, countIncorrect: number) {
    let accuracy = countCorrect + countIncorrect !== 0 ? ((countCorrect/(countCorrect + countIncorrect))*100) : 0; 
    let stats: Stats = {correct: countCorrect, incorrect: countIncorrect, accuracy: accuracy};
    return logResults(stats);
  }


};

main(); 