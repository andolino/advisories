<template>
  <ion-page >
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true" class="bg-hotspot">
      <div class="img_loader"><img src="../../public/images/comming-soon.png" style="z-index:9999"></div>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Wifi Hotspot</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { cart, pricetag, water, cash, call, keypad } from 'ionicons/icons';

import CommingSoon from "./components/CommingSoon.vue";

export default  {
  name: 'WifiHotspot',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    return {
      cart,
      pricetag,
      water,
      cash,
      call,
      keypad
    }
  }
}
</script>



<style>
  .btn-cust-pmts {
    height: 60px;
  }
  .img_loader {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.85);
    z-index: 9999;
    width:100%;
  }
  .bg-hotspot{
    --background: url('../../public/images/hotspot.png') no-repeat fixed center;
  }
</style>