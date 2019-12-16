<template>
  <div id="app">
    <brain-nav></brain-nav>
    <div id="brain-content" class="container">
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated bounceOut"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    "brain-nav": Navbar
  }
};
</script>

<style lang="scss">
@import "./scss/global";
</style>
