import LoginPage from "@/pages/login/index.vue";
import TasksPage from "@/pages/tasks/index.vue";
import NavBar from "@/components/layout/Navbar.vue";

export default [
  {
    path: "/entrar",
    name: "Tela de Login",
    components: { default: LoginPage },
  },
  {
    path: "/tarefas",
    name: "Minhas Tarefas",
    components: { default: TasksPage, navbar: NavBar },
  },
];
