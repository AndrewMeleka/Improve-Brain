import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		mathO: {
			type: '',
			level: 1,
			score: 0,
			body: {
				first: null,
				sec: null,
				operator: null
			},
			answer: {
				correct: 1,
				other: [],
				all: []
			},
			alert: {
				txt: null,
				type: 'none'
			}
		}
	},
	getters: {
		generateTxt(state) {
			if (state.mathO.body.operator === 'Error') {
				return "Can't found the operators";
			} else {
				return `${state.mathO.body.first} ${state.mathO.body.operator} ${state.mathO.body.sec}`;
			}
		}
	},
	mutations: {
		setName(state, payload) {
			state.mathO.type = payload.type;
		},
		addBody(state, payload) {
			state.mathO.body.first = payload.first;
			state.mathO.body.sec = payload.sec;
			state.mathO.body.operator = payload.operator;
		},
		addAnswer(state, payload) {
			state.mathO.answer.other = [];
			state.mathO.answer.all = [];
			state.mathO.answer.correct = payload.correct;
			state.mathO.answer.other = payload.other;
			state.mathO.answer.all = payload.all;
		},
		addAlert(state, payload) {
			state.mathO.alert.txt = payload.txt;
			state.mathO.alert.type = payload.type;
		},
		scoreControl(state, payload) {
			state.mathO.score += payload.score;
		},
		setDefault(state, payload) {
			state.mathO.level = payload.lvl;
			state.mathO.score = payload.score;
		},
		updateLvl(state, payload) {
			state.mathO.level = payload.current;
		}
	},
	actions: {
		generateQuestion({ commit, state }) {
			let type = state.mathO.type,
				level = state.mathO.level,
				firstNum = Math.floor(Math.random() * (level * 5)),
				secNum = Math.floor(Math.random() * (level * 5)),
				result = 0,
				operator;
			if (type === 'addition') {
				operator = '+';
				result = firstNum + secNum;
			} else if (type === 'subtraction') {
				operator = '-';
				result = firstNum - secNum;
			} else if (type === 'multiplication') {
				operator = 'x';
				result = firstNum * secNum;
			} else {
				operator = 'Error';
			}

			// generate random answers
			let ranAnswers = [];
			for (let i = 1; i <= 4; i++) {
				let myArr = [ 3, -1, 2, -2 ];
				ranAnswers.push(result + myArr[i - 1]);
			}

			commit('addBody', {
				first: firstNum,
				sec: secNum,
				operator: operator
			});
			commit('addAnswer', {
				correct: result,
				other: ranAnswers,
				all: [ result, ...ranAnswers ]
			});
		},
		upgradeLvl({ commit, state }) {
			const myScore = state.mathO.score;
			let currentLvl = Math.floor(myScore / 2 + 1);
			window.console.log('score ' + myScore + ' clvl ' + currentLvl);
			if (currentLvl <= 0) {
				currentLvl = 1;
			}
			commit('updateLvl', {
				current: currentLvl
			});
		}
	}
});
