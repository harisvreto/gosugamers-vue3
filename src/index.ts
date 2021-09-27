import { createApp } from "vue";
import App from "./App.vue";
import { apolloClient } from "./plugins/apollo";
import { createApolloProvider } from '@vue/apollo-option';

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
});

const app = createApp(App);

app.use(apolloProvider);

app.mount("#app");