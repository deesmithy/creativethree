<template>

<div class="wrapper">
  <div class="problem-view">
  <div class="problem-text-view">
    <p>{{problem.text}} </p>
  </div>

    <div class="answers-view" v-for="answer in problem.answers" :key="answer.text">
      <button class="auto" @click="selectAnswer(answer)">
        <img :src="require('/public/images/'+answer.image)">
        <p> {{answer.text}} </p>
      </button>
    </div>
    <button class="submit-button" @click="gradeProblem(problem)">Submit</button>
    <br>
    <a href="https://www.youtube.com/watch?v=IO9XlQrEt2Y" target="_blank"><button class="solution-video-button" >Solution Video</button></a>
    <br>
    <button class="hint-button" @click="showHint()">Hint: {{hintToShow}} <br>Click for another hint.</button>
  </div>
</div>


</template>


<script>

export default {
  name: 'ProblemView',
  data() {
    return {
      hintToShow: '',
      index: -1,
    }
  },
  props: {
    problem: Object,
  },
  methods: {
    selectAnswer(answer) {
      if(answer.isSelected === true) {
        answer.isSelected = false;
        answer.image = 'answerNotSelected.png';
      }
      else {
        answer.isSelected = true;
        answer.image = 'answerSelected.png';
      }
    },
    showHint() {
      if (this.index === this.problem.hints.length) {
        this.index = 0;
        this.hintToShow = this.problem.hints[this.index];
      }
      else {
        this.index += 1;
        this.hintToShow = this.problem.hints[this.index];
      }
    },
    gradeProblem(problem) {

      let answeredCorrectly = true;
      let answered = false;
      for (let index in problem.answers) {
        if (problem.answers[index].isSelected) {
          answered = true;
        }
        if (problem.answers[index].isCorrect != problem.answers[index].isSelected) {

          answeredCorrectly = false;
        }
      }
      if (!answered) {
        alert("You forgot to answer this question!")
      }
      else {
      if (answeredCorrectly) {

        alert("Well done. You are right!")
      }
      else {
        alert("WHOOPS, not this time. Try again.")
      }
      }
    },
  },


}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
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
.hint-button, .solution-video-button {
  background: linear-gradient(darkgray, black);
  width: 250px;
}
.problem-text-view {
  background: linear-gradient(blue, pink);
  padding: 10px;
  border-radius: 12px;
  width: 500px;
}
.problem-text-view p {
  color: lightgray;
}

</style>
