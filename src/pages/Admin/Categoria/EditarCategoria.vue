<template>
   

    <form class="formulario">
      <md-card>
        <md-card-header data-background-color="blue">
          <h4 class="title">Categoria</h4>
          <p class="category">Nueva Categoria</p>
        </md-card-header>
  
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Categoria</label>
                <md-input v-model="form.nombre" type="text"></md-input>
              </md-field>
            </div>
           
            
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Descripcion</label>
                <md-input v-model="form.descripcion" type="text"></md-input>
              </md-field>
            </div>
            
           
            <div class="md-layout-item md-size-100 text-right">
              <md-button class="md-info" @click="ActualizarCategoria()" >Publicar</md-button>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
    </template>
    
<script>
import axios from "axios"
export default {
    name:"EditarCategoria",
    data(){
        return{
            form:{
                nombre:"",   // aqui se inicializa lo que  hace la conexion   de html con js
                descripcion:"",
            }
          
        }
    },
    mounted() {
        this.mostrar()
    },
    methods: {
       async mostrar() {
           await this.axios
                .get("http://127.0.0.1:8000/api/categoria/" + this.$route.params.id)
                .then((data) => {
                    this.form.nombre = data.data[0].nombre;
                    this.form.descripcion = data.data[0].descripcion;

                }).catch(error=>{
            console.log(error)
        });
        },


        async ActualizarCategoria() {
            await this.axios
                .put("http://127.0.0.1:8000/api/categoria/" + this.$route.params.id, this.form)
                .then((data) => {
                    this.$router.push("/Categorias")
                }).catch(error=>{
            console.log(error)
        });
        },



        catch(e) {
            console.log(e.response);
        },
    },
}
</script>
    
<style>
.formulario {
  width: 70%;
  padding-right: 10px;
  padding-left: 100px;



}
</style>