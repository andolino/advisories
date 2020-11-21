<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button href="/tabs/advisory">
          <ion-icon :icon="chatbubbles"></ion-icon>
          <ion-label>Advisories</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/directory">
          <ion-icon :icon="newspaper"></ion-icon>
          <ion-label>Directory</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/payments">
          <ion-icon :icon="cash"></ion-icon>
          <ion-label>Payments</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
  import { ellipse, square, triangle, cash, newspaper, chatbubbles } from 'ionicons/icons';

  export default {
    name: 'Tabs',
    components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
    setup() {
      return {
        ellipse, 
        square, 
        triangle,
        cash,
        newspaper,
        chatbubbles
      }
    }
  }
</script>