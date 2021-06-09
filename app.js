import { localQuestions, localIdioms } from './localQuestions.js'

const nextQuestionBtn = document.getElementById('new-question')
const questionSpace = document.getElementById('question')
const idiomPopup = document.getElementById('idiom-popup')
const idiom = document.getElementById('idiom')
const meaning = document.getElementById('meaning')
// const twitterBtn = document.getElementById('twitter')


let clickCount = 0;

// get a new question 
function getQuestion() {
  const question = localQuestions[Math.floor(Math.random() * localQuestions.length)]

  if(question.length > 120) {
    questionSpace.classList.add('long-question')
  } else {
    questionSpace.classList.remove('long-question')
  }
  questionSpace.innerText = question
  showIdiom()
}

function showIdiom() {
    if (getQuestion) {
    clickCount++;
    if(clickCount !== 5) {
      idiomPopup.style.display = "none"
    } else {
      getIdiom();
      idiomPopup.style.display = "block"
      clickCount = 0;
    }
  }
}

function getIdiom() {
  const randomIdiom = localIdioms[Math.floor(Math.random() * localIdioms.length)]

  idiom.innerHTML = randomIdiom.idiom;
  meaning.innerText = randomIdiom.meaning;
}


// tweet quote
// function tweetQuestion() {
//   const quote = questionSpace.innerText;
//   const twitterUrl = `
//   https://twitter.com/intent/tweet?text=${quote}`;
//   window.open(twitterUrl, '_blank')
// }

// event listeners
// twitterBtn.addEventListener('click', tweetQuestion)
nextQuestionBtn.addEventListener('click', getQuestion)

