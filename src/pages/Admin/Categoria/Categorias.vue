<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
      <b-button @click="NuevaCategoria()">Nueva Categoria</b-button>
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Categorias</h4>
            <p class="category">Lista de Categorias</p>
          </md-card-header>
          <md-card-content id="tabla"> 
            <b-table id="tabla" :fields="encabezado" :items="categoria" responsive="sm" />
          </md-card-content>
        </md-card>
      </div>

      
    </div>
  </div>
</template>

<script>
import { OrderedTable } from "@/components";
import axios from "axios";
export default {
  data() {
    return {
      categoria: [],
      encabezado: [
        { key: "id", label: "Id" },
        { key: "nombre", label: "Nombre" },
        { key: "descripcion", label: "Descripcion" },
      ],
    };
  },
  mounted() {
    this.getcategorias();
  },
  methods:{

getcategorias(){
    axios.get("http://127.0.0.1:8000/api/categoria").then((response)=>
    {
       this.categoria=response.data;
    })

},
NuevaCategoria(){
    this.$router.push('NuevaCategoria')
}


},

};
</script>
<style>
.body{

width: 100vh;
}
#tabla{
  width: 50%;
}
</style>
