// 懒加载路由
const Home = () => import("./home.vue");
export default {
  path: "/",
  name: "home",
  rederect: "/home",
  component: Home,
  children: [],
};
