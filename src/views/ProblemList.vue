<template>
<div class="wrapper">
  <div class="problem-list" v-for="problem in this.$root.$data.problems" :key="problem.id">
    <div class="problem-list-item">
      <button @click="goToProblem()"> {{problem.id + 1}}. {{problem.text}} </button>
    </div>
  </div>
  <button class="add-problem-button"><router-link to="/ProblemEntryView">+ Add a Problem</router-link></button>

</div>
</template>


<script>

export default {
  name: 'ProblemList',
  data() {
    return {

    }
  },
  methods: {
  },

}
</script>




<style scoped>
  .problem-list {
  justify-content: center;

  }

  button {
    width:450px;
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

  .add-problem-button {
    padding: 25px;
    background: linear-gradient(pink, blue);
  }
  .wrapper {
    background: linear-gradient(pink, blue);
  }

</style>
