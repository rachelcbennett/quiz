<template>
  <div id="app">
      <router-link to="/">
        <img class="logo" src="/logo.png">
      </router-link>
    <div id="nav">
      <router-link to="/">Home</router-link> 
    </div>
    <router-view/>
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
  color: rgb(144, 10, 161);
}

#nav a.router-link-exact-active {
  color: rgb(144, 10, 161);
}

.logo{
    height:200px;
}
</style>
