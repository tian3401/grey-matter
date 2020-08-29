import prompt from "../deno-modules/prompt.ts"
import ProblemGenerator from "./ProblemGenerator.ts";
import EmojiLibrary from "./EmojiLibrary.ts";

class MentalMath extends ProblemGenerator {
  repeat: boolean;
  correct: number; 
  incorrect: number; 
  constructor(name: string, type: string, positiveEmoji: EmojiLibrary, negativeEmoji: EmojiLibrary) {
    super(name, type, positiveEmoji, negativeEmoji);
    this.repeat = true; 
    this.correct = 0;
    this.incorrect = 0;
  }

  async generateProblem() {

    while(this.repeat) {
      let power = Math.ceil(Math.random()*3);
      let num1 = Math.ceil(Math.random()*10**power);
      let num2: number = Math.ceil(Math.random()*10**power);
      const answer: number = num1 * num2; 
      const question =`👉 ${num1} * ${num2} ? `;
  
      let positiveEmoji = this.positiveEmoji.fetchFromEmojiLibrary();
      let negativeEmoji = this.negativeEmoji.fetchFromEmojiLibrary();
  
      let input = await prompt(question);
  
      if(input.toLowerCase() == 'quit') {
        console.log('\n\n🐙 Great job on growing your grey matter.\n')
        break;
      }
      else if(input == String(answer)) {
        this.correct++; 
        console.log(`\nCorrect!!! ${positiveEmoji}\nanswer: ${answer}\n`)
      } else {
        this.incorrect++;
        console.log(`\nIncorrect ${negativeEmoji}\nanswer: ${answer}\n`)
      }
    }
  }
}

export {
  MentalMath
}