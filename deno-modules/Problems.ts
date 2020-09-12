import prompt from "../deno-modules/prompt.ts"
import ProblemGenerator from "./ProblemGenerator.ts";
import EmojiLibrary from "./EmojiLibrary.ts";
import {Select} from 'https://deno.land/x/cliffy/prompt/mod.ts';

class MentalMath extends ProblemGenerator {
  repeat: boolean;
  constructor(name: string, type: string, positiveEmoji: EmojiLibrary, negativeEmoji: EmojiLibrary) {
    super(name, type, positiveEmoji, negativeEmoji);
    this.repeat = true; 
  }

  async generateProblem() {
      const digitSettings = await Select.prompt({
          message: 'Please select your digit settings',
          options: [
            {name: '2 by 2 digit problems', value: '[2,2]'},
            {name: '2 by 3 digit problems', value: '[2,3]'},
            {name: '3 by 3 digit problems', value: '[3,3]'}
          ]
        })

    while(this.repeat) {
      let numbers = this.setDigits(digitSettings);
      const question =`👉 ${numbers?.num1} * ${numbers?.num2} ? `;
      const num1 = numbers?.num1;
      const num2 = numbers?.num2;
      const answer   = Number(num1) * Number(num2);
      
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

  private getRandomInt(minimum: number, maximum: number) {
    let min = Math.ceil(minimum),
        max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private setDigits(selector: string) {

    switch(selector) {
      case '[2,2]': {
        let num1 = this.getRandomInt(10,99),
            num2 = this.getRandomInt(10,99);
        return {'num1': num1, 'num2': num2};
      }
      case '[2,3]':  {
        let num1 = this.getRandomInt(10,999),
            num2 = this.getRandomInt(10,99);
        return {'num1': num1, 'num2': num2};
      }
      case '[3,3]': {
        let num1 = this.getRandomInt(100,999),
            num2 = this.getRandomInt(100,999);
        return {'num1': num1, 'num2': num2};
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