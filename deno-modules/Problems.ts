import prompt from "../deno-modules/prompt.ts"
import ProblemGenerator from "./ProblemGenerator.ts";
import EmojiLibrary from "./EmojiLibrary.ts";

class MentalMath extends ProblemGenerator {
  repeat: boolean;
  constructor(name: string, type: string, positiveEmoji: EmojiLibrary, negativeEmoji: EmojiLibrary) {
    super(name, type, positiveEmoji, negativeEmoji);
    this.repeat = true; 
  }

  async generateProblem() {

    while(this.repeat) {
      let power = Math.ceil(Math.random()*3);
      let num1 = Math.ceil(Math.random()*10**power);
      let num2: number = Math.ceil(Math.random()*10**power);
      const question =`👉 ${num1} * ${num2} ? `;
      const answer: number = num1 * num2; 
      
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

class KoreanVocabulary extends ProblemGenerator {
  vocabMap: Map<string,string>;
  repeat: boolean; 
  constructor(name: string, type: string, positiveEmoji: EmojiLibrary, negativeEmoji: EmojiLibrary, vocabMap: Map<string,string>) {
    super(name, type, positiveEmoji, negativeEmoji); 
    this.vocabMap = vocabMap; 
    this.repeat = true; 
  }

  async generateProblem() {
    const wordList: string[] = [];
    this.vocabMap.forEach((value, key) => {
      wordList.push(key);
    })
    while(this.repeat) {
      const randomNum = Math.floor(Math.random()*wordList.length);
      console.log(randomNum)
      const randomWord = wordList[randomNum];
      const question = `👉 ${randomWord} ? `;
      const answer = this.vocabMap.get(randomWord);

      let input = await prompt(question);

      let positiveEmoji = this.positiveEmoji.fetchFromEmojiLibrary();
      let negativeEmoji = this.negativeEmoji.fetchFromEmojiLibrary();

      if(input.toLowerCase() == 'quit') {
        console.log('\n\n🐙 Great job on growing your grey matter.\n See you again!')
        break;
      }
      else if(input.toLowerCase() == answer) {
        this.correct++;
        console.log(`\nCorrect! ${positiveEmoji}\n ${randomWord} means ${answer}.\n`)
      }
      else {
        this.incorrect++;
        console.log(`\nSorry that's incorrect. ${negativeEmoji}\n ${randomWord} means ${answer}\n`)
      }
    }
  }
}

export {
  MentalMath, 
  KoreanVocabulary
}