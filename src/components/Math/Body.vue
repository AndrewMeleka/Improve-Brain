<template>
  <div id="mathAddi">
    <h2>
      {{ this.$store.getters.generateTxt }}
    </h2>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("generateQuestion");
  },
  data() {
    return {
      first: this.$store.state.mathO.body.first,
      sec: this.$store.state.mathO.body.sec,
      op: this.$store.state.mathO.body.operator
    };
  }
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 50px;
}
</style>
