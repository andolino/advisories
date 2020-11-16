<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Directory</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Directory</ion-title>
        </ion-toolbar>
      </ion-header>

      <div>
        <ion-grid>
          <ion-row class="row-dir border-bottom">
            <ion-col>
              <div>
                <span><strong>TPMO</strong></span><br><span>672-3241</span>
              </div>
            </ion-col>
            <ion-col class="text-right">
              <div>
                <a href="tel: 672-3241"><ion-icon :icon="call"></ion-icon></a>
              </div>
            </ion-col>
          </ion-row>
          <ion-row class="row-dir border-bottom">
            <ion-col>
              <div>
                <span><strong>PNP - Pasay City</strong></span><br><span>831-7322</span>
              </div>
            </ion-col>
            <ion-col class="text-right">
              <div>
                <a href="tel: 831-7322"><ion-icon :icon="call"></ion-icon></a>
              </div>
            </ion-col>
          </ion-row>
          <ion-row class="row-dir border-bottom">
            <ion-col>
              <div>
                <span><strong>BFP - Pasay City</strong></span><br><span>844-2120 / 843-6523</span>
              </div>
            </ion-col>
            <ion-col class="text-right">
              <div>
                <a href="tel: 844-2120"><ion-icon :icon="call"></ion-icon></a>
              </div>
            </ion-col>
          </ion-row>
          <ion-row class="row-dir border-bottom">
            <ion-col>
              <div>
                <span><strong>BJMP - Pasay City</strong></span><br><span>843-6523</span>
              </div>
            </ion-col>
            <ion-col class="text-right">
              <div>
                <a href="tel: 843-6523"><ion-icon :icon="call"></ion-icon></a>
              </div>
            </ion-col>
          </ion-row>
          <ion-row class="row-dir border-bottom">
            <ion-col>
              <div>
                <span><strong>Pasay City Sports Complex</strong></span><br><span>831-4792</span>
              </div>
            </ion-col>
            <ion-col class="text-right">
              <div>
                <a href="tel: 831-4792"><ion-icon :icon="call"></ion-icon></a>
              </div>
            </ion-col>
          </ion-row>
          <ion-row class="row-dir border-bottom">
            <ion-col>
              <div>
                <span><strong>Pasay City Public Cemetery and Crematorium</strong></span><br><span>833-0682</span>
              </div>
            </ion-col>
            <ion-col class="text-right">
              <div>
                <a href="tel: 831-4792"><ion-icon :icon="call"></ion-icon></a>
              </div>
            </ion-col>
          </ion-row>
          <ion-row class="row-dir border-bottom">
            <ion-col>
              <div>
                <span><strong>Pasay City General Hospital</strong></span><br><span>833-6022 / 831-4652</span>
              </div>
            </ion-col>
            <ion-col class="text-right">
              <div>
                <a href="tel: 833-6022"><ion-icon :icon="call"></ion-icon></a>
              </div>
            </ion-col>
          </ion-row>
          <ion-row class="row-dir border-bottom">
            <ion-col>
              <div>
                <span><strong>Pasay City General Hospital</strong></span><br><span>833-6022 / 831-4652</span>
              </div>
            </ion-col>
            <ion-col class="text-right">
              <div>
                <a href="tel: 833-6022"><ion-icon :icon="call"></ion-icon></a>
              </div>
            </ion-col>
          </ion-row>
          <ion-row class="row-dir border-bottom">
            <ion-col>
              <div>
                <span><strong>Cuneta Astrodome</strong></span><br><span>804-0776 / 831-4652</span>
              </div>
            </ion-col>
            <ion-col class="text-right">
              <div>
                <a href="tel: 833-6022"><ion-icon :icon="call"></ion-icon></a>
              </div>
            </ion-col>
          </ion-row>
          <ion-row class="row-dir border-bottom">
            <ion-col>
              <div>
                <span><strong>City University of Pasay</strong></span><br><span>551-1342</span>
              </div>
            </ion-col>
            <ion-col class="text-right">
              <div>
                <a href="tel: 551-1342"><ion-icon :icon="call"></ion-icon></a>
              </div>
            </ion-col>
          </ion-row>
          <ion-row class="row-dir border-bottom">
            <ion-col>
              <div>
                <span><strong>Office for Senior Citizen Affairs</strong></span><br><span>381-1579</span>
              </div>
            </ion-col>
            <ion-col class="text-right">
              <div>
                <a href="tel: 381-1579"><ion-icon :icon="call"></ion-icon></a>
              </div>
            </ion-col>
          </ion-row>
          <ion-row class="row-dir border-bottom">
            <ion-col>
              <div>
                <span><strong>Treasurer Office</strong></span><br><span>551-1940 / 833-2854</span>
              </div>
            </ion-col>
            <ion-col class="text-right">
              <div>
                <a href="tel: 381-1579"><ion-icon :icon="call"></ion-icon></a>
              </div>
            </ion-col>
          </ion-row>
          <ion-row class="row-dir border-bottom">
            <ion-col>
              <div>
                <span><strong>Market Office</strong></span><br><span>833-0988</span>
              </div>
            </ion-col>
            <ion-col class="text-right">
              <div>
                <a href="tel: 833-0988"><ion-icon :icon="call"></ion-icon></a>
              </div>
            </ion-col>
          </ion-row>
          <ion-row class="row-dir border-bottom">
            <ion-col>
              <div>
                <span><strong>Pasay City Veterinary</strong></span><br><span>834-1176</span>
              </div>
            </ion-col>
            <ion-col class="text-right">
              <div>
                <a href="tel: 381-1579"><ion-icon :icon="call"></ion-icon></a>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>

    
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { call } from 'ionicons/icons';

export default  {
  name: 'Directory',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    return {
      call
    }
  }
}
</script>

<style>
.row-dir{
  font-size:12px;
}
.row-dir a {
  line-height: 3;
}
</style>