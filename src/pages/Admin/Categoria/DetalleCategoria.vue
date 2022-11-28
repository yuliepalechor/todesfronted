<template>

  <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
    <md-card>
      <md-card-header data-background-color="blue">
        <h4 class="title">Categoria Asignada</h4>

      </md-card-header>
      <md-card-content>
        <table striped hover responsive class="mt-4" >
          <thead>
            <b-button variant="danger" size="sm" @click="NuevaCategoria()">Nuevo</b-button>
             
            <tr class="text">
              <th>ID</th>
              <th>Prioridad</th>
              <th>Categoria</th>
              <th>Descripcion de la Categoria</th>
           
            </tr>


          </thead>
          <tbody>
            <tr v-for="detalle in detalles" :key="detalle.id">
              <td v-text="detalle.id_detalle"></td> 
              <td v-text="detalle.Prioridad_detallle"></td>
              <td v-text="detalle.Nombresdecategorias"></td>
              <td v-text="detalle.Descripciodecategorias"></td>
              
            </tr>
          </tbody>


        </table>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Inicio",
  data() {
    return {
      detalles: null,
    };
  },
  mounted() {
    this.axios
      .get(
        "http://127.0.0.1:8000/api/detalle_categoria/" + this.$route.params.id
      )
      .then((response) => {

        this.$router.push("EditarPEventos");
        this.detalles = response.data;
      });
  },
  methods: {


    NuevaCategoria() {
      alert(this.$route.params.id);
      
      this.$router.push(`/Categoriasdetalles/${this.$router.params.id}`);
      this.$router.push({name:'DetalleCategoria',params :{id:id}})
      
    },
    mostrar() {
      alert(this.$route.params.id);
      this.axios
        .get(
          "http://127.0.0.1:8000/api/detalle_categoria/" + this.$route.params.id
        )
        .then((data) => { });
    },


  },
};
</script>
<style>
.text{
  text-align: center;

  
}
</style>