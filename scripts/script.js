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
    userInput = prompt(
      `How many words do you want to guess? There is a maximum of ${words.length} words, so you cannot exceed that number.`
    );
    if (userInput === null) {
      cancelled = true;
      return;
    } else if (isNaN(parseInt(userInput)) === true) {
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
  const pattern = /^[a-z]+$/i;
  wordSelector();
  while (!defined) {
    userInput = prompt(
      `Write how ${currentWord[0]} is read with latin characters`
    );
    if (userInput === null) {
      cancelled = true;
      return;
    } else if (pattern.test(userInput) === true) {
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

const resetWordArray = () => {
  if (pastWords.length === 0) {
    return;
  }
  pastWords.forEach((item) => {
    words.push(item);
  });
  pastWords = [];
};

const askToPlayAgain = () => {
  let userInput;
  while (true) {
    userInput = prompt("Would you like to play again? Type 'yes' or 'no'.");
    if (userInput === null || userInput.toLowerCase() === "no") {
      return false;
    } else if (userInput.toLowerCase() === "yes") {
      alert("Back to the start we go!");
      return true;
    } else {
      alert("You have to type either 'yes' or 'no'!");
    }
  }
};

const scoreAssessment = (scoreInput) => {
  let percentage = Math.floor((scoreInput / tries) * 100);
  alert(
    `You have scored ${scoreInput} out of a total of ${tries} questions, earning you a total percentage of approximately ${percentage}%`
  );
  if (percentage === 100) {
    alert("You are a certified Hiragana Master!");
  }
};

let cancelled;
let tries = 0;
let score = 0;
let startButton = document.querySelector(".start-button");
startButton.onclick = () => {
  let playAgain = true;
  cancelled = false;
  while (playAgain === true && cancelled === false) {
    resetWordArray();
    score = 0;
    tries = selectAmountOfTries();
    for (let i = 0; i < tries; i++) {
      if (cancelled === true) {
        break;
      } else {
        userGuessing();
      }
    }
    if (!cancelled) {
      scoreAssessment(score);
      playAgain = askToPlayAgain();
    }
  }
  alert("Thank you for playing!");
};
