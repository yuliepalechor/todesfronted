<template>
   

    <form class="formulario">
      <md-card>
        <md-card-header data-background-color="blue">
          <h4 class="title">Categoria</h4>
          <p class="category">Nueva Categoria</p>
        </md-card-header>
  
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Categoria</label>
                <md-input v-model="form.nombre" type="text"></md-input>
              </md-field>
            </div>
           
            
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Descripcion</label>
                <md-input v-model="form.descripcion" type="text"></md-input>
              </md-field>
            </div>
            
           
            <div class="md-layout-item md-size-100 text-right">
              <md-button class="md-info" @click="GuardarCategoria()" >Publicar</md-button>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
    </template>
    
<script>
import axios from "axios"
import Swal from "sweetalert2";
export default {
    name:"NuevaCategoria",
    data(){
        return{
            form:{
                nombre:"",   // aqui se inicializa lo que  hace la conexion   de html con js
                descripcion:"",
            }
          
        }
    },
    methods:{
      async GuardarCategoria(){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Categoria Guardada",
          showConfirmButton: false,
          timer: 1500,
        });
        await this.axios.post("http://127.0.0.1:8000/api/categoria",this.form).then((data)=>
         {console.log(data);
        }).catch(error=>{
            console.log(error)
        });
      },

    
    }
}
</script>
    
<style>
    .formulario{
      width: 70%;
      padding-right: 10px;
      padding-left: 100px;
     
    
      
    }
      
    
    </style>