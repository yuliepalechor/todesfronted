<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
      
       <md-button class="md-info" @click="NuevoUsuario()" >Registrar Usuario </md-button>
    
        <md-card>
          
          <md-card-header data-background-color="blue">
            <h4 class="title">Usuarios</h4>
            <p class="category">Lista de Usuarios</p>
          </md-card-header>
          <md-card-content id="tabla"> 
      

        <div>
            <!-- <md-table v-model="usuario" :table-header-color="tableHeaderColor">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="id">{{ item.id }}</md-table-cell>
                <md-table-cell md-label="dentificacion">{{ item.identificacion }}</md-table-cell>
                <md-table-cell md-label="nombre">{{ item.nombre }}</md-table-cell>
                <md-table-cell md-label="apellidos">{{ item.apellidos }}</md-table-cell>
                <md-table-cell md-label="genero">{{ item.genero }}</md-table-cell>
                <md-table-cell md-label="fecha_nacimiento">{{ item.fecha_nacimiento }}</md-table-cell>
                <md-table-cell md-label="email">{{ item.email }}</md-table-cell>
                <md-table-cell md-label="Editar">
                  <md-button class="md-just-icon md-simple md-primary">
                    <md-icon @click="EditarUsuario()">edit</md-icon>
                    <md-tooltip md-direction="top">Edit</md-tooltip>
                  </md-button>
                </md-table-cell>
                <md-table-cell md-label="eliminar">
                  <md-button class="md-just-icon md-simple md-danger">
                    <md-icon>close</md-icon>
                    <md-tooltip md-direction="top">Close</md-tooltip>
                  </md-button>
                </md-table-cell>
              </md-table-row>
            </md-table> -->
            <b-form-input v-model="filter" type="search" placeholder="Buscar...">
            
            </b-form-input>
 

            <b-table :filter="filter" id:="tablaUsuarios" :per-page="perpage" :current-page="currentPage" striped  hover responsive  class="mt-4" :fields="encabezado" :items="usuario" >
            
              <template v-slot:cell(Editar)="row">
                <md-button  @click="Editar(EditarUsuario(row.item.id))" class="md-just-icon md-simple md-primary">
                    <md-icon>edit</md-icon>
                    <md-tooltip md-direction="top">Edit</md-tooltip>
                  </md-button>
              </template>
              <template  v-slot:cell(Eliminar)="row">
                <md-button  @click="EliminarUsuario(row.item.id)" class="md-just-icon md-simple md-danger">
                    <md-icon>close</md-icon>
                    <md-tooltip md-direction="top">Close</md-tooltip>
                  </md-button>
              </template>
              
                
            </b-table>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perpage" aria-controls="tablaUsuarios"></b-pagination>
          </div>


          </md-card-content>
        </md-card>
      </div>

      
    </div>
  </div>
</template>

<script>
import { OrderedTable } from "@/components";
import axios from "axios"
import Swal from 'sweetalert2'
export default {
  name: "ListarUsuarios",
  data() {
    return {
      usuario: [],
      filter: null,
      perpage:10
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      ,
      currentPage:1,
      encabezado: [
        { key: "id", label: "Id" },
        { key: "identificacion", label: "Documento" },
        { key: "nombre", label: "Nombre" },
        { key: "apellidos", label: "Apellidos" },
        { key: "genero", label: "Genero" },
        { key: "fecha_nacimiento", label: "Fecha de Nacimiento" },
        { key: "email", label: "Correo Electronico" },
        { key: "Editar", label: "Editar" },
        { key: "Eliminar", label: "Eliminar" }
      ],
    }
  },
  components: {
  },
  mounted() {
    this.getusuarios()
   
  },
  computed: {
    rows() {
      return this.usuario.length

    }
  },
  methods: {
    getusuarios() {
      this.axios.get("https://proyectotodes-production.up.railway.app/api/usuario").then((response) => {
        this.usuario = response.data;
      })
    },
    NuevoUsuario() {
      this.$router.push("/NuevoUsuario")
    },

    EditarUsuario(id){
      this.$router.push(`/EditarUsuario/${id}`)

    },
    EliminarUsuario(id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Seguro desea eliminar registro ?',
        text: "Esta accion no tiene reversa!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar registro!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {

          this.axios.delete("https://proyectotodes-production.up.railway.app/api/usuario/" + id).then((response) => {

            this.axios.get("https://proyectotodes-production.up.railway.app/api/usuario").then((response) => {
            this.usuario = response.data;
      })



            this.publicacion = response.data;
            console.log(data)

          });
         
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
         
        }
      })




    }
    
  }
}
</script>
    
<style>

</style>