<template>

    <div>

        <navbarusuario></navbarusuario>
        <div>
            <center><img src="../../assets/img/lgbtiq+.jpg" width="40%" height="150%" length="200" alt="Logo" margin="" /></center>
        </div>
        <div style="background-color:#891A89" class="section primary-section" id="service">
      
      

      <div class="a1">
        <div class="span4">
          <div class="centered service">
            <br><br>
            <h3 >Noticias</h3>
            <p></p>
          </div>
        </div>
      </div>

    </div>
        <!---------------------- card ----------->
        <div class="bodycard">
            <div  v-for="noticias in noticias" :key="(noticias)" class="card-wrap">
            <div class="card-header one">
                <b-img class="imgn" src="https://bgofigares.com/wp-content/uploads/2016/11/Roma-18-FB.jpg"   ></b-img>
            </div>
            <div class="card-content">
                <b-card-text>
              <!-- <H6> Publicacion N°: </H6> {{ noticias.id }} -->
              <h6> Nombre:</h6>{{ noticias.nombre_publicacion }}
              <H6> Tipo de publicacion: </H6> {{ noticias.tipo }}

            </b-card-text>
            <md-button v-b-modal="'informacion2'" v-on:click="mostrarinformacion2(noticias)" target="_blank" class="md-primary md-round" >Ver mas</md-button>
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
        
                            <p for="numero p">{{noticia.nombre_publicacion}}</p>
        
                            <p for="numero p">{{noticia.lugar}}</p>
                            <p for="numero p">{{noticia.responsable}}</p>
                            <p for="numero p">{{noticia.estado}}</p>
                            <p for="numero p">{{noticia.tipo}}</p>
                            <p for="numero p">{{noticia.descripcion_publicacion}}</p>
        
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

.imgn{
  border-radius:100%; width:50%; 
}
.primary-section,
.primary-section .title p,
.primary-section h3 {
  color: #e6e7e7;
}

/* .bodycard{
    background-color: #3f2b96;
} */


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
    --card1-gradient-color1: #891A89;
    --card1-gradient-color2: #891A89;
    --card2-gradient-color1: #00ADB5;
    --card2-gradient-color2: #00ADB5;
    --card3-gradient-color1: #3f2b96;
    --card3-gradient-color2: #a8c0ff;
    --card4-gradient-color1: #11998e;
    --card4-gradient-color2: #38ef7d;
}
</style>