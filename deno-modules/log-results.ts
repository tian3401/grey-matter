import getDate from "./get-date.ts"
import {Stats} from "../constants/stats.ts"

async function logResults(stats: Stats) {
  const { correct, incorrect, accuracy} = stats;
  const encoder = new TextEncoder(); 
  const decoder = new TextDecoder();

  const today = getDate(); 
  const result = `${today}: correct: ${correct} incorrect: ${incorrect} accuracy: ${accuracy.toFixed()}%,`;
  
  console.log(`\n🐙 Here are your results for today:\n\n🐙 ${result}\n`)

  //read the log first 
  const content = await Deno.readFile('log.txt')
  const history = decoder.decode(content);
  //combine and rewrite the log
  const combinedResult = history == '' ? result : history.concat(`\n${result}`);
  const encodedResult = encoder.encode(combinedResult);

  console.log('\n🐙 Writing your results to the log...\n');
  await Deno.writeFile("log.txt", encodedResult);

  console.log('\n🐙 Done!\n')
};

export default logResults;