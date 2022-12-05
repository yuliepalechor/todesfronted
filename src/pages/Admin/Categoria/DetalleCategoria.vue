<template>
<div>
  <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
    <md-card>
      <md-card-header data-background-color="blue">
        <h4 class="title">Categoria Asignada</h4>

      </md-card-header>
      <md-card-content>
        <table striped hover responsive class="mt-4" >
          <thead>
            <!--<b-button variant="danger" size="sm" @click="NuevaCategoria()">Nuevo</b-button>-->
            <b-button @click="show=true" variant="primary">ASignar Nueva Categoria</b-button>
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
             
              <td v-text="detalle.Nombresdecategorias"></td>
              <td v-text="detalle.Descripciodecategorias"></td>
              
            </tr>
          </tbody>


        </table>
      </md-card-content>
    </md-card>
    <div>
  

    <b-modal size="xl"
      v-model="show"
      title="Modal Variants"
    >
      <b-container fluid>
        <table class="table table-bordered  table-striped">
  <thead>
  <tr>
  <th>ID</th>
  <th>Prioridad</th>
  <!--<th>Publicacion</th>-->
  <th>Categoria</th>
  <th>Descripcion de la Categoria</th>
  <th>Nueva Categoria</th>
  </tr>
  </thead>
  <tbody>
  <tr v-for="detalle in detalles" :key="detalle.id">
  <td v-text="detalle.id_detalle"></td>
  <!---<td v-text="detalle.Prioridad_detallle"></td>-->
  <td v-text="detalle.Prioridad_detallle"></td>
  <td v-text="detalle.Nombresdecategorias"></td>
  <td v-text="detalle.Descripciodecategorias"></td>
  <td>
  <b-button
  variant="danger"
  size="sm"
  @click="AsignarCategoria(detalle.id_detalle)"
  >Nuevo</b-button
  >
  </td>
  </tr>
  </tbody>

  
  </table>
      </b-container>

      <template #modal-footer>
        <div class="w-100">
         
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</div>
  </div>
  
</template>
<script>
import axios from "axios";
export default {
  name: "Inicio",
  data() {
    return {
      show: false,
      detalles: null,
      idparametro:null,

      formasignacion:{
        id_publicacion:null,
        id_categoria:null
      }
    };
  },
  mounted() {
    this.idparametro=this.$route.params.id
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

    AsignarCategoria(id) {


    alert()
    let formDatadetallecategoria = FormData();
        formDatadetallecategoria.append("id_publicacion",this.idparametro)
        alert(this.$route.params.id)
        formDatadetallecategoria.append("id_categoria",id)
     
      
      this.axios.post("http://127.0.0.1:8000/api/detalle_categoria",formDatadetallecategoria ).then((data) => {
          console.log(data);
  
          this.$router.push('/Categorias');
        });
      
     
      
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