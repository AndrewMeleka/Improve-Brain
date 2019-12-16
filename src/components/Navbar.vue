<template>
  <nav class="navbar navbar-expand-lg navbar navbar-dark brain-bg">
    <div class="container">
      <router-link class="brand" to="/">Improve Brain</router-link>
      <ul class="navbar-nav ml-auto">
        <router-link to="/" tag="li" class="nav-item">
          <a class="nav-link">Home</a>
        </router-link>
        <router-link to="/about" tag="li" class="nav-item">
          <a class="nav-link">About</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
<script></script>

<style lang="scss">
li.router-link-exact-active {
  a {
    color: #fff !important;
    font-weight: bold;
    box-shadow: 2px 2px 7px 0 #00000038;
    padding: 10px !important;
    border-radius: 20px;
  }
}
.navbar-nav {
  flex-direction: row !important;
  > li {
    padding: 10px;
  }
}
</style>
