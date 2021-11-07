import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


let data = {
  currentID: 2,
  problems: [{
    id: 0,
    text: "What is the average air speed of an unladen swallow?",
    answers: [{
      text: 'An african or a european swallow',
      isSelected: false,
      isCorrect: true,
      image: 'answerNotSelected.png',
    },
    {
      text: 'I don\'t know',
      isSelected: false,
      isCorrect: false,
      image: 'answerNotSelected.png',
    },
    {
      text: '45 mph',
      isSelected: false,
      isCorrect: false,
      image: 'answerNotSelected.png',
    },
    {
      text: 'she\'s a witch!',
      isSelected: false,
      isCorrect: false,
      image: 'answerNotSelected.png',
    }],
    solutionURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    hints: ['It weighs the same as a duck', 'You should always be careful'],
  },
  {
    id: 1,
    text: "Which team is going to win the superbowl this year?",
    answers: [{
      text: 'The Buccaneers',
      isSelected: false,
      isCorrect: true,
      image: 'answerNotSelected.png',
    },
    {
      text: 'I don\'t know',
      isSelected: false,
      isCorrect: false,
      image: 'answerNotSelected.png',
    },
    {
      text: 'The 49rs',
      isSelected: false,
      isCorrect: false,
      image: 'answerNotSelected.png',
    },
    {
      text: 'The LA Rams',
      isSelected: false,
      isCorrect: false,
      image: 'answerNotSelected.png',
    },
    {
      text: 'The Patriots',
      isSelected: false,
      isCorrect: false,
      image: 'answerNotSelected.png',
    },{
      text: 'The Steelers',
      isSelected: false,
      isCorrect: false,
      image: 'answerNotSelected.png',
    },
    {
      text: 'The Cardinals',
      isSelected: false,
      isCorrect: false,
      image: 'answerNotSelected.png',
    }
  ],
    solutionURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    hints: ['The Gronk', 'Tom Brady'],
  }],
  getProblems() {
    return this.problems;
  },
  addProblem(text, answers, solutionURL, hints) {
    this.problems.push({
      id: this.currentID,
      text: text,
      answers: answers,
      solutionURL: solutionURL,
      hints: hints
    });
    this.currentID += 1;
  },
}


new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
