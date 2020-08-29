import EmojiLibrary from "./EmojiLibrary.ts";

export default class ProblemGenerator {
  name: string; 
  type: string;
  correct: number;
  incorrect: number;
  positiveEmoji: EmojiLibrary;
  negativeEmoji: EmojiLibrary;
  constructor(name: string, type: string, positiveEmoji: EmojiLibrary, negativeEmoji: EmojiLibrary) {
    this.name = name;
    this.type = type; 
    this.correct = 0;
    this.incorrect = 0; 
    this.positiveEmoji = positiveEmoji;
    this.negativeEmoji = negativeEmoji;
  }

  generateProblem() {
    return 
  }
}