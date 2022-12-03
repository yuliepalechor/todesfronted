<template class="body">
     <div>
          <navbarusuario></navbarusuario>

          <div>
            <img src="../../assets/img/fondo.png" width="100%" height="60%" alt="Logo" margin="" />
          </div>
          <div style="background-color:#891A89" class="section primary-section" id="service">
      
      

      <div class="a1">
        <div class="span4">
          <div class="centered service">
            
            <h3 >Noticias</h3>
            <p></p>
          </div>
        </div>
      </div>

    </div>
          
         <!-- ---------------------card --------------->
          <div class="card-wrap" v-for="publicacion in publicacion" :key="publicacion.id">
            <div class="card-header one">
              <b-img class="imge" src="https://picsum.photos/300/150/?image=41"   ></b-img>
            </div>
            <div class="card-content">
              <!-- <h1 class="card-title">Title</h1> -->
              <b-card-text>
              <H6> Publicacion N°: </H6> {{ publicacion.id }}
              <h6> Nombre:</h6>{{ publicacion.nombre_publicacion }}
              <H6> Tipo de publicacion: </H6> {{ publicacion.tipo }}

            </b-card-text>
              <md-button v-b-modal="'informacion'" v-on:click="mostrarinformacion(publicacion)" target="_blank" class="md-primary md-round" >Ver mas</md-button>
            </div>
          </div>
          <!-- ------------fin card ------------->

          <div>
            <b-modal v-model="show1" id="informacion">
              <template #modal-header class="modal-header">
                <h5>INFORMACION</h5>
               
              </template>
              <b-container fluid>
                
                <b-row class="my-1">
                  <b-col sm="3">
            
                    <label for="nombre p">Nombre: </label> <br>
                    <label for="lugar p">lugar: </label> <br>
                    <label for="resp p">responsable:</label> <br>
                    <label for="estado p">estado: </label> <br>
                    <label for="tipo p">Tipo:</label> <br>
                    <label for="desc p">descripcion:</label> <br>
            
                  </b-col>
            
                  <b-col sm="9">
            
                    <p for="numero p">{{evento.nombre_publicacion}}</p>
            
                    <p for="numero p">{{evento.lugar}}</p>
                    <p for="numero p">{{evento.responsable}}</p>
                    <p for="numero p">{{evento.estado}}</p>
                    <p for="numero p">{{evento.tipo}}</p>
                    <p for="numero p">{{evento.descripcion_publicacion}}</p>
            
                  </b-col>
            
                </b-row>
            
            
              </b-container>
              <!-- ******** area de comentario ******** -->
              
              <!-- ******** area de comentario ******** -->
              <template #modal-footer="{ close }" style="text-align: right;">
                <div class="w-100">
                  <md-button target="_blank" class="md-primary md-round float-left" @click="close()">Cerrar</md-button>
                </div>
            
              </template>
            
            </b-modal>
          
            
          </div>
          <div class="section primary-section" id="about">
            <div class="triangle"></div>
            <div class="container">
            </div>
        </div>

    </div>
</template>

<script>
import axios from "axios"
export default {
  

  data() {
    return {
      // imagenPro: {width: 100, height: 100,class: 'm1' },

      publicacion: null,
      evento: {},
      show1: false,
      
      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      headerBgVariant: '#9c27b0',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'warning',
      footerTextVariant: 'dark',
      
      
      showModal: false,
     

      
    }

  },

  computed() {

  },
 

  components: {
    
  },
  /**/

  mounted() {


    axios.get('http://127.0.0.1:8000/api/eventos').then((response) => {
      console.log(response);
      this.publicacion = response.data;
    });



  },
  methods: {
    mostrarinformacion(objeto) {
      return this.evento = objeto;
    },
  },
  

  

}


</script>

<style lang="scss" scoped>
.imge{
  border-radius:50%; width:100%; height: 90%;
}
.card-mrap {
  width: 280px;
   margin: 20px;
    display: inline-block;
    vertical-align: top;
 
}
.body{
  position: fixed;
}

.md-card {
  width: 320px;
  margin: 20px;
  float: left;
  vertical-align: top;
  background-color: black;
}
//card




</style>