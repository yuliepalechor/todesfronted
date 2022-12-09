<template>
  <div>
    <!-- <div class="navbar">


      <div class="navbar-inner">
        <div class="container">
          <img src="../../assets/img/logonue.png" width="80px" height="30px" alt="Logo" />
        </div>
      </div>

      

      {{ usuarionombre }}
      {{ usuarioapellido }}
    </div> -->
    <navbarusuario></navbarusuario>


    <!-- Start home section -->

    <center><img src="../../assets/img/lgbtiq+.jpg" width="40%" height="150%" length="200" alt="Logo" /> </center>

    <!-- End home section -->
    <!-- Service section start -->
    <div style="background-color:#891A89" class="section primary-section" id="service">

      <div class="container">


        <div class="title">
          <!-- Start title section 
          <h1>

            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Lo que hacemos? </font>

            </font>
          </h1>
          
         
          <p>
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Nuestras historias nos identifican </font>
            </font>

          </p>
        -->
        </div>

        <!--Simple description for section goes here. -->

      </div>

      <div class="a1">
        <div class="span4">
          <!--
          <div class="centered service">
            <div class="circle-border zoom-in">
              <img class="img-circle" src="images/Service1.png" alt="service 1" />
            </div>
           
            <h3>Actividades</h3>
            <p>Nosotros estamos orgullosos de lo que somos.</p>
          </div>
          -->
        </div>

      </div>

    </div>


    <!-- Service section end -->
    <!-- Portfolio section start -->
    <div class="section secondary-section" style="background-color:#F8F9F9">
      <div class="triangle">


      </div>
      <br>
      <center>
        <h1> EVENTOS</h1>
      </center>
      <!--************************** CARRUSEL TRAE SOLO EVENTOS *******************************  -->

      <VueSlickCarousel v-bind="traeventos" class="carrusel">
        
        <div class="card-wrap" v-for="publieventos in publieventos" :key="publieventos.id" >
          <div class="card-header one">
            <b-img class="imgn" src="https://www.narava.es/10021-large_default/postal-bajo-la-lluvia.jpg"></b-img>
          </div>

          <b-card-text>
            <h6> Nombre:</h6>{{ publieventos.nombre_publicacion }}
            <H6> Tipo de publicacion: </H6> {{ publieventos.tipo }}
          </b-card-text>

          <md-button v-b-modal="'informacioneventos'" v-on:click="mostrareventos(publieventos)" target="_blank"
            class="md-primary md-round">Ver mas</md-button>
          <!-- <button @click="show = true" v-on:click="mostrarinformacion(publicacion)">Ir a publicacion </button> -->
        </div>
        

        <div></div>
        <div></div>
        <div></div>
        <div></div>

      </VueSlickCarousel>
      <br> <br>

      <center>
        <h1> NOTICIAS</h1>
      </center>
      <br>

      <!-- ************************** FIN CARRUSEL QUE TRAE SOLO EVENTOS *********************** -->

      <!--************************** CARRUSEL TRAE SOLO NOTICIAS *******************************  -->

      <VueSlickCarousel v-bind="traenoticias" class="carrusel">

        <div v-for="noticias in noticias" :key="(noticias)" class="card-wrap">
          <div class="card-header one">
            <b-img class="imgn" src="https://bgofigares.com/wp-content/uploads/2016/11/Roma-18-FB.jpg"></b-img>
          </div>

          <b-card-text>

            <h6> Nombre:</h6>{{ noticias.nombre_publicacion }}
            <H6> Tipo de publicacion: </H6> {{ noticias.tipo }}

          </b-card-text>
          <md-button v-b-modal="'informacionnoticias'" v-on:click="mostrarnoticias(noticias)" target="_blank"
            class="md-primary md-round">Ver mas</md-button>
          <!-- traemos  
              en este boton v-b-model titulo informacion v-on:click  metodo con el que se pide la informacion
              para este caso el id de la noticia -->



        </div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>


      </VueSlickCarousel>
      <!--********************** FIN CARRUSEL QUE TRAE SOLO NOTICIAS *******************************  -->



    </div>
    <!-- Portfolio section end -->
    <!-- About us section start -->
    <div class="section primary-section" id="about">
      <div class="triangle"></div>
      <div class="container">
      </div>
    </div>

    <!-- *********************************** MODAL 1 ********************************* -->


    <!-- *********************************** MODAL 2 ********************************* -->

    <div>
      <b-modal v-model="show1" id="informacioneventos">
        <template #modal-header class="modal-header">
          <h5>INFORMACION</h5>
        </template>
        <b-container fluid>

          <b-row class="my-2">
            <!--<b-col sm="3">-->

            <label for="nombre p">Nombre: <p for="numero p">{{ evento.nombre_publicacion }}</p></label>
            <label for="lugar p">lugar: <p for="numero p">{{ evento.lugar }}</p> </label>
            <label for="resp p">responsable: <p for="numero p">{{ evento.responsable }}</p></label>
            <label for="estado p">estado: <p for="numero p">{{ evento.estado }}</p></label>
            <label for="tipo p">Tipo: <p for="numero p">{{ evento.tipo }}</p></label>
            <label for="desc p">descripcion: <p for="numero p">{{ evento.descripcion_publicacion }}</p></label>


            <!-- </b-col>-->
            <!--

            <b-col sm="9">
            </b-col> -->

          </b-row>


        </b-container>
        <!-- ******** area de comentario EVENTOS******** -->
        <div>
          <div>
            <label>Sobre la publicacion selecciona:</label>
            <select v-model="formulariocomentario.clasificasion" name="clasificasion" id="clasificasion">
              <option value="Me gusta">Me gusta</option>
              <option value="No me gusta">No me gusta </option>
            </select>
          </div>
          <b-form-textarea id="textarea-state" v-model="formulariocomentario.contenido" :state="(text.length <= 250)"
            placeholder="escriba su comentario maximo 250 caracteres" rows="6" maxlength="250">
          </b-form-textarea>

        </div>

        <b-button>Guardar Comentario</b-button>
        <!-- ******** area de comentario EVENTOS ******** -->
        <template #modal-footer="{ close }" style="text-align: right; ">
          <div class="w-100">

            <md-button target="_blank" class="md-primary md-round float-left" @click="close()">Cerrar</md-button>
          </div>

        </template>

      </b-modal>
    </div>

    <!-- *********************************** FIN MODAL EVENTOS ********************************* -->
    <!-- *********************************** FIN MODAL EVENTOS ********************************* -->

    <!-- *********************************** MODAL NOTICIAS********************************* -->

    <div>
      <b-modal v-model="show2" id="informacionnoticias">

        <template #modal-header class="modal-header">
          <h5>INFORMACION</h5>


        </template>
        <b-container fluid>


          <b-row class="my-1">
            <label for="nombre_P">Nombre: <p for="nombre-P">{{ noticia.nombre_publicacion }}</p></label>
            <label for="lugar">lugar: <p for="lugar">{{ noticia.lugar }}</p></label>
            <label for="responsable">responsable: <p for="responsable">{{ noticia.responsable }}</p></label>
            <label for="estado">estado: <p for="estado">{{ noticia.estado }}</p> </label>
            <label for="tiop">Tipo: <p for="tipo">{{ noticia.tipo }}</p></label>
            <label for="descripcion">descripcion: <p for="descripcion">{{ noticia.descripcion_publicacion }}</p></label>

          </b-row>


        </b-container>
        <!-- ******** area de comentario NOTICIAS******** -->
         <!-- ******** area de comentario ******** -->
         <div>
                    <select v-model="formulariocomentario.clasificasion" name="clasificasion" id="clasificasion">
                        <option value="Me gusta">Me gusta</option>
                        <option value="No me gusta">No me gusta</option>

                    </select>
                    <b-form-textarea id="textarea-state" v-model="formulariocomentario.contenido"
                        :state="(text.length <= 250)" placeholder="escriba su comentario maximo 250 caracteres" rows="6"
                        maxlength="250">
                    </b-form-textarea>

                    <md-button style="margin-left:325px ;" target="_blank" class="md-primary md-round float-left"
                        @click="close()">Comentar</md-button>


                </div>
                <!-- ******** area de comentario ******** -->
                <template #modal-footer="{ close }" style="text-align: right;">
                    <div class="w-100">
                        <!-- <md-button target="_blank" class="md-primary md-round float-left" @click="close()">Cerrar</md-button> -->

                        <md-button class="md-just-icon md-simple md-primary" @click="close()">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="left">Close</md-tooltip>
                        </md-button>
                    </div>

                </template>
                
      </b-modal>

    </div>
    <!-- *********************************** FIN MODAL ********************************* -->

  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import VueLikeDislikeButtons from "vue-like-dislike-buttons";

import axios from "axios"
/** modal */

export default {

  name: 'App',


  data() {
    return {
      formulariocomentario: {
        comentario: null,
        clasificasion: null,
        id_usuario: null,
        id_publicacion: null,
      },
      usuarionombre: null,
      usuarioapellido: null,
      id_usuario: null,
      imagen1: {/* blankColor: '#777',*/ width: 75, height: 75, class: 'm1' },
      imagen2: { blankColor: '#777', width: 75, height: 75, class: 'm1' },
      text: '',
      evento: {}, /* variablr para guardar el OBJETO Evento de publicacion seleccionada */
      noticia: {}, /* variablr para traer nombre publicacion */
      /*descripcionp: null, /* variablr para traer la descripcion publicacion */
      /*direccionp: null, /* variablr para traer direccion de la publicacion */
      /* estadop: null, /* variablr para traer el estado de publicacion */
      /*encargadop: null, /* variablr para traer el encargado de publicacion */
      show1: false,
      show2: false,
      publieventos: null,
      noticias: null,
      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      headerBgVariant: '#9c27b0',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'warning',
      footerTextVariant: 'dark',
    
      showModal: false,

      traeventos: {
        "dots": true,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 200,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "touchThreshold": 5
      },
      traenoticias: {
        "dots": true,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 200,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "touchThreshold": 5
      },
    }

  },

  computed() {

  },

  components: {
    VueSlickCarousel,
    VueLikeDislikeButtons
  },
  /**/

  mounted() {
    this.id_usuario = sessionStorage.getItem("id")
    this.usuarionombre = sessionStorage.getItem("username")
    this.usuarioapellido = sessionStorage.getItem("apellido")
    axios.get('http://127.0.0.1:8000/api/eventos').then((response) => {
      console.log(response);
      this.publieventos = response.data;
    });

    axios.get('http://127.0.0.1:8000/api/noticias').then((response) => {
      console.log(response);
      this.noticias = response.data;
    });

  },
  methods: {
    guardarcomentario(idpublic) {
      let formulariocomentario = new FormData()
      formulariocomentario.append('id_publicacion', idpublic)
      formulariocomentario.append('id_usuario', this.id_usuario)
      formulariocomentario.append('contenido', this.contenido)
      formulariocomentario.append('clasificacion', this.clasificacion)
      axios.post('http://127.0.0.1:8000/api/comentarios', formulariocomentario).then((response) => {
        console.log(response);

      });
    },
    mostrareventos(objeto) {
      return this.evento = objeto;
    },

    mostrarnoticias(objeto2) {
      return this.noticia = objeto2;
    },


  },


}
</script>