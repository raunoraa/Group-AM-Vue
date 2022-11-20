<template>
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <main>
      <div class="formContainer">
        <h1>TODO: Form</h1>
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
      height: 45vh;
    }

    .signupFooter{
      position: relative;
    }
  }

  @media (max-width:380px) {
    main{
      height: 35vh;
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