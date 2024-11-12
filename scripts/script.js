let words = [
  ["すてき", "suteki"],
  ["ほんとう", "hontou"],
  ["たべる", "taberu"],
  ["こころざし", "kokorozashi"],
  ["みょうじょう", "myoujou"],
  ["じょうず", "jouzu"],
  ["わからない", "wakaranai"],
  ["をわり", "owari"],
  ["うゐ", "ui"],
  ["ゑひ", "ehi"],
  ["やみ", "yami"],
  ["ゆらぎ", "yuragi"],
  ["よみがえる", "yomigaeru"],
  ["あいにく", "ainiku"],
  ["おおもの", "oomono"],
  ["けいとう", "keitou"],
  ["せかい", "sekai"],
  ["さびしい", "sabishii"],
  ["すてる", "suteru"],
  ["ためらう", "tamerau"],
  ["ちから", "chikara"],
  ["つつもたせ", "tsutsumotase"],
  ["ないがしろ", "naigashiro"],
  ["ぬいぐるみ", "nuigurumi"],
  ["ねえさん", "neesan"],
  ["のこり", "nokori"],
  ["ふで", "fude"],
  ["へこみ", "hekomi"],
  ["ぱくり", "pakuri"],
  ["ぽんず", "ponzu"],
  ["ばか", "baka"],
  ["ぼうりょく", "bouryoku"],
  ["ゆめ", "yume"],
  ["かんぷく", "kanpuku"],
  ["ぴーまん", "piiman"],
  ["かっとう", "kattou"],
  ["ぜったい", "zettai"],
  ["ぺっとぼとる", "pettobotoru"],
  ["ぎまん", "giman"],
  ["むくい", "mukui"],
  ["じぶん", "jibun"],
  ["びっち", "bicchi"],
  ["じゅうべい", "juubei"],
  ["ぞういん", "zouin"],
  ["ずっと", "zutto"],
  ["げんざい", "genzai"],
  ["ぐんたい", "guntai"],
  ["さんご", "sango"],
];

const randomNumberGenerator = (numerator) => {
  return Math.floor(Math.random() * numerator);
};

const selectAmountOfTries = () => {
  let defined = false;
  let userInput;
  while (!defined) {
    userInput = parseInt(
      prompt(
        `How many words do you want to guess? There is a maximum of ${words.length} words, so you cannot exceed that number.`
      )
    );
    if (isNaN(userInput) === true) {
      alert("You have to pick a number");
    } else if (userInput > words.length) {
      alert(`You cannot exceed ${words.length}!`);
    } else if (userInput < 1) {
      alert("You have to pick at least 1!");
    } else {
      defined = true;
    }
  }
  return userInput;
};

let currentWord;
let pastWords = [];
const wordSelector = () => {
  let randomNumber = randomNumberGenerator(words.length);
  currentWord = words[randomNumber];
  words.splice(randomNumber, 1);
  pastWords.push(currentWord);
};

const userGuessing = () => {
  let defined = false;
  let userInput;
  let pattern = /^[a-z]+$/i;
  while (!defined) {
    userInput = prompt(
      `Write how ${currentWord[0]} is read with latin characters`
    );
    if (pattern.test(userInput) === true) {
      defined = true;
    } else {
      alert("Please type a word with latin letters.");
    }
  }
  if (userInput.toLowerCase() === currentWord[1]) {
    score++;
    alert(
      `You are correct! Your current score is ${score} out of ${tries} total`
    );
  } else {
    alert(
      `You are wrong! Your current score is ${score} out of ${tries} total`
    );
  }
};

let startButton = document.querySelector(".start-button");
startButton.onclick = () => {
  let playAgain = true;
  let score = 0;
  while (playAgain === true) {
    let tries = selectAmountOfTries();
    for (i = 0; i < tries; i++) {
      wordSelector();
    }
  }
  console.log(words);
  console.log(currentWord);
  console.log(pastWords);
};
