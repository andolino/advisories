<template>
  <ion-page>
     <ion-header class="bg-warning-banner">
      <ion-toolbar class="header-cavinti h-200">
        <!-- <ion-title>Subheader</ion-title> -->
      </ion-toolbar>
      <ion-grid>
      <ion-row>
        <ion-col class="text-center text-light">
          Welcome Cavinti
        </ion-col>
      </ion-row>
      </ion-grid>
    </ion-header>


  <ion-grid>
    <ion-row>
      <ion-col class="text-center">
        <ion-button color="warning" @click="openModalAdvisories()" class="text-center  w-100 h-70px rounded-pill">
          <ion-label class="text-light">
            <ion-icon :icon="chatbubbles" class="items-icon font-25px"></ion-icon> <br>
            <ion-label> Advisories</ion-label>
          </ion-label>
        </ion-button>
      </ion-col>
      <ion-col class="text-center">
        <ion-button color="warning" @click="openModalDirectory()" class="text-center w-100 h-70px rounded-pill">
          <ion-label class="text-light">
            <ion-icon :icon="newspaper" class="items-icon font-25px"></ion-icon> <br>
            <ion-label> Directory</ion-label>
          </ion-label>
        </ion-button>
      </ion-col>
      <ion-col class="text-center">
        <ion-button color="warning" @click="openModalPayments()" class="text-center w-100 h-70px rounded-pill">
          <ion-label class="text-light">
            <ion-icon :icon="cash" class="items-icon font-25px"></ion-icon> <br>
            <ion-label> Payments</ion-label>
          </ion-label>
        </ion-button>
      </ion-col>
      <ion-col>
        <ion-button color="warning" @click="openModalWifiHotspot()" class="text-center w-100 h-70px rounded-pill">
          <ion-label class="text-light">
            <ion-icon :icon="cash" class="items-icon font-25px"></ion-icon> <br>
            <ion-label> WIFI Hotspot</ion-label>
          </ion-label>
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>

        
    <!-- <ion-footer>
      <ion-toolbar>


      </ion-toolbar>
    </ion-footer> -->
    
    
  </ion-page>
</template>

<script lang="ts">
import { IonLabel, IonIcon, IonPage, modalController } from '@ionic/vue';
import { ellipse, square, triangle, cash, newspaper, chatbubbles } from 'ionicons/icons';
import ModalPage from './ModalPage.vue';


export default {
  name: 'Home',
  components: { IonLabel, IonIcon, IonPage},
  methods: {
    async openModalAdvisories() {
      const modalAdvisories = await modalController
        .create({
          component: ModalPage,
          cssClass: 'my-custom-class',
          componentProps: {
            content : '',
            title: "Advisories"
          },
        })
      return modalAdvisories.present();
    },
    async openModalDirectory() {
      const modalDirectories = await modalController
        .create({
          component: ModalPage,
          cssClass: 'my-custom-class',
          componentProps: {
            content : '',
            title: "Directories"
          },
        })
      return modalDirectories.present();
    },
    async openModalPayments() {
      const modalPayments = await modalController
        .create({
          component: ModalPage,
          cssClass: 'my-custom-class',
          componentProps: {
            content : '',
            title: "Payments"
          },
        })
      return modalPayments.present();
    },
    async openModalWifiHotspot() {
      const modalWifiHotspot = await modalController
        .create({
          component: ModalPage,
          cssClass: 'my-custom-class',
          componentProps: {
            content : '',
            title: "WifiHotspot"
          },
        })
      return modalWifiHotspot.present();
    }
  },
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

<style>
.header-cavinti {
  --background: url('../../public/images/cavintilogo100.png') no-repeat fixed center;
}
.h-200{
  height: 150px;
}
.h-70px{
  height: 70px;
}
.font-25px {
    font-size: 25px;
}
.rounded-pill{
  --border-radius: 20px;
}
.bg-warning-banner{
  background-image: url('../../public/images/header-banner.png');
}
</style>