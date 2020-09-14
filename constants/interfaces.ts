interface Stats {
  correct: number,
  incorrect: number,
  accuracy: number
};

interface Options {
  problem_type: string,
  parameters: Object
};


export {
  Stats,
  Options
};

