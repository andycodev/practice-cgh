// Plugins
import { registerPlugins } from '@/plugins'
// Components
import App from './App.vue'
// Composables
import { createApp } from 'vue'
// Vue router
import router from './router'
// Tanstack vue-query
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
//configuracion global de vue-query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    },
  },
});

const app = createApp(App)
registerPlugins(app)
app.use(router)
app.use(VueQueryPlugin, { queryClient })
app.mount('#app')
