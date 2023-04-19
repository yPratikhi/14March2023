function wordCount(str) {
  let words = str.split(" ");
  let map = new Map();
  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) {
      map.set(words[i], map.get(words[i]));
    } else {
      map.set(words[i], 1);
    }
  }
  return map;
}

console.log(wordCount('You are building a word count generator that will take a large string of text as input and output the words and'));