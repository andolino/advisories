<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Advisories</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Health</ion-card-subtitle>
          <ion-card-title class="adv-title">Philippines' COVID-19 cases breach 70,000</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          The Philippines now has 70,764 confirmed COVID-19 cases after the Department of Health (DOH) reported 1,951 new cases on Tuesday, July 21. The 
          DOH reported two new deaths due to the coronavirus disease, bringing the death toll to 1,837, while the recoveries are up by 209, raising
          total recoveries to 23,281
          <div>
            <ion-grid class="pl-0 pr-0">
              <ion-row >
                <ion-col class="left-date pl-0">
                  July 25, 2020
                </ion-col>
                <ion-col class="pr-0">
                  <ion-button color="primary" size="small" class="ion-float-right" @click="openModal(
                    'Health', 
                    'Philippines\' COVID-19 cases breach 70,000', 
                    'July 25, 2020', 
                    'The Philippines now has 70,764 confirmed COVID-19 cases after the Department of Health (DOH) reported 1,951 new cases on Tuesday, July 21. The DOH reported two new deaths due to the coronavirus disease, bringing the death toll to 1,837, while the recoveries are up by 209, raising total recoveries to 23,281')">READ MORE</ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Education</ion-card-subtitle>
          <ion-card-title class="adv-title">DepEd welcomes law allowing school opening beyond August</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          The Department of Education (DepEd) welcomed on Monday the signing of Republic Act (RA) 11480 which allows the movement of the opening
          of classes beyond August during times of emergency. However, it maintained that the August 24 opening of classes still stands.
          <div>
            <ion-grid class="pl-0 pr-0">
              <ion-row >
                <ion-col class="left-date pl-0">
                  July 30, 2020
                </ion-col>
                <ion-col class="pr-0">
                  <ion-button color="primary" size="small" class="ion-float-right" @click="openModal(
                    'Education', 
                    'DepEd welcomes law allowing school opening beyond August', 
                    'July 30, 2020', 
                    'The Department of Education (DepEd) welcomed on Monday the signing of Republic Act (RA) 11480 which allows the movement of the opening of classes beyond August during times of emergency. However, it maintained that the August 24 opening of classes still stands')">READ MORE</ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </ion-card-content>
      </ion-card>

      <ion-card class="pb-5">
        <ion-card-header>
          <ion-card-subtitle>Sports / Wellness</ion-card-subtitle>
          <ion-card-title class="adv-title">PH athletes build resilience in pandemic</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          As regular sports continue to be on hiatus, Filipino athletes channel their energies to other purpose in order to keep 
          themselves busy and mentally healthy during the pandemic Not only do they get creative in finding ways to train during 
          quarantine, but they also started initiatives to help their local communities.
          <div>
            <ion-grid class="pl-0 pr-0">
              <ion-row >
                <ion-col class="left-date pl-0">
                  July 31, 2020
                </ion-col>
                <ion-col class="pr-0">
                  <ion-button color="primary" size="small" class="ion-float-right" @click="openModal(
                    'Sports / Wellness', 
                    'PH athletes build resilience in pandemic', 
                    'July 31, 2020', 
                    'As regular sports continue to be on hiatus, Filipino athletes channel their energies to other purpose in order to keep themselves busy and mentally healthy during the pandemic Not only do they get creative in finding ways to train during quarantine, but they also started initiatives to help their local communities')">READ MORE</ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>

</template>

<script lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, modalController } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import Modal from './Modal.vue';
  import axios from 'axios';
  // import serverData from '';


  export default defineComponent({
    name: 'Advisory',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },  
    methods: {
      async openModal(types: any, title: any, date: any, desc: any) {
        const modal = await modalController
          .create({
            component: Modal,
            cssClass: 'my-custom-class',
            componentProps: {
              desc: desc,
              title: title,
              date: date,
              types: types
              // data: {
              //   content: 'New Content',
              // },
              // propsData: {
              //   title: 'New Title',
              // },
            },
          })
        return modal.present();
      },
      getDataServer(){
        return axios
                  .get('https://psapro-itasset.com/jzon.json?id=1')
                  .then((response) => {
                    return response.data;
                  });
      }
    },
    data() {
      return {
        title: 'New title Dondon'
      }
    },
    mounted(){
      const ddd2 = this.getDataServer();
      ddd2.then(function(res){
        // console.log(res);
      });
    }
  });
</script>

<style>
  .adv-title{
    font-size: 17px;
  }
  .left-date {
    line-height: 2.5;
    text-align: left;
    font-weight: 600;
  }
</style>