<template>

  <div>

    <navbarusuario></navbarusuario>
    <div>
      <center><img src="../../assets/img/lgbtiq+.jpg" width="40%" height="150%" length="200" alt="Logo" margin="" />
      </center>
    </div>
    <div style="background-color:#891A89" class="section primary-section" id="service">



      <div class="a1">
        <div class="span4">
          <div class="centered service">
            <br><br>
            <h3>Noticias</h3>
            <p></p>
          </div>
        </div>
      </div>

    </div>
    <!---------------------- card ----------->
    <!-- <div class="bodycard">
            <div  v-for="noticias in noticias" :key="(noticias)" class="card-wrap">
            <div class="card-header one">
                <b-img class="imgn" :src="`http://127.0.0.1:8000/storage/${noticias.imagen}`"   ></b-img>
            </div>
            <div class="card-content">
                <b-card-text>
              
              <h6> Nombre:</h6>{{ noticias.nombre_publicacion }}
              <H6> Tipo de publicacion: </H6> {{ noticias.tipo }}

                    </b-card-text>
                    <md-button v-b-modal="'informacion2'" v-on:click="mostrarinformacion2(noticias)" target="_blank"
                        class="md-primary md-round">Ver mas</md-button>
                </div>
            </div>
        </div>
        </div> -->
    <div class="bodcard1">
      <div class="card1" v-for="noticias in noticias" :key="(noticias)">
        <div class="header">
          <b-img class="imgn" :src="`http://127.0.0.1:8000/storage/${noticias.imagen}`"   ></b-img>
          <h3>{{ noticias.nombre_publicacion }}</h3>
        </div>
        <div class="body2">
          <ul>
            <li>
              <H3> Tipo de publicacion: {{ noticias.tipo }} </H3>
            </li>
            <li>
              <h3>Lugar: {{ noticias.lugar }}</h3>
            </li>
            <li>
              <h3>Estado:{{ noticias.estado }}</h3>
            </li>
          </ul>
        </div>
        <div class="footer">
          <ul>
            <li>
              <h3><i class="fa fa-arrow-circle-right" v-b-modal="'informacion2'" v-on:click="mostrarinformacion2(noticias)">ver mas </i> </h3>
            </li>
            
          </ul>
        </div>
      </div>
    </div>

    <!-- ---------------------fincard -->

    <div>

      <b-modal v-model="show2" id="informacion2">

        <template #modal-header class="modal-header">
          <h5>INFORMACION</h5>

        </template>


        <b-container fluid>

          <b-row class="my-1">
            <b-col sm="3">

              <label for="numero p">Nombre: </label>
              <label for="numero p">lugar: </label>
              <label for="numero p">responsable:</label>
              <label for="numero p">estado: </label>
              <label for="numero p">Tipo:</label>
              <label for="numero p">descripcion:</label>

            </b-col>

            <b-col sm="9">

              <p for="numero p">{{ noticia.nombre_publicacion }}</p>

              <p for="numero p">{{ noticia.lugar }}</p>
              <p for="numero p">{{ noticia.responsable }}</p>
              <p for="numero p">{{ noticia.estado }}</p>
              <p for="numero p">{{ noticia.tipo }}</p>
              <p for="numero p">{{ noticia.descripcion_publicacion }}</p>

            </b-col>

          </b-row>


        </b-container>
        <!-- ******** area de comentario ******** -->
        <div>
          <select v-model="clasificacion" name="clasificasion" id="clasificasion">
            <option value="Me gusta">Me gusta</option>
            <option value="No me gusta">No me gusta</option>

          </select>
          <b-form-textarea id="textarea-state" v-model="contenido" :state="(text.length <= 250)"
            placeholder="escriba su comentario maximo 250 caracteres" rows="6" maxlength="250">
          </b-form-textarea>

          <md-button style="margin-left:320px;" target="_blank" class="md-pink md-round float-left"
            @click="guardarcomentario(noticia.id)">Comentar</md-button>


        </div>
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

    <!-- *********************************** MODAL ********************************* -->

  </div>
</template>
  
<script>

import axios from "axios"
/** modal */

export default {


  data() {
    return {
      formulariocomentario: {
        comentario: null,
        clasificasion: null,
        id_usuario: null,
        id_publicacion: null,
      },

      publicacion: null,
      noticia: {},
      noticias: {},
      show2: false,
      text: '',

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
    this.id_usuario = sessionStorage.getItem("id")
    this.usuarionombre = sessionStorage.getItem("username")
    this.usuarioapellido = sessionStorage.getItem("apellido")
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

    mostrarinformacion2(objeto2) {
      return this.noticia = objeto2;
    },


  },



}
</script>
<style>
.bodcard1 {
  margin-top: 1%;
  padding-left: 7%;
  padding-right: 5%;


}

.card1 {
  position: relative;
  height: 380px;
  width: 300px;
  display: inline-block;
  background-color: #fff;
  margin: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.header {
  position: absolute;
  height: 225px;
  width: 95%;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: -30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-image: linear-gradient(to right, #891A89, #891A89);
}

.header img {
  position: absolute;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  left: 90px;
  top: 22px;
}

.header h3 {
  position: absolute;
  font-family: sans-serif;
  color: white;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  top: 150px;
  left: 10px;
  text-transform: inherit;
}

.header p {
  position: absolute;
  font-family: sans-serif;
  color: rgb(236, 233, 233);
  font-size: 13px;
  top: 166px;
  left: 90px
}

.body2 {
  position: absolute;
  height: 126px;
  left: 5px;
  right: 5px;
  top: 55%;
  border-radius: 12px;
}

.body2 ul {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;

}

.body2 ul li {
  position: absolute;
  list-style: none;
  display: block;
  height: 40px;
  width: 100%;
  left: 0;
  right: 0;
  border-radius: 12px;
  background-color: transparent;
  transition: all .3s ease-in-out;
}

.body2 ul li p,
h3,
i {
  position: relative;
}

.body2 ul li h3 {
  top: 20px;
  left: 20px;
  color: #0c0c0c;
  font-size: 15px;

}

.body2 ul li p {
  top: 14px;
  left: 59px;
  font-size: 12px;
  font-family: sans-serif;
  color: #891A89;
}

.body2 ul li i {
  left: 8px;
  top: 7px;
  color: #891A89;
  font-size: 26px;
}

.body2 ul li:nth-child(1) {
  top: -16px;
}

.body2 ul li:nth-child(2) {
  top: 26px;
}

.body2 ul li:nth-child(3) {
  top: 68px;
}

.body2 ul li:nth-child(1) i {
  left: 12px;
}

.body2 li:hover {
  background-color: #891A89;
  cursor: pointer;
}

.body2 li:hover i {
  color: #fff
}

.body2 li:hover h3 {
  color: #fff
}

.body2 li:hover p {
  color: #fff
}

/*footer*/

.footer {
  position: absolute;
  height: 80px;
  bottom: -30px;
  left: 0;
  right: 0;
  border-radius: 12px;
  width: 95%;
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-image: linear-gradient(to right, #891A89, #891A89);
}

.footer ul {
  position: absolute;
  left: -60px;
}

.footer ul li {
  display: inline-block;
  margin-left: 60px;
}

.footer ul li i {
  margin-top: 10%;
  font-size: 20px;
  letter-spacing: 1px;
  color: rgb(248, 248, 248);
  transition: all .3s ease-in;
}

.footer ul li h3 {
  margin-top: 25%;

}

.footer ul li:hover i {
  transform: scale(0.9);
  color: #fff;
  cursor: pointer;
}

.credit a {
  text-decoration: none;
  color: #fff;

}

.credit {
  text-align: center;
}
</style>