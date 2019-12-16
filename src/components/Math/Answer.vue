<template>
  <div id="myAnswers" v-if="this.$store.state.mathO.body.operator !== 'Error'">
    <div id="btnAns" v-if="!nextBtn">
      <button
        class="btn btn-primary whiteTxt"
        v-for="(answer, index) in allAnswers"
        :key="'a' + index"
        @click="clickMe(answer)"
      >{{ answer }}</button>
    </div>

    <div id="btnNext" v-else>
      <button class="btn btn-success whiteTxt" @click="nextQuestion()">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Answer",
  data() {
    return {
      nextBtn: false,
      correct: 0,
      allAnswers: []
    };
  },
  methods: {
    nextQuestion() {
      this.$store.dispatch("generateQuestion");
      this.getValues();
      this.nextBtn = false;
      this.$store.commit("addAlert", {
        txt: null,
        type: "none"
      });
    },
    randomAnswers(arr) {
      arr.sort(() => Math.random() - 0.5);
    },
    getValues() {
      this.allAnswers = [];
      this.allAnswers = this.$store.state.mathO.answer.all;
      this.correct = this.$store.state.mathO.answer.correct;
      this.randomAnswers(this.allAnswers);
    },
    clickMe(answer) {
      if (answer !== this.correct) {
        this.$store.commit("addAlert", {
          txt: "Ops Wrong Answer",
          type: "danger"
        });
        this.$store.commit("scoreControl", {
          score: -1
        });
      } else {
        this.$store.commit("addAlert", {
          txt: "Good Correct Answer!",
          type: "success"
        });
        this.$store.commit("scoreControl", {
          score: 1
        });
      }
      // level check for update -- 5 score = 1 lvl
      this.$store.dispatch("upgradeLvl");
      this.nextBtn = true;
    }
  },
  created() {
    window.console.log("create time");
    this.getValues();
  }
};
</script>

<style scoped>
button {
  margin: 2%;
  font-size: 24px;
  padding: 10px 20px;
  font-weight: bold;
}
</style>
