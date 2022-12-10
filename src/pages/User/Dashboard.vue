<template>
  <div>
    <navbarusuario></navbarusuario>


    <!-- Start home section -->

    <center><img src="../../assets/img/lgbtiq+.jpg" width="40%" height="150%" length="200" alt="Logo" /> </center>

    <!-- End home section -->
    <!-- Service section start -->
    <div style="background-color:#891A89" class="section primary-section" id="service">

      <div class="container">


        <div class="title">
          <!-- 
            EN ESTE ESPACIO QUE ES LA PARTE INTERMEDIA VA LOGOS 
        -->
        </div>

        <!--Simple description for section goes here. -->

      </div>

      <div class="a1">
        <div class="span4">
          <!--
          EN ESTE ESPACIO QUE ES LA PARTE INTERMEDIA VA LOGOS 
          -->
        </div>

      </div>

    </div>

    <div class="section secondary-section" style="background-color:#F8F9F9">
      <div class="triangle">


      </div>
      <br>
      <center>
        <h1> EVENTOS</h1>
      </center>
      <!--************************** CARRUSEL TRAE SOLO EVENTOS *******************************  -->

      <VueSlickCarousel v-bind="traeventos" class="carrusel">

        <div class="card-wrap" v-for="publieventos in publieventos" :key="publieventos.id">
          <div class="card-header one">
            <b-img class="imgn" :src="`http://127.0.0.1:8000/storage/${publieventos.imagen}`"></b-img>
            <!--CAMBIO EN ESTE CAMPO TRAE IMAGEN DE CADA EVENTO REALIZADO-->
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
            <b-img class="imgn" :src="`http://127.0.0.1:8000/storage/${noticias.imagen}`"></b-img>
            <!--CAMBIO EN ESTE CAMPO TRAE IMAGEN DE CADA NOTICIA REALIZADA-->
          </div>

          <b-card-text>

            <h6> Nombre:</h6>{{ noticias.nombre_publicacion }}
            <H6> Tipo de publicacion: </H6> {{ noticias.tipo }}

          </b-card-text>
          <md-button v-b-modal="'informacionnoticias'" v-on:click="mostrarnoticias(noticias)" target="_blank"
            class="md-primary md-round">Ver mas</md-button>
          <!-- traemos  
              en este boton v-b-model titulo informacion v-on:click  metodo con el que se pide la informacion
              para este caso el NOMBRE Y TIPO de la noticia -->

        </div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>

      </VueSlickCarousel>

    </div>
    <!--********************** FIN CARRUSEL QUE TRAE SOLO NOTICIAS *******************************  -->


    <div class="section primary-section" id="about">
      <div class="triangle"></div>
      <div class="container">
      </div>
    </div>

    <!-- *********************************** MODAL 1 EVENTOS ********************************* -->

    <div>
      <b-modal v-model="show1" id="informacioneventos">
        <template #modal-header class="modal-header">
          <h5>INFORMACION</h5>
        </template>
        <b-container fluid>

          <b-row class="my-2">

            <label for="nombre p">Nombre: <p for="numero p">{{ evento.nombre_publicacion }}</p></label>
            <label for="lugar p">lugar: <p for="numero p">{{ evento.lugar }}</p> </label>
            <label for="resp p">responsable: <p for="numero p">{{ evento.responsable }}</p></label>
            <label for="estado p">estado: <p for="numero p">{{ evento.estado }}</p></label>
            <label for="tipo p">Tipo: <p for="numero p">{{ evento.tipo }}</p></label>
            <label for="desc p">descripcion: <p for="numero p">{{ evento.descripcion_publicacion }}</p></label>

          </b-row>
        </b-container>

        <!-- **********************************  AREA DE CALIFICACION EVENTOS ************************************************* -->
        <div>
          <div>
            <label>Sobre la publicacion selecciona:</label>
            <select v-model="formulariocomentario.clasificasion" name="clasificasion" id="clasificasion">
              <option value="Me gusta">Me gusta</option>
              <option value="No me gusta">No me gusta </option>
            </select>
          </div>
          <!-- **********************************  AREA DE COMENTARIO  ************************************************* -->
          <b-form-textarea id="textarea-state" v-model="formulariocomentario.contenido" :state="(text.length <= 250)"
            placeholder="escriba su comentario maximo 250 caracteres" rows="6" maxlength="250">

          </b-form-textarea>

          <md-button style="margin-left:325px ;" target="_blank" class="md-primary md-round float-left"
            @click="close()">Comentar</md-button>

        </div>
        <!-- **********************************  BOTON DE GUARDADO  ************************************************* -->
        <template #modal-footer="{ close }" style="text-align: right;">
          <div class="w-100">

            <md-button class="md-just-icon md-simple md-primary" @click="close()">
              <md-icon>close</md-icon>
              <md-tooltip md-direction="left">Salir</md-tooltip>
            </md-button>
          </div>

        </template>

      </b-modal>
    </div>


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
          <!-- **********************************  AREA DE CALIFICACION  ************************************************* -->
          <div>
          <div>
            <label>Sobre la publicacion selecciona:</label>
            <select v-model="formulariocomentario.clasificasion" name="clasificasion" id="clasificasion">
              <option value="Me gusta">Me gusta</option>
              <option value="No me gusta">No me gusta </option>
            </select>
          </div>
          <!-- **********************************  AREA DE COMENTARIO  ************************************************* -->
          <b-form-textarea id="textarea-state" v-model="formulariocomentario.contenido" :state="(text.length <= 250)"
            placeholder="escriba su comentario maximo 250 caracteres" rows="6" maxlength="250">

          </b-form-textarea>

          <md-button style="margin-left:325px ;" target="_blank" class="md-primary md-round float-left"
            @click="close()">Comentar</md-button>

        </div>
        <!-- **********************************  BOTON DE GUARDADO  ************************************************* -->
        <template #modal-footer="{ close }" style="text-align: right;">
          <div class="w-100">

            <md-button class="md-just-icon md-simple md-primary" @click="close()">
              <md-icon>close</md-icon>
              <md-tooltip md-direction="left">Salir</md-tooltip>
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

<!-- A CONTINUACION ESTILOS-->

<style>
/**EMERGENTE */

button {
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 15px;
  display: block;
  padding: 10px 15px;
  background-image: linear-gradient(to right rgb(145, 5, 5), #9c27b0);
  color: white;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background: rgba(212, 194, 194, 0.4);

}

button:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.8);
}

.modal1 {
  height: 40%;
  width: 60%;
  position: absolute;
  top: 30%;
  left: 20%;
  transform: translate(1%, 1%);
  background: #9c27b0;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  z-index: 101
}

/** EMERGENTE */

.my-2 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: 100%;
}

.slick-slider[data-v-3d1a4f76] {
  position: relative;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;

}

.da-slide {
  height: 100px;
}

.carrusel {
  width: 100%;
  height: 500px;

}

.navbar {
  background: #891A89;
  margin-bottom: 0;
  min-height: 70px;
}

.navbar-fixed-top {
  min-height: 60px;
  height: 60px;
  padding-top: 0;
}


.title {
  height: 100%;
  width: 100%;
  float: inline-start;
  align-items: center;

}


.navbar-inner {
  background: #891A89;
  border-radius: 0;
  filter: none;
  border: none;
  box-shadow: none;
}

.navbar .brand img {
  width: 120px;
  height: 40px;
}

.navbar .nav>li>a {
  text-transform: uppercase;
  line-height: auto;
  vertical-align: middle;
  margin: 10px 3px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  border: 1px solid #181A1C;
  box-shadow: none;
  font-size: 15px;
  text-shadow: none;
  color: #fff;
  transition: border-color 1s ease;
}

.navbar .nav>li:hover>a,
.navbar .nav>.active>a,
.navbar .nav>.active>a:hover,
.navbar .nav>.active>a:focus {
  border: 1px solid #FECE1A;
  color: #fff;
  background-color: #181A1C;
  transition: border-color 1s ease;
}

.nav-pills {
  margin-bottom: 30px;
}

.nav-pills>li>a {
  background: transparent;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  margin-right: 5px;
  padding-left: 25px;
  padding-right: 25px;
  border: 1px solid #181A1C;
}

.nav-pills>li>a:hover,
.nav-pills>.active>a,
.nav-pills>.active>a:hover,
.nav-pills>.active>a:focus {
  background: #181A1C;
  color: #fff;
}

.navbar .btn-navbar:hover,
.navbar .btn-navbar {
  border-radius: 0;

  color: #000;
}

/******
2. Layout
**********************************************************************/
.centered {
  margin-left: auto;
  margin-right: auto;
  float: none;
  text-align: center;
}



.highlighted-box {
  background: #F4F8F9;
  padding: 20px 30px;
}

.highlighted-box h1 {
  margin: 0px;
}

.large-text {
  line-height: 1.2em;
  font-size: 30px;
  color: #181A1C;
  padding: 20px;
  margin-bottom: 20px;
}

.highlighted-box h1,
.highlighted-box p {
  color: #181A1C !important;
}

.circle-border {
  display: inline-block;
  -webkit-border-radius: 500px;
  -moz-border-radius: 500px;
  border-radius: 500px;
  -khtml-border-radius: 500px;
  border: 3px solid #fff;
}

.left-align {
  text-align: left;
}

.right-align {
  text-align: left;
}



.invisible {
  display: none;
  visibility: visible;
}

/*
2.1 Animations
**********/
.zoom-in {
  -webkit-transform: scale(1, 1);
  -moz-transform: scale(1, 1);
  -o-transform: scale(1, 1);
  -ms-transform: scale(1, 1);
  -webkit-transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
  transition: all 250ms ease;
}

.zoom-in:hover {
  -webkit-transform: scale(1.1, 1.1);
  -moz-transform: scale(1.1, 1.1);
  -o-transform: scale(1.1, 1.1);
  -ms-transform: scale(1.1, 1.1);
}

/*
2.2 Buttons - There are buttons on a transparent background, primary and secondary color background.
*/
.button,
.button:visited,
.button:focus {
  display: inline-block;
  border: 1px solid #181A1C;
  color: #181A1C;
  background-color: transparent;
  padding: 15px 30px;
  font-size: 17px;
  line-height: auto;
}

.button:hover,
.button:active {
  background-color: #181A1C;
  color: #fff;
}


.button-sp,
.button-sp:visited,
.button-sp:focus {
  border: none;
  background-color: #FECE1A;
  color: #181A1C;
}

.button-sp:hover,
.button-sp:active {
  background-color: #181A1C;
  color: #FECE1A;
}

.button-ps,
.button-ps:visited,
.button-ps:focus {
  border: none;
  background-color: #181A1C;
  color: #FECE1A;
}

.button-ps:hover,
.button-ps:active {
  background-color: #FECE1A;
  color: #181A1C;
}

/*
2.3 Thumbnails - Predefined bootstrap's thumbnail class. */

.thumbnail {
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  position: relative;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  text-align: center;
  background: #191a1c;
}

.thumbnail .more {
  display: block;
  z-index: 4;
  position: absolute;
  top: -100px;
  left: 50%;
  margin: 0 auto;
  margin-left: -41px;
  width: 80px;
  height: 80px;
  font-size: 40px;
  color: #fff;
  text-decoration: none;
  line-height: 70px;
  text-align: center;
}

.thumbnail:hover .more {
  top: 40%;
  margin-top: -40px;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3 s ease-out;
  -ms-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.thumbnail h3,
.thumbnail p {
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 4;
}

.thumbnail h3 {
  color: #FECE1A;
  margin-top: 10px;
  font-size: 20px;
}

.thumbnail>p {
  padding-bottom: 20px;
}

.thumbnail .mask {
  opacity: 0.85;
  filter: alpha(opacity=85);
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #181A1C;
  position: absolute;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2 s ease-out;
  -ms-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.thumbnail:hover .mask {
  top: 0;
}

/*
2.4 Socail icons
*/
.social {
  list-style: none;
  float: none;
  position: relative;
  margin: 5px;
}

.social li {
  display: inline-block;
  line-height: 32px;
  font-family: 'Porta';
  font-size: 32px;
  padding: 0 5px;
}

.social li a {
  margin: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  color: #FECE1A;
}

.social li a:hover {
  color: #181A1C;
}

/*
3. Sections 
***************************************************************************/
.section {
  padding-bottom: 50px;
}

.section .container {
  padding-top: 50px;
}

.section .title {
  text-align: center;
  padding: 10px;
  margin-bottom: 30px;
}

.section .title>p {
  font-size: 20px;
  color: #FFF;
  font-weight: lighter;
}

.primary-section {
  margin-top: 5px;
  background: #00ADB5;
}

.primary-section .triangle {
  border-top: 40px solid #00ADB5;
}

.primary-section .title {
  border-bottom: 1px solid rgb(216, 212, 212);
}

.primary-section,
.primary-section .title p,
.primary-section h3 {
  color: #00ADB5;
}


.secondary-section {
  background: #891A89;
}

.secondary-section .title {
  border-bottom: 1px solid #181A1C;
}

.secondary-section h1,
.secondary-section .title p {
  color: #181A1C;
}

/* Third section use bacground image */

.third-section .container {
  padding-top: 20px;
  position: relative;
}


.newsletter .title h2 {
  text-align: left;
  padding: 0;
  margin: 0;
}

.newsletter form {
  text-align: right;
}

.newsletter input {
  margin-top: 10px;
  padding: 15px;
  height: auto;
}

.newsletter button {
  margin: 0 0 0 20px;
}

.newsletter .button-sp:hover,
.newsletter .button-sp:active {
  background-color: #FFF;
  color: #181A1C;
}

/*
3.7 Contact */

.contact {
  background: #FECE1A;
}

.contact h1,
.contact h2,
.contact h3,
.contact h4,
.contact h5,
.contact h6,
.contact .section .title>p,
.contact .social>li>a {
  color: #181A1C;
}

.contact textarea,
.contact input[type="text"],
.contact input[type="email"] {
  padding: 10px;
  line-height: 20px;
  height: auto;
}

.contact textarea {
  height: 120px;
}

.contacts,
.contact .social {
  color: #fff;
  list-style: none;
  margin-left: 10px;
}

.contacts>li {
  margin-top: 15px;
}

.contacts>li>a {
  color: #fff;
}

.contact-info {
  margin-top: 10px;
  margin-bottom: 10px;
}

.contact-info p {
  font-weight: normal;
}

.contact-info .icon {
  margin: 10px auto;
  font-size: 30px;
}

.map-wrapper {
  position: relative;
  height: 500px;
}

.map-canvas {
  position: absolute;
  margin-bottom: 20px;
  width: 100%;
  height: 500px;
  color: #29383F;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
}

.contact .social {
  display: inline-block;
  margin-left: 0;
}

.contact .social li {
  line-height: 32px;
  padding: 10px 10px;
  font-family: 'Porta';
  font-size: 50px;
  transition: margin 0.4s;
  -webkit-transition: margin 0.4s;
}

.contact .social li a {
  color: #fff;
}

.contact .social li a:hover {
  color: #181A1C;
}

.contact-form {
  background: #fff;
  background: rgba(255, 255, 255, 0.9);
  z-index: 110;
  position: relative;
  margin-top: -25px;
  padding: 20px;
}

.contact-form h3 {
  color: #838589;
  padding-bottom: 20px;
}

.message-btn {
  border: 1px solid #747C89;
  color: #747C89;
  background-color: transparent;
  padding: 15px 30px;
  font-size: 17px;
}

.message-btn:hover {
  background-color: #FECE1A;
}

.contact-info {
  text-align: center;
  font-size: 22px;
}

.info-mail {
  border: 1px solid white;
  width: 60%;
  margin: 0 auto;
  padding: 15px;
  color: #181A1C;
}

.black {
  color: #181A1C;
}

/*
3.8 Footer
********************************************************************/
.footer {
  background: #181A1C;
  text-align: center;
}

.footer>p {
  color: #fff;
  margin: 0;
}

.footer a {
  color: #FECE1A;
}

.footer a:hover,
.footer a:focus {
  text-decoration: underline;
}

.scrollup {
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  width: 39px;
  height: 39px;
  border-radius: 5px;
  font-size: 20px;
  position: fixed;
  bottom: 30px;
  right: 20px;
  border: 1px solid #fff;
  display: none;
  background: #FECE1A;
}

.scrollup>a {
  position: relative;
  top: 7px;
  color: #fff;
}

/*
4 Responsible
********************************************************************/
@media (min-width: 1200px) {
  .thumbnail .more {
    margin-left: -41px;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    line-height: 80px;
  }
}

@media (max-width: 979px) {
  body {
    padding-left: 0;
    padding-right: 0;
  }

  .navbar-fixed-top,
  .navbar-fixed-bottom {
    position: fixed;
  }

  .navbar .nav>li>a {
    line-height: 20px;
    vertical-align: middle;
  }

  .section {
    padding-left: 20px;
    padding-right: 20px;
  }

  .navbar-fixed-top,
  .navbar-fixed-bottom,
  .navbar-static-top {
    margin-left: 0px;
    margin-right: 0px;
  }

  .nav-collapse {
    clear: both;
  }

  .nav-collapse .nav {
    float: none;
    margin: 0 0 10px;
  }

  .nav-collapse .nav>li {
    float: none;
  }

  .nav-collapse,
  .nav-collapse.collapse {
    width: 100%;
    display: inherit;
  }

  .thumbnail .more {
    margin-left: -21px;
    width: 40px;
    height: 40px;
    border-radius: 30px;
    line-height: 40px;
  }

  .thumbnail:hover .more {
    margin-top: -20px;
  }

  .newsletter form {
    text-align: center;
  }
}

@media (max-width: 767px) {
  .info-mail {
    width: 90%;
    padding: 15px 0px;
  }

  .project-description {
    padding-left: 20px;
  }

  .price-column,
  .testimonial {
    margin-top: 30px;
  }
}

/** card yulie******************************** */
.imgn {
  border-radius: 100%;
  width: 50%;
}

.primary-section,
.primary-section .title p,
.primary-section h3 {
  color: #e6e7e7;
}

.thumbnail .mask {
  opacity: 0.85;
  filter: alpha(opacity=85);
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #181A1C;
  position: absolute;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2 s ease-out;
  -ms-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}



.third-section .container {
  padding-top: 20px;
  position: relative;
}




.map-wrapper {
  position: relative;
  height: 500px;
}


.contact-info {
  text-align: center;
  font-size: 22px;
}


/*
  4 Responsible
  ********************************************************************/
@media (min-width: 1200px) {
  .thumbnail .more {
    margin-left: -41px;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    line-height: 0px;
  }
}



@media (max-width: 767px) {
  .info-mail {
    width: 90%;
    padding: 15px 0px;
  }

  .project-description {
    padding-left: 20px;
  }

  .price-column,
  .testimonial {
    margin-top: 30px;
  }
}

@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap&#39;);

.card-wrap {
  width: 280px;
  background: #fff;
  border-radius: 20px;
  display: inline-block;
  margin: 20px;
  border: 5px solid #fff;
  overflow: hidden;
  color: var(--color-text);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.card-wrap:hover {
  transform: scale(1.1);
}

.card-header {
  height: 230px;
  width: 100%;
  background: red;
  border-radius: 100% 0% 100% 0% / 0% 50% 50% 100%;
  display: grid;
  place-items: center;

}

.card-header i {
  color: #fff;
  font-size: 72px;
}

.card-btn {
  border: none;
  border-radius: 100px;
  padding: 5px 30px;
  color: #fff;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.card-header.one {
  background: linear-gradient(to bottom left, var(--card1-gradient-color1), var(--card1-gradient-color2));
}

.card-btn.one {
  background: linear-gradient(to left, var(--card1-gradient-color1), var(--card1-gradient-color2));
}

:root {
  --color-text: #616161;
  --color-text-btn: #ffffff;
  --card1-gradient-color1: #891A89;
  --card1-gradient-color2: #891A89;
  --card2-gradient-color1: #7F00FF;
  --card2-gradient-color2: #E100FF;
  --card3-gradient-color1: #3f2b96;
  --card3-gradient-color2: #a8c0ff;
  --card4-gradient-color1: #11998e;
  --card4-gradient-color2: #38ef7d;
}
</style>