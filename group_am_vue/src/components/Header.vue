<template>
<div>
  <header class="header">
    <ul class="nav">

      <router-link to="/">
      <li>
        Sign In
      </li>
      </router-link>

      <router-link to="/mainpage">
      <li>
        Main Page
      </li>
      </router-link>

    </ul>
  </header>
  <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "Header",
    data: function(){
        return{

        }
    },
}
</script>

<style scoped>

@media (min-width: 600px) {
    .header,
    .nav {
        display: flex;
    }
    .header {
        flex-direction: column;
        align-items: center;
    }
}

@media (min-width: 900px) {
    p{
        font-size: larger;
    }
    .header {
        flex-direction: row;
        justify-content: space-between;
    }
}

@media (max-width: 350px) {
    p{
        font-size: medium;
    }
}

ul{
    margin: 0;
    padding: 0;
    list-style: none;
}

.header {
    padding: .5em;
    border: 1px solid #646174;
    background-color: #a2ccea;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.75);


    position: sticky;
    top: 0;


    border-radius: 5px;
}

.nav {
  margin-top: 5px;
}

li {
  margin: 1em;
  border-radius: 1em;
  padding: 1em;
  padding-left: 2em;
  padding-right: 2em;
  background: #0385ff;
  text-align: center;
  font-weight: bold;
}

li:hover {
  background: rgb(192, 184, 184);
}
li:active{
    background: white;
    color: black;
}

</style>