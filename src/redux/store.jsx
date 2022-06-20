import { createStore } from "redux";
import combinedReducer from "./reducers";

const store = createStore(
  combinedReducer,
  {
    messages: [
      {
        name: "James John",
        message:
          "Hey I just want to tell you that so so and so is very cool, plus some very random words",
        email: "test@gmail.com",
        selected: false,
        id: 1,
      },
      {
        name: "James John",
        message:
          "Hey I just want to tell you that so so and so is very cool, plus some very random words",
        email: "test@gmail.com",
        selected: false,
        id: 2,
      },
      {
        name: "James John",
        message:
          "Hey I just want to tell you that so so and so is very cool, plus some very random words",
        email: "test@gmail.com",
        selected: false,
        id: 3,
      },
      {
        name: "James John",
        message:
          "Hey I just want to tell you that so so and so is very cool, plus some very random words",
        email: "test@gmail.com",
        selected: false,
        id: 4,
      },
      {
        name: "James John",
        message:
          "Hey I just want to tell you that so so and so is very cool, plus some very random words",
        email: "test@gmail.com",
        selected: false,
        id: 5,
      },
      {
        name: "James John",
        message:
          "Hey I just want to tell you that so so and so is very cool, plus some very random words",
        email: "test@gmail.com",
        selected: false,
        id: 6,
      },
      {
        name: "James John",
        message:
          "Hey I just want to tell you that so so and so is very cool, plus some very random words",
        email: "test@gmail.com",
        selected: false,
        id: 7,
      },
      {
        name: "James John",
        message:
          "Hey I just want to tell you that so so and so is very cool, plus some very random words",
        email: "test@gmail.com",
        selected: false,
        id: 8,
      },
    ],
    available: false,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
