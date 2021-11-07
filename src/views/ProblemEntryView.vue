<template>

<div class="wrapper">

  <div class="problem-view">
  <div class="problem-text-view">
    <p id="text-add-p"> Enter the question </p>
    <input type="text" v-model="problemText">
  </div>


    <div class="answers-view" v-for="answer in problem.answers" :key="answer.text">
      <button class="auto" @click="setAnswerTrue(answer)">
        <img :src="require('/public/images/'+answer.image)">
        <p> {{answer.text}} </p>
      </button>
    </div>
    <p id="answer-add-p"> Enter a new Answer </p>
    <input type="text" v-model="newAnswerText">
    <br>
    <button class="add" @click="addAnswer(newAnswerText)"> + Add an answer</button>
    <br>
    <p id="hint-add-p">Add a new hint </p>
    <input type="text" v-model="newHint">
    <br>
    <div class="hints-view" v-for="hint in this.problem.hints" :key="hint">

        <p> Hint: {{hint}} </p>

    </div>
    <button class="add" @click="addHint(newHint)">Add Hint</button>
    <br>

    <button class="add" @click="saveProblem(problem)">Save Problem</button>
  </div>
</div>


</template>


<script>

export default {
  name: 'ProblemEntryView',
  data() {
    return {
    problem: {
      id: this.$root.$data.problems.length,
      text: "",
      answers: [],
      solutionURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      hints: [],
    },
    problemText: '',
    newAnswerText: '',
    newHint: '',
    hints:[],
    }
  },
  methods: {
    addAnswer(newAnswerText) {
      if (newAnswerText === "") {
        alert("Whoops, this answer doesn't have any text");
        return;
      }
      this.problem.answers.push({text: newAnswerText, isCorrect: false, isSelected: false, image: 'answerNotSelected.png'});
      this.newAnswerText = '';
    },
    addHint(hint) {
      this.problem.hints.push(hint);
      this.newHint = "";
    },
    setAnswerTrue(answer) {
      if (answer.isCorrect) {
        answer.isCorrect = false;
        answer.image = 'answerNotSelected.png'
      }
      else {
        answer.isCorrect = true;
        answer.image = 'answerSelected.png'
      }
    },

    showHint(problem, index) {
      if (index === problem.hints.length) {
        index = 0;
      }
      else {
        index += 1;
      }
    },
    saveProblem() {
    if (this.problemText === "") {
      alert("Add a question in the box first")
      return;
    }
    for (let index in this.problem.answers) {
      this.problem.answers[index].image = 'answerNotSelected.png';
    }
    this.problem.text = this.problemText;
    this.$root.$data.problems.push(this.problem);
    this.problem =
    {
      id: this.$root.$data.problems.length,
      text: "",
      answers: [],
      solutionURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      hints: [],
    }
    this.newProblemText = "";
    }

  },

}
</script>


<style scoped>
input {
  width:350px;
  background: white;
  color: black;
  border: none;
  padding: 8px;
  border: 2px black solid;
  border-radius: 8px;
  margin: 2px;
  display: inline-flex;
  flex-direction: row;
  flex-layout: space-around;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(pink, blue);
}
.answer-view {
  display: flex;
}



button {
  width:350px;
  background: #000;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 8px;
  margin: 2px;
  display: inline-flex;
  flex-direction: row;
  flex-layout: space-around;
}

button img {
  height: 25px;
  width: 25px;

  padding-top: 8px;
  padding-right: 6px;
}

.submit-button {
  background-color: forestgreen;
  width: 75px;
  justify-content: center;
}

.auto {
  margin-left: auto;
}
.solution-video-button, .hint-button {
  justify-content: center;

}
.add {
 height: 50px;
 width: 100px;
}
#text-add-p {
  color: blue;
}
#answer-add-p {
  color: black;
}
#hint-add-p {
  color: pink;
}
.hints-view p {
  border-radius: 8px;
  background: white;
}
</style>
