async function prompt(message: string = "") {
  const buffer = new Uint8Array(1024);
  await Deno.stdout.write(new TextEncoder().encode(message));
  const number = <number>await Deno.stdin.read(buffer); 
  return new TextDecoder().decode(buffer.subarray(0, number)).trim();
};

export default prompt; 