<template>
    <ion-app>
        <LoadingScreen :isLoading="isLoading" />
        <main v-if="!isLoading">
          <!-- <p>Loading...</p> -->
          <ion-router-outlet />
        </main>
    </ion-app>
</template>

<script lang="ts">
import { 
    IonApp, 
    IonRouterOutlet 
} from '@ionic/vue';
import { defineComponent } from 'vue';

import LoadingScreen from "./components/LoadingScreen.vue";

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    LoadingScreen
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 3000);
  },
  created(){
    this.isLoading = false;
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>