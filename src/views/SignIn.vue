<template>
  <div class="signin">
    <h1>Sign In to improve your experience learning!</h1>
    <p>Username</p>
    <input type="text" v-model="username">
    <p>Password</p>
    <input type="password" v-model="password">
    <br>
    <button @click="createAccount()">Create Account</button>
    <button @click="forgotPassword()">Forgot Password?</button>

    <br>
    <button class="signIn" @click="signIn(username, password)"><router-link to="/">Sign In</router-link></button>
  </div>
</template>


<script>

export default {
  name: 'SignIn',
  components: {

  },
  data() {
    return {
    username: '',
    password: '',
    }
  },
  computed: {
    problems() {
      return this.$root.$data.problems;
    }
  },
  methods: {
    createAccount() {
      alert("Create a new account... (There is no backend to this yet, so you can just click on the menu items to keep looking)")
    },
    forgotPassword() {
      alert("Whoops, you forgot your password... We can't help you. We forgot it too.")
    },
    signIn(username, password) {
      let text = "Welcome, " + username + "! It is so good to have you back with us.... By the way, your password: '" + password + "' is not very secure. Consider changing it.";
      alert(text);
    }

  }
}
</script>


<style scoped>

.signin {
  background: linear-gradient(pink, blue);
}
input {
  height: 25px;
  width: 200px;
}
button {
  margin-top: 10px;
  border-radius: 12px;
}

.signIn {
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 20px;
  height: 40px;
  width: 80px;
}
.about {
  background: linear-gradient(pink, blue);
}

</style>
