<template>
  <nav>
    <router-link to="/">My Cart</router-link> |
    <router-link to="/search">Search</router-link> | 
    <router-link to="/manage-items">Manage Items</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button{
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
}

td {
  font-size: 1.2rem;
  padding: 1rem;
}

table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  text-align: left;
  padding: 0.5rem;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
