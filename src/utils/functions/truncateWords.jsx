export default function truncateWords(words, numberOfWords) {
  let wordsArray = words.split(" ");
  if (wordsArray.length <= numberOfWords) {
    return words;
  }
  return wordsArray.slice(0, numberOfWords).join(" ") + "...";
}
