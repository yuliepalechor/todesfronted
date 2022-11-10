<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
      <md-button class="md-info" @click="NuevoEvento()" >Nuevo Evento</md-button>
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Eventos</h4>
            <p class="category">Lista de Eventos</p>
          </md-card-header>
          <md-card-content>
            <!--div  class="table-responsive table">
              <b-table class="fixed" :fields="encabezado" :items="categoria"></b-table>
            </div-->
            <div>
              <md-table v-model="categoria" :table-header-color="tableHeaderColor">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="id">{{ item.id }}</md-table-cell>
                  <md-table-cell md-label="Nombre">{{ item.nombre }}</md-table-cell>
                  <md-table-cell md-label="Descripcion">{{ item.descripcion }}</md-table-cell>
                  <md-table-cell md-label="Editar">
                    <md-button class="md-just-icon md-simple md-primary">
                      <md-icon>edit</md-icon>
                      <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>
                  </md-table-cell>
                  <md-table-cell md-label="Eliminar">
                    <md-button class="md-just-icon md-simple md-danger">
                      <md-icon>close</md-icon>
                      <md-tooltip md-direction="top">Close</md-tooltip>
                    </md-button>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </md-card-content>
        </md-card>
      </div>

      
    </div>
  </div>
</template>

<script>
import { SimpleTable,  } from "@/components";

export default {
name: "Eventos",
  data(){
          return {
            categoria:[],
            encabezado:[
        {key:"id",label:"Id"},
        {key:"nombre",label:"Nombre"},
       { key:"descripcion",label:"Descripcion"}],
          
          }},
        components:{

        },
        mounted(){
            this.geteventos()

            
            

        },
  components: {
    
    SimpleTable,
  },


  methods:{
    geteventos(){
                this.axios.get("http://127.0.0.1:8000/api/categoria").then((response)=>
                {
                   this.categoria=response.data;
                })
            },

  NuevoEvento(){
    this.$router.push('formEventos')
}


},
};
</script>
