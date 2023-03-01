const { createStore, applyMiddleware } = require("redux");
const { dealyActionMiddleWeare } = require("./middleWar");
const initialStatet = {
  todos: [],
};
const todoReducer = (state = initialStatet, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };
    case "todos/todoLoaded":
      return {
        ...state,
        ...action.payload,
      };
  }
};

const store = createStore(todoReducer, applyMiddleware(dealyActionMiddleWeare));

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({
  type: "todos/todoAdded",
  payload: "learn with smt",
});
