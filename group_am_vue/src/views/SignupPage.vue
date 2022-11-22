<template>
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <main>
      <div class="formContainer">
        <form>
          <h2>Email</h2> <input type="email" v-model="email">
          <h2>Password</h2> <input type="password" v-model="password">
          <!-- <div v-if="errors.length" class="error"><b>Please correct the following error(s):</b>
            <ul>
              <li v-for="(error,index) in errors" v-bind:key="index" v-bind:error="error"> {{ error}} </li>
            </ul>
          </div> -->
          <div class="button">
            <button class="submit" type="submit">Sign up</button>
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
  }

    /* data: {  // currently commented out, causes weird errors
      email: '',
      password: '',
      errors: [],
    
  },

  
  methods: {

    checkErrors: function (e) {
      this.errors = [];
      if (this.password.length > 15 || this.password.length < 8)
        this.errors.push('The password needs to be between 8 and 15 characters long!')
      if (!this.password.includes("_"))
        this.errors.push('The password should contain an underscore')
      this.upperCaseCount = 0
      this.lowerCaseCount = 0
      this.numberCount = 0
      for (i = 0; i < this.password.length; i++) {
        if (i = 1 && upperCaseCount != 1)
          this.errors.push('The password should start with an uppercase character!')
        if (this.password[i].toLowerCase() == this.password[i] && this.password[i].toUpperCase() != this.password[i])
          this.lowerCaseCount++
        if (this.password[i].toUpperCase() == this.password[i] && this.password[i].toLowerCase() != this.password[i])
          this.upperCaseCount++
        if (!isNaN(this.password[i]))
          this.numberCount++
      }
      if (this.upperCaseCount == 0)
        this.errors.push('The password should contain at least 1 uppercase character')
      if (lowerCaseCount < 3)
        this.errors.push('The password should contain at least two lowercase characters')
      if (numberCount == 0)
        this.errors.push('The password should contain at least 1 numeric value')
      if (this.errors.length == 0 ) {
        return true;
      }
    }

  } */
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

  @media (max-height: 650px) {
    main{
      height: 65vh;
    }
  }

  @media (max-width:600px) {
    main{
      height: 55vh;
    }

    .signupFooter{
      position: relative;
    }
  }

  @media (max-width:380px) {
    main{
      height: 50vh;
    }
  }

  .formContainer{
    background: rgb(0, 253, 164);
  }


  .signupFooter{
    position: fixed;
    width: 100%;
  }


</style>