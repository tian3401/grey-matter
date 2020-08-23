export default class EmojiLibrary {
  library: string[];
  constructor(lib: string[]) {
    this.library = lib;
  }

  fetchFromEmojiLibrary() {
    const i = Math.floor(Math.random()*this.library.length)
    const randomEmoji = this.library[i];
    return randomEmoji; 
  }
};