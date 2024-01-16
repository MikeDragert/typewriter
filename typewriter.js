

const typeLine = function(sentence) {
  let delay = 0;
  const sentenceWithNewLine = sentence + "\n";
  
  for (const char of sentenceWithNewLine) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay+=50);
  }
}

typeLine("hello there from lighthouse labs");