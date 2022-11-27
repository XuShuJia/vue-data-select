import { createApp } from "vue";
import ExamplePage from "./example-page.vue";

const root = document.getElementById("root");
const App = createApp(ExamplePage);

App.mount(root as HTMLDivElement);
