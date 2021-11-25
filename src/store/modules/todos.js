const state = {
  todos: ["Eat Breakfast", "Eat Lunch", "Eat Dinner"],
};

const getters = {
  todos: (state) => state.todos
};

export default {
  state,
  getters,
};
