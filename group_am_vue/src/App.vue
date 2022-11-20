<template>
  <Header></Header>
</template>

<script>

//header component for the signup and main page
import Header from './components/Header.vue';

export default {
  name: "App",
        components: {Header},
        data: function(){
            return{

            }
        }
}
</script>


<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
