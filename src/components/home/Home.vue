<template>
  <div id="theHome">
    <div id="startGroup">
      <div class="introTxt">
        <h3>Which mathematics you want to improve ?</h3>
      </div>
      <div class="btn-group-vertical cwidth">
        <router-link
          tag="button"
          to="/question/addition"
          class="btn btn-secondary btn-lg"
        >
          addition
        </router-link>
        <router-link
          tag="button"
          to="/question/subtraction"
          class="btn btn-secondary btn-lg"
        >
          subtraction
        </router-link>
        <router-link
          tag="button"
          to="/question/multiplication"
          class="btn btn-secondary btn-lg"
        >
          multiplication
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 22px;
}
.cwidth {
  width: 50%;
}
.btn-group-vertical {
  > button {
    text-transform: capitalize;
    margin: 5% 0;
  }
}
</style>
