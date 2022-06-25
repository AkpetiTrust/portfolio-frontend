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
    projects: [
      {
        img: null,
        title: "Whot",
        live: "https://whot.trust-akpeti.com",
        github: "https://github.com/AkpetiTrust/whot",
        description:
          "A game of WHOT built with ReactJS. It's a game where you play against an AI. A multiplayer version is in development😗.",
        technologies: ["React", "Redux"],
        roles: ["UI Design", "Front-end"],
        featured: true,
        id: 1,
        order: 1,
      },
      {
        img: null,
        title: "Exchange App",
        live: "https://exchange-app.trust-akpeti.com",
        github: "https://github.com/AkpetiTrust/exchange_app",
        description:
          "A web app that shows the latest prices for various cryptocurrency coins. You can also convert the value of one coin to another, it was built using ReactJS.",
        technologies: ["React"],
        roles: ["UI Design", "Front-end"],
        featured: true,
        id: 2,
        order: 2,
      },
      {
        img: null,
        title: "Exchange App",
        live: "https://exchange-app.trust-akpeti.com",
        github: "https://github.com/AkpetiTrust/exchange_app",
        description:
          "A web app that shows the latest prices for various cryptocurrency coins. You can also convert the value of one coin to another, it was built using ReactJS.",
        technologies: ["React"],
        roles: ["UI Design", "Front-end"],
        featured: true,
        id: 3,
        order: 3,
      },
      {
        img: null,
        title: "Exchange App",
        live: "https://exchange-app.trust-akpeti.com",
        github: "https://github.com/AkpetiTrust/exchange_app",
        description:
          "A web app that shows the latest prices for various cryptocurrency coins. You can also convert the value of one coin to another, it was built using ReactJS.",
        technologies: ["React"],
        roles: ["UI Design", "Front-end"],
        featured: true,
        id: 4,
        order: 4,
      },
      {
        img: null,
        title: "Exchange App",
        live: "https://exchange-app.trust-akpeti.com",
        github: "https://github.com/AkpetiTrust/exchange_app",
        description:
          "A web app that shows the latest prices for various cryptocurrency coins. You can also convert the value of one coin to another, it was built using ReactJS.",
        technologies: ["React"],
        roles: ["UI Design", "Front-end"],
        featured: true,
        id: 5,
        order: 5,
      },
    ],
    available: false,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
