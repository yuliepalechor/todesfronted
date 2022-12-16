<template class="body">
  <div>
    <navbarusuario></navbarusuario>


<center>
  <div>
    <img src="../../assets/img/eventoportada.jpg" width="40%" height="80%" length="" alt="Logo" />

  </div>

</center>
    <div style="background-color:#891A89" class="section primary-section" id="service">
    
      <div class="container">
    
    
        <div class="title">
         
      <h3> ¿Qué eventos hay disponibles?</h3>
      
        </div>
    
        <!--Simple description for section goes here. -->
    
      </div>
    
      <div class="a1">
        <div class="span4">
          
          <div class="centered1 service1">
            <div class="circle-border zoom-in">
              <img class="img-circle" src="../../assets/img/eventos.png" alt="service 1" >
            </div>
            
              <router-link style="color:#ffff" class="nav-link me-2" to="/EventosUsuario">
                   Eventos</router-link>
            
            <p>¿Qué publicaciones hay disponibles?</p>
          </div>
        
        </div>

        <div class="span4">
          <div class="centered1 service1">
            <div class="circle-border zoom-in">
              <img class="img-circle" src="../../assets/img/Noticia.png" alt="service 1">
            </div>
            <router-link style="color:#ffff" class="nav-link me-2" to="/NoticiasUsuario">
                  Noticias</router-link>
            <p>¿Quieres conocer los hechos más relevantes de tu comunidad?</p>
          </div>
        </div>
           
      </div>
    
    </div>

    <!-- ---------------------card --------------->

    <div class="bodcard">
      <div class="card" v-for="publicacion in publicacion" :key="publicacion.id">
        <div class="header">
          <b-img class="imgev" :src="`http://127.0.0.1:8000/storage/${publicacion.imagen}`"></b-img>
          <h3>{{ publicacion.nombre_publicacion }}</h3>

        </div>
        <div class="body1">
          <ul>
            <li>
              <H3> Tipo de publicacion: {{ publicacion.tipo }} </H3>
            </li>
            <li>
              <h3>Lugar: {{ publicacion.lugar }}</h3>

            </li>
            <li>
              <h3>Estado:{{ publicacion.estado }}</h3>

            </li>
          </ul>
        </div>
        <div class="footer">
          <ul>
            <li>
              <!-- <p>ver mas</p> -->

              <h3><i class="fa fa-arrow-circle-right" v-b-modal="'informacion'"
                  v-on:click="mostrarinformacion(publicacion)">ver mas </i> </h3>


            </li>

          </ul>
        </div>
      </div>
    </div>


    <!-- ------------fin card ------------->

    <div>
      <b-modal v-model="show1" id="informacion">
        <template #modal-header class="modal-header" style="background-color:#891489 ;">
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

              <p for="numero p">{{ evento.nombre_publicacion }}</p>

              <p for="numero p">{{ evento.lugar }}</p>
              <p for="numero p">{{ evento.responsable }}</p>
              <p for="numero p">{{ evento.estado }}</p>
              <p for="numero p">{{ evento.tipo }}</p>
              <p for="numero p">{{ evento.descripcion_publicacion }}</p>

            </b-col>

          </b-row>


        </b-container>
        <!-- ******** area de comentario ******** -->
        <div>


          <select v-model="clasificasion" name="clasificasion" id="clasificasion">
            <option value="Me interesa">Me gusta</option>
            <option value="No me interesa">No me gusta</option>

          </select>
          <b-form-textarea id="textarea-state" v-model="contenido" :state="(text.length <= 250)"
            placeholder="escriba su comentario maximo 250 caracteres" rows="6" maxlength="250">
          </b-form-textarea>
          <!-- <p for="numero p">{{evento.id}}</p> -->

          <md-button style="margin-left:320px;" target="_blank" class="md-pink md-round float-left"
            @click="guardarcomentario(evento.id)">Comentar</md-button>




        </div>
        <!-- ******** area de comentario ******** -->
        <template #modal-footer="{ close }" style="text-align: right;">

          <div class="w-100">
            <!-- <md-button target="_blank" class="md-primary md-round float-left" @click="close()">Cerrar</md-button> -->

          </div>



        </template>

      </b-modal>


    </div>
    
    <div class="section primary-section" id="about">
     
     
     <div class="container">
       <center>
       <div class="rowfin">

         
         
         <div class="col1-md-3">

           <ul class="list-unstyled mt-3">
             <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style="background-color: #54456b;">
               <i class="fab fa-facebook-f"></i>
             </button>
             <li><a href="https://es-la.facebook.com/MesaDiversidadPopayan/" class="text-white">Facebook</a></li>

           </ul>
         </div>
         <div class="col1-md-3">
           <ul class="list-unstyled mt-3">
             <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style="background-color: #54456b;">
               <i class="fab fa-instagram"></i>
               
             </button>
             <li><a href="https://instagram.com/alcaldiapopayan?igshid=YmMyMTA2M2Y=" class="text-white">Instagram</a>
             </li>
           </ul>
         </div>
         <div class="col1-md-3">
           <ul class="list-unstyled mt-3">
             <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style="background-color: #54456b;">
               <i class="fab fa-twitter"></i>
             </button>
             <li><a href="https://twitter.com/AlcaldiaPopayan" class="text-white">Twitter</a></li>
           </ul>
         </div>
       </div>

     </center>

     </div>
   </div>

  </div>
</template>

<script>
import axios from "axios"
import Swal from "sweetalert2";
export default {

  data() {
    return {
      // imagenPro: {width: 100, height: 100,class: 'm1' },
      formulariocomentario: {
        comentario: null,
        clasificasion: null,
        id_usuario: null,
        id_publicacion: null,
      },
      usuarionombre: null,
      usuarioapellido: null,
      id_usuario: null,

      publicacion: null,
      evento: {},
      show1: false,
      text: '',

      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      headerBgVariant: '#891489',
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
    this.id_usuario = sessionStorage.getItem("userid")
    this.usuarionombre = sessionStorage.getItem("username")
    this.usuarioapellido = sessionStorage.getItem("apellido")

    axios.get('https://proyectotodes-production.up.railway.app/api/eventos').then((response) => {
      console.log(response);
      this.publicacion = response.data;
    });


  },
  methods: {
    guardarcomentario(idpublic) {

      let formulariocomentario = new FormData()
      formulariocomentario.append('id_publicacion', idpublic)
      formulariocomentario.append('id_usuario', this.id_usuario)
      formulariocomentario.append('contenido', this.contenido)
      formulariocomentario.append('clasificasion', this.clasificasion)
      axios.post('https://proyectotodes-production.up.railway.app/api/comentarios', formulariocomentario).then((response) => {
        console.log(response);

      });
      Swal.fire({
          position: "center",
          icon: "success",
          title: "comentario Guardado",
          showConfirmButton: false,
          timer: 1500,
        });
        
    },
    mostrarinformacion(objeto) {
      return this.evento = objeto;
    },
  },



}

</script>

<style lang="scss" scoped>
// .eventosimg{
//   border: 1px solid #f5f5f5;
//   border-radius: 50px;
//   width: 100px;
//   height: 100px;
//   background-color: #d8d8d8;

// }
// .eventosimg img 
// {border-radius: 50%;
//   width: 10%;
//   height: 10%;
//  margin-left: 45%; 
//  margin-top: 0%; 
// }
// .eventosimg h3
// {
//   font-family: monospace;
//  font-size: 15px;
//   width: 15%; 
//  text-align: center;
//  margin-left: 42%;
//  margin-top: 10px;

// // }
// -------------------------
.a1{
 display: flex;
  
}
.circle-border {
    display: inline-flex;
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
    border-radius: 500px;
    -khtml-border-radius: 500px;
    border: 3px solid #fff;
    width: 40%;
    
    
}
.img-circle {
  -webkit-border-radius: 500px;
     -moz-border-radius: 500px;
          border-radius: 500px;
          
}

.centered1 {
  margin-left: 220px;
  margin-right: 20px;
  float: none;
  text-align: center;
}
.service1 p {
    padding: 0px 10px;
    height: 60px;
    margin-left: 2%;

}
.span4 {
    width: 50%;
    
  }

// .boton{
//   display: inline-block;
//   background-color: black;
//   padding: 1%;
//   text-align: center !important;
// }


.rowfin{
  
  display: flex;
 
}

.col1-md-3{
margin-left: 100%;


}

.imgportada{
  margin-left: 400px;
  width: 100%;
  height: auto;
  background-color: #c7c7c7;
 
}
//dvii
.primary-section .title {
  border-bottom: 1px solid rgb(216, 212, 212);
}

//card
.bodcard {
  margin-top: 1%;
  padding-left: 7%;
  padding-right: 5%;


}


.card {
  position: relative;
  height: 380px;
  display: inline-block;
  width: 300px;
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
  background-image: linear-gradient(to right, #00adb5, #00adb5);
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
  left: 70px;
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

.body1 {
  position: absolute;
  height: 126px;
  left: 5px;
  right: 5px;
  top: 55%;
  border-radius: 12px;
}

.body1 ul {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;

}

.body1 ul li {
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

.body1 ul li p,
h3,
i {
  position: relative;
}

.body1 ul li h3 {
  top: 20px;
  left: 20px;
  color: #000000;
  font-size: 15px;

}

.body1 ul li p {
  top: 14px;
  left: 59px;
  font-size: 12px;
  font-family: sans-serif;
  color: #16a085;
}

.body1 ul li i {
  left: 8px;
  top: 7px;
  color: #00adb5;
  font-size: 26px;
}

.body1 ul li:nth-child(1) {
  top: -16px;
}

.body1 ul li:nth-child(2) {
  top: 26px;
}

.body1 ul li:nth-child(3) {
  top: 68px;
}

.body1 ul li:nth-child(1) i {
  left: 12px;
}

.body1 li:hover {
  background-color: #00adb5;
  cursor: pointer;
}

.body1 li:hover i {
  color: #fff
}

.body1 li:hover h3 {
  color: #fff
}

.body1 li:hover p {
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
  background-image: linear-gradient(to right, #00adb5, #00adb5);
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
