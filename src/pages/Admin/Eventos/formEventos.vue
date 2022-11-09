<template>
    <form>
      <md-card>
        <md-card-header data-background-color="blue">
          <h4 class="title">Evento</h4>
          <p class="category">Crear Evento</p>
        </md-card-header>
  
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Nombre</label>
                <md-input v-model="username" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Tipo</label>
                <md-input v-model="lastname" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Fecha y hora</label>
                <md-input v-model="emailadress" type="email"></md-input>
              </md-field>
            </div>
            
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Lugar</label>
                <md-input v-model="firstname" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Estado</label>
                <md-input v-model="username" type="text"></md-input>
              </md-field>
            </div>
            
          
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Responsable</label>
                <md-input v-model="city" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Fecha caducidad</label>
                <md-input v-model="country" type="text"></md-input>
              </md-field>
            </div>
            
            <div class="md-layout-item md-size-100">
              <md-field maxlength="5">
                <label>Descripcion</label>
                <md-textarea v-model="aboutme"></md-textarea>
              </md-field>
            </div>
            <div class="md-layout-item md-size-100 text-right">
              <md-button class="md-info" >Publicar</md-button>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </template>
  <script>
  export default {
    name: "Crear_Eventos",
    props: {
      dataBackgroundColor: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        username: null,
        disabled: null,
        emailadress: null,
        lastname: null,
        firstname: null,
        address: null,
        city: null,
        country: null,
        code: null,
        aboutme:
          "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.",
      };
    },
  };
  </script>
  <style></style>
  