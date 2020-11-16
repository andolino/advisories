<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button @click="modalClose">Close</ion-button>
        </ion-buttons>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="vh-100">
      <ion-card>
        <ion-card-content>
          {{ desc }}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </div>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, modalController } from '@ionic/vue';
import Advisory from './Advisory.vue';

export default{
  name: 'Modal',
  props: {
    title: { type: Object },
    desc: { type: String },
  },
  methods: {
    modalClose: function(){
      console.log(modalController.dismiss());
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    console.log(modalController)
  }
};
</script>