function magicEight() {
  const randomNumber = Math.floor(Math.random() * 20);
  const classicAnswers = [
    // Yes answers
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    // Maybe answers
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    // No answers
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];
  const alternativeAnswers = [
    // Yes answers
    "Most certainly", 
    "Your stars say yes", 
    "Absolutely", 
    "Yes, for sure",
    "Yes, if you follow your intuition",
    "Most certainly", 
    "Your stars say yes", 
    "Absolutely", 
    "Yes, for sure",
    "Yes, if you follow your intuition",
    // Maybe answers
    "Meh",
    "Don't know. Don't care.",
    "Do you really want to know?",
    "Look within and find the answer",
    "Meditate on it",
    // No answers
    "Mercury retrograde points to no",
    "Maybe in another life",
    "Nah",
    "Probably not, but don't give up!",
    "Not in a million years"
  ];

  let answerStyle = document.getElementById('answer-style');
  let eightBall = "";
  if (answerStyle.value == "classic") {
    eightBall = classicAnswers[randomNumber];
  } else {
    eightBall = alternativeAnswers[randomNumber];
  };

  if (document.getElementById('user-question').value) {
  document.getElementById('secret-message').innerHTML = eightBall;
  } else {
    document.getElementById('secret-message').innerHTML = "Type a question first!"
  }
};

function resetEightBall() {
  document.getElementById('secret-message').innerHTML = "";
  document.getElementById('user-question').value = "";
}

function selectStyle() {
  let answerStyle = document.getElementById("answer-style");
  let magicBallSection = document.getElementById("magic-ball");
  let answerTextArea = document.getElementById("magic-ball-message");
  let appBox = document.getElementById("app-box");
  if (answerStyle.value == "classic") {
    magicBallSection.style.backgroundImage = "url('images/eight-ball.webp')";
    answerTextArea.style.width = "200px";
    appBox.style.background = "linear-gradient(rgb(168, 241, 172), rgb(43, 65, 190)";
  } else {
    magicBallSection.style.backgroundImage = "url('images/crystal-ball.png')";
    answerTextArea.style.width = "300px";
    appBox.style.background = "linear-gradient(rgb(176, 238, 238), rgb(121, 88, 173)";
  }
}