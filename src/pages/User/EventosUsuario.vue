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
         
               <h3>Eventos</h3>
               
             </div>
           </div>
         </div>

 </div>
       
      <!-- ---------------------card --------------->
       <div class="card-wrap" v-for="publicacion in publicacion" :key="publicacion.id">
         <div class="card-header one">
           <b-img class="imgev" src="https://picsum.photos/300/150/?image=41"   ></b-img>
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
           <div>
       <select v-model="formulariocomentario.clasificasion" name="clasificasion" id="clasificasion">
         <option value="Me gusta">Me gusta</option>
         <option value="No me gusta">No me gusta</option>
         
       </select>
       <b-form-textarea id="textarea-state" v-model="formulariocomentario.contenido" :state="(text.length <= 250)"
         placeholder="escriba su comentario maximo 250 caracteres" rows="6" maxlength="250">
       </b-form-textarea>
       
       
            
         
     </div>
           <!-- ******** area de comentario ******** -->
           <template #modal-footer="{ close }" style="text-align: right;">
             
               <div class="boton">
               <md-button style="margin-right:160px ;" target="_blank" class="md-primary md-round float-left" @click="close()">Cerrar</md-button>
               <md-button  target="_blank" class="md-primary md-round float-left" @click="close()">Comentar</md-button>
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
   formulariocomentario:{
     comentario:null,
     clasificasion:null,
   },
   usuarionombre: null,
   usuarioapellido: null,
   id_usuario:null,

   publicacion: null,
   evento: {},
   show1: false,
   text:'',
   
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


 axios.get('http://127.0.0.1:8000/api/eventos').then((response) => {
   console.log(response);
   this.publicacion = response.data;
 });



},
methods: {
 guardarcomentario(idpublic){
   axios.post('http://127.0.0.1:8000/api/comentarios',formulariocomentario).then((response) => {
   console.log(response);
   
 });
 },
 mostrarinformacion(objeto) {
   return this.evento = objeto;
 },
},




}


</script>

<style lang="scss" scoped>
.imgev{
border-radius:100%; width:50%; height: 50%;
}
// .boton{
//   display: inline-block;
//   background-color: black;
//   padding: 1%;
//   text-align: center !important;
// }
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
//dvii
.primary-section .title {
border-bottom: 1px solid rgb(216, 212, 212);
}
//card
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
     line-height: 80px;
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
 height: 200px;
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
 --card1-gradient-color1: #1a6089;
 --card1-gradient-color2: #1a8929;
 --card2-gradient-color1: #7F00FF;
 --card2-gradient-color2: #E100FF;
 --card3-gradient-color1: #3f2b96;
 --card3-gradient-color2: #a8c0ff;
 --card4-gradient-color1: #11998e;
 --card4-gradient-color2: #38ef7d;
}




</style>