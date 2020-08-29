import {Stats} from "./constants/interfaces.ts";
import logResults from "./deno-modules/log-results.ts";
import EmojiLibrary from "./deno-modules/EmojiLibrary.ts";
import {MentalMath, KoreanVocabulary} from "./deno-modules/Problems.ts";

async function main(): Promise<void> {
  const positiveEmojiLibrary = new EmojiLibrary(['(>‿◠)✌','٩(˘◡˘)۶','(͠≖ ͜ʖ͠≖)👌','ᕙ(`▿´)ᕗ']);
  const negativeEmojiLibrary = new EmojiLibrary(['( ˘︹˘ )','( ◡́.◡̀)(^◡^ )','( ͡❛ 👅 ͡❛)','(⊙.⊙(◉̃_᷅◉)⊙.⊙)']);

  console.log('\nWelcome to Grey Matter 🧠\n')
  console.log('Let\'s get your brain roll\'n! 🐙\n');

  const mentalMathProblems = new MentalMath('mental-math','math',positiveEmojiLibrary,negativeEmojiLibrary);

  const wordMap = new Map([['것','thing,object'],['하다', 'to do']]); 
  const koreanProblems = new KoreanVocabulary('matty\'s korean','language',positiveEmojiLibrary,negativeEmojiLibrary,wordMap);

  // await mentalMathProblems.generateProblem(); 
  await koreanProblems.generateProblem();

  const countCorrect = mentalMathProblems.correct;
  const countIncorrect = mentalMathProblems.incorrect; 

  let accuracy = countCorrect + countIncorrect !== 0 ? ((countCorrect/(countCorrect + countIncorrect))*100) : 0; 
  let stats: Stats = {correct: countCorrect, incorrect: countIncorrect, accuracy: accuracy};
  logResults(stats);
};

main(); 