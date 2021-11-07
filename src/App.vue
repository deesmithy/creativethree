<template>
  <div id="app">
    <div id="nav">
      <router-link to="/signin">Sign In</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/ProblemList">Problem List</router-link> |
      <router-link to="/ProblemEntryView">Enter a Problem</router-link>
    </div>
    <router-view/>
    <footer>
      The code for this lab can be found here... <a href="https://github.com/deesmithy/260Creative3.git" target="_blank">Github</a>
    </footer>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: blue;
}
#app {
  background: pink;
}
footer {
  background: blue;
  color: white;
  padding: 20px;
}
footer a {
  color: white;
  background: black;
  padding: 10px;
  border-radius: 5px;
}
</style>
