import Home from "../components/home/Home";
import About from "../components/about/About";
import Question from "../components/Math/Question";

export const routes = [
  {
    name: "home",
    path: "/",
    component: Home
  },
  {
    path: "/question/:type",
    component: Question
  },
  { path: "/about", component: About }
];
