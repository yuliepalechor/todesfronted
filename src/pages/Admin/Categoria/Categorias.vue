<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-button class="md-info" @click="NuevaCategoria()">Nueva Categoria </md-button>


        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Categorias</h4>
            <p class="category">Lista de Categorias</p>
          </md-card-header>
          <md-card-content id="tabla">

            <div>

            
              <b-form-input v-model="filter" type="search" placeholder="Buscar...">

              </b-form-input>
              <b-table :filter="filter" id:="tablaCategorias" :per-page="perpage" :current-page="currentPage" striped
                hover responsive class="mt-4" :fields="encabezado" :items="categoria">

                <template v-slot:cell(Editar)="row">
                  <md-button @click="editar(EditarCategoria(row.item.id))" class="md-just-icon md-simple md-primary">
                    <md-icon>edit</md-icon>
                    <md-tooltip md-direction="top">Edit</md-tooltip>
                  </md-button>


                </template>
                <template v-slot:cell(Eliminar)="row">
                  <md-button @click="EliminarCategoria(row.item.id)" class="md-just-icon md-simple md-danger">
                    <md-icon>close</md-icon>
                    <md-tooltip md-direction="top">Close</md-tooltip>
                  </md-button>
                </template>

                <template v-slot:cell(Asignar)="row">
                  <md-button @click="AsignarCategoria(row.item.id)" class="md-just-icon md-simple md-danger">
                    <md-icon>+</md-icon>
                    <md-tooltip md-direction="top">Asignar</md-tooltip>
                  </md-button>
                </template>




              </b-table>
              <b-pagination 
              v-model="currentPage"
               :total-rows="rows"
                :per-page="perpage"
                aria-controls="tablaCategorias">

              </b-pagination>

            </div>
          </md-card-content>
        </md-card>
      </div>


    </div>
  </div>
</template>

<script>

import { OrderedTable } from "@/components";
import axios from "axios";
import Swal from 'sweetalert2'
export default {
  name: "Categorias",

  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {

      categoria: [],
      filter: null,
      perpage: 10,
      currentPage: 1,

      encabezado: [
        { key: "id", label: "Id", },
        { key: "nombre", label: "Nombre" },
        { key: "descripcion", label: "Descripcion" },


        { key: "Editar", label: "Editar" },
        { key: "Eliminar", label: "Eliminar" },
        { key: "Asignar", label: "Asignar" },


      ],

    }
  },
  components: {

  },
  computed: {
    rows() {
      return this.categoria.length

    }
  },
  mounted() {
    this.getcategorias()
    this.EliminarCategoria(id)

  },

  methods: {

    getcategorias() {
      this.axios.get("http://127.0.0.1:8000/api/categoria").then((response) => {
        this.categoria = response.data;
      })
    },


    AsignarCategoria(id) {
      console.log(id)
      
      
    },

    NuevaCategoria() {

      this.$router.push(`NuevaCategoria`)
    },

    EditarCategoria(id) {

      this.$router.push(`EditarCategoria/${id}`)
    },

    GuardarCategoria() {
      this.axios.post("http://127.0.0.1:8000/api/categoria", this.cate).then((data) => {
        console.log(data);

        this.$router.push('/Categorias');
      });
    },

    EliminarCategoria(id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: 'Seguro desea eliminar la categoria?',
        text: "Esta accion no tiene reversa!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios.delete("http://127.0.0.1:8000/api/categoria/" + id).then((data) => {
            this.axios.get("http://127.0.0.1:8000/api/categoria").then((response) => {
            this.categoria = response.data;
      })
            this.categoria = response.data;
            console.log(data)
          });
         
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
         
        }
      })
    },

      

    
  



  }
}

</script>

<style>
.tabla1 {
  background-color: rgb(37, 202, 139);
}
</style>
