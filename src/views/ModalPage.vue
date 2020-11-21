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
      <!-- {{ content }} -->
      <Advisory v-if="advisories"></Advisory>    
      <Directory v-if="directory"></Directory>    
      <Payments v-if="payments"></Payments>    
      <WifiHotspot v-if="wifihotspot"></WifiHotspot>    
    </ion-content>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { modalController } from '@ionic/vue';
import Advisory from './Advisory.vue';
import Directory from './Directory.vue';
import Payments from './Payments.vue';
import WifiHotspot from './WifiHotspot.vue';

export default defineComponent({
  name: 'Modal',
  components: { Advisory, Directory, Payments, WifiHotspot },
  props: {
    title : { type: String },
    content : { type: Object }
  },
  methods: {
    modalClose: function(){
      modalController.dismiss()
    }
  },
  data() {
    const advisories = this.title == 'Advisories' ? true : false; 
    const directory = this.title == 'Directories' ? true : false;
    const payments = this.title == 'Payments' ? true : false;
    const wifihotspot = this.title == 'WifiHotspot' ? true : false;
    return {
      advisories,
      directory,
      payments,
      wifihotspot
    }
  },
  mounted() {
    // console.log(modalController);
    console.log(this.title);
  }
});
</script>