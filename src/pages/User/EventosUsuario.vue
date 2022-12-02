<template>
     <div>
          <navbarusuario></navbarusuario>

          <div>
            <img src="../../assets/img/fondo.png" width="100%" height="60%" alt="Logo" margin="" />
          </div>
          
          <div class="card-expansion" v-for="publicacion in publicacion" :key="publicacion.id">
            <md-card class="md-card">
              <md-card-media>
                <img src="https://picsum.photos/600/300/?image=25" alt="People">
              </md-card-media>
          
              <md-card-header>
          
              </md-card-header>
          
              <md-card-expand>
                <md-card-actions md-alignment="space-between">
                  <div>
          
                    <md-button>Action</md-button>
                  </div>
          
                  <md-card-expand-trigger>
                    <md-button class="md-icon-button">
                      <md-icon>keyboard_arrow_down</md-icon>
                    </md-button>
                  </md-card-expand-trigger>
                </md-card-actions>
          
                <md-card-expand-content>
                  <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed
                    accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                  </md-card-content>
                </md-card-expand-content>
              </md-card-expand>
            </md-card>
          </div>
          
          
          </div>
          
     
</template>

<script>
import axios from "axios"
export default {
  

  data() {
    return {
      publicacion: null,
     

      
    }

  },

  computed() {

  },

  components: {
    
  },
  /**/

  mounted() {
    axios.get('http://127.0.0.1:8000/api/noticias').then((response) => {
        console.log(response);
        this.noticias = response.data;
      });
      axios.get('http://127.0.0.1:8000/api/publicacion').then((response) => {
        console.log(response);
        this.publicacion = response.data;
      });
   
  },

  

}


</script>

<style lang="scss" scoped>
.card-expansion {
  width: 380px;
  
  
 
    margin: 4px;
    display: inline-block;
    vertical-align: top;
 
}

.md-card {
  width: 320px;
  margin: 20px;
  float: left;
  vertical-align: top;
  background-color: black;
}
</style>