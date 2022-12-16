<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
     
      
      <p class="card-description" >
       <h4>El arte desafía A la tecnología y la tecnología inspira al arte. John Lasseter</h4> 
      </p>
      <!-- <md-button class="md-round md-primary">Follow</md-button> -->
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/logotodess.png"),
    },
  },
  data() {
    return {};
  },
};
</script>
<style></style>
