import EmojiLibrary from "./EmojiLibrary.ts";

export default class ProblemGenerator {
  name: string; 
  type: string;
  positiveEmoji: EmojiLibrary;
  negativeEmoji: EmojiLibrary;
  constructor(name: string, type: string, positiveEmoji: EmojiLibrary, negativeEmoji: EmojiLibrary) {
    this.name = name;
    this.type = type; 
    this.positiveEmoji = positiveEmoji;
    this.negativeEmoji = negativeEmoji;
  }

  generateProblem() {
    return 
  }
}