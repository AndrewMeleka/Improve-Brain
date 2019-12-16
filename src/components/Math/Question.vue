<template>
  <div id="theQuestion">
    <div class="card text-center">
      <transition enter-active-class="animated fadeIn" mode="out-in">
        <div v-if="alertMsg" :class="['alert', alertType]" role="alert">{{ alertMsg }}</div>
      </transition>
      <div class="card-header d-flex">
        <div class="d-flex ml-auto">
          <span
            v-if="alertType === 'alert-danger'"
            class="badge badge-danger"
          >Correct {{ correctAnswer }}</span>
          <span class="badge badge-primary">Score {{ myScore }}</span>
          <span class="badge badge-dark">Level {{ myLevel }}</span>
        </div>
      </div>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <div class="card-body">
          <div class="card-title">
            <question-body></question-body>
          </div>
        </div>
      </transition>
      <div class="card-footer answers-btns">
        <question-answer></question-answer>
      </div>
    </div>
  </div>
</template>

<script>
import QuestBody from "./Body";
import Answer from "./Answer";
export default {
  created() {
    let myType = this.$route.params.type;
    this.$store.commit("setName", {
      type: myType
    });
    this.$store.commit("setDefault", {
      lvl: 1,
      score: 0
    });
  },
  components: {
    "question-body": QuestBody,
    "question-answer": Answer
  },
  computed: {
    myScore: function() {
      return this.$store.state.mathO.score;
    },
    myLevel: function() {
      return this.$store.state.mathO.level;
    },
    alertMsg: function() {
      return this.$store.state.mathO.alert.txt;
    },
    alertType: function() {
      return `alert-${this.$store.state.mathO.alert.type}`;
    },
    correctAnswer: function() {
      return this.$store.state.mathO.answer.correct;
    }
  }
};
</script>

<style lang="scss" scoped>
.alert {
  margin-bottom: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.card-body {
  padding: 8%;
}
.badge {
  font-size: 18px;
  margin: 0 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>
