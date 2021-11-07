<template>
<div class="home-wrapper">
<div class="exam-view" v-for="problem in problems" :key="problem.id">
<ProblemView :problem="problem" />
</div>
</div>
</template>

<script>
import ProblemView from "../components/ProblemView.vue"
export default {
  name: 'Home',
  components: {
    ProblemView
  },
  data() {
    return {
    searchText: '',
    }
  },
  computed: {
    problems() {
      return this.$root.$data.problems;
    }
  },
}
</script>

<style scoped>
.home-wrapper {
  background: linear-gradient(pink, blue);
}
.problem-header-text {
  background-color: #008DE3;
}

.problem-container {
  background-color: blue;
  justify-content: center;
}

.problem-text-container {
  font-size: 1.5em;
}

.problem-text-container,
.problem-solution-video-link {
  justify-content: center;
  background-color: white;
  margin: 30px;
  border-radius: 12px;
  border: 12px solid white;
  text-align: center;
}

.problem-answer-list,
.problem-hint-list {
  justify-content: center;
  background-color: white;
  margin: 30px;
  border-radius: 12px;
  border: 12px solid white;
  font-size: 1.2em;
}

.problem-answer-list li {
  margin-top: 15px;
  margin-bottom: 15px;
}

.container .button {
  justify-content: center;
  text-align: center;
}
</style>
