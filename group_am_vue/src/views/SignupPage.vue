<template>
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <main>
      <div class="formContainer">
        <form @submit.prevent="validateForm" class="formContainerInner">
          <label for="email">Email</label> <input type="email" required v-model="email" />
          <label for="password">Password</label> <input type="password" required v-model="password" />
          <div v-if="validatePassword" class="error">
            {{validatePassword}}
          </div>

          <div class="button">
            <button class="submit" type="submit" >Sign up</button>
          </div>
        </form>
      </div>
      <Footer class="signupFooter"></Footer>
    </main>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Footer
  },
  data: function(){
    return{
      email: "",
      password: "",
      validatePassword: "",
      isValid: false,
    };
  },
  methods: {
    validateForm(){
      if(this.password.length<8 || this.password.length>15){
        this.validatePassword = "Password length must be between 8-15 characters!";
      } else {
        let regex = /^(?=.*[A-ZÕÄÖÜ]+)(?=.*([a-zõäöü](.*)[a-zõäöü])+)(?=.*[0-9]+)(?=.*[_]+).*$/; // a little help: https://stackoverflow.com/questions/3533408/regex-i-want-this-and-that-and-that-in-any-order
        this.validatePassword = regex.test(this.password) ? "" : "Password must contain at least one uppercase character (A-Z), two lowercase characters (a-z), one digits (0-9), and character _ !";
      }

      if(this.validatePassword=="") this.$router.push('/mainpage'); //will redirect to the main page if the form is correctly filled
    }
  }
}
</script>

<style scoped>

  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 80vh;
  }

  /*
  Play around with height vh parameters to get the form in the right place responsively
  */

  input{
    margin-bottom: 1em;
  }

  .error{
    overflow-wrap: break-word;
    color: red;
    font-weight: bold;
  }

  .formContainer{
    border-radius: 1em;
    padding: 4em;
    padding-top: 1.5em;
    background: rgb(0, 253, 164);
    max-width: 70%;
  }

  .formContainerInner{
    display: flex;
    flex-direction: column;
  }

  .submit{
    margin-top: 2em;
    padding: 0.5em;
    border-radius: 0.5em;
    background: rgb(187, 16, 110);
    font-weight: bold;
    color: aliceblue;
    cursor: pointer;
  }
  .submit:hover{
    background: rgb(255, 25, 163);
  }
  .submit:active{
    background: rgb(255, 141, 242);
    color: black;
  }

  @media (min-width: 1000px) {

    label{
      font-size: x-large;
    }

    input{
      margin-top: 0.5em;
      margin-bottom: 2em;
      padding: 0.5em;
    }

    input[type=email]{
      font-size: larger;
    }

    input[type=password]{
      font-size: larger;
    }

    .submit{
    font-size: larger;
  }
  }


  .signupFooter{
    position: fixed;
    width: 100%;
  }

  @media (max-height: 650px) {
    main{
      height: 65vh;
    }

    .formContainer{
    padding: 3em;
    padding-top: 0.5em;
  }

  .submit{
    margin-top: 1em;
    padding: 0.25em;
  }

  }

  @media (max-width:600px) {
      main{
        height: 55vh;
      }

      .formContainer{
      padding: 3em;
      padding-top: 0.5em;
      padding-bottom: 1.5em;
    }

    .submit{
      margin-top: 1em;
      padding: 0.35em;
    }

    .error{
      font-size: small;
      overflow-wrap: normal;
    }
  }

  @media (max-width:380px) {
    main{
      height: 50vh;
    }

    .formContainer{
      padding: 1em;
    }
  }


</style>