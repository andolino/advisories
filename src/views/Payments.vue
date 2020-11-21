<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="img_loader"><img src="../../public/images/comming-soon.png" style="z-index:9999"></div>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Payments</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col class="">
            <ion-button color="primary" class="btn-cust-pmts w-100">
              <div class="">
                <ion-icon :icon="cart"></ion-icon><br>E-SHOP
              </div>
            </ion-button>
          </ion-col>
          <ion-col class="">
            <ion-button color="success" class="btn-cust-pmts w-100">
              <div class="">
                <ion-icon :icon="pricetag"></ion-icon><br>REWARDS
              </div>
            </ion-button>
          </ion-col>
        </ion-row>  
        <ion-row>
          <ion-col class="">
            <ion-button color="tertiary" class="btn-cust-pmts w-100">
              <div class="">
                <ion-icon :icon="water"></ion-icon><br>BILLS
              </div>
            </ion-button>
          </ion-col>
          <ion-col class="">
            <ion-button color="warning" class="btn-cust-pmts w-100">
              <div class="">
                <ion-icon :icon="call"></ion-icon><br>LOAD
              </div>
            </ion-button>
          </ion-col>
        </ion-row>  
        <ion-row>
          <ion-col class="">
            <ion-button color="danger" class="btn-cust-pmts w-100">
              <div class="">
                <ion-icon :icon="keypad"></ion-icon><br>E-PINS
              </div>
            </ion-button>
          </ion-col>
          <ion-col class="">
            <ion-button color="secondary" class="btn-cust-pmts w-100">
              <div class="">
                <ion-icon :icon="cash"></ion-icon><br>E-MONEY
              </div>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { cart, pricetag, water, cash, call, keypad } from 'ionicons/icons';

import CommingSoon from "./components/CommingSoon.vue";

export default  {
  name: 'Payments',
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
</style>