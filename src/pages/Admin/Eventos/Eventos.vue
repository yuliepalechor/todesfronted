<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
      
      <md-button class="md-info" @click="insertar(NuevaCategoria())" >Nueva Publicacion</md-button>
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Publicaciones</h4>
            <p class="category">Lista de Publicaciones</p>
          </md-card-header>
          <md-card-content>
           
            <div >
              <!-- <md-table v-model="categoria" :table-header-color="tableHeaderColor" md-card md-sort="nombre" md-sort-order="asc">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
                  <md-table-cell md-label="Nombre">{{ item.nombre }}</md-table-cell>
                  <md-table-cell md-label="Descripcion">{{ item.descripcion }}</md-table-cell>
                  <md-table-cell md-label="Fecha y Hora">{{ item.fecha_y_Hora }}</md-table-cell>
                  <md-table-cell md-label="Lugar">{{ item.lugar }}</md-table-cell>
                  <md-table-cell md-label="Estado">{{ item.estado }}</md-table-cell>
                  <md-table-cell md-label="Url Externa">{{ item.urlExterna}}</md-table-cell>
                  <md-table-cell md-label="Responsable">{{ item.responsable }}</md-table-cell>
                  <md-table-cell md-label="Fecha Caducidad">{{ item.fecha_caducidad }}</md-table-cell>
                  <md-table-cell md-label="Tipo">{{ item.tipo }}</md-table-cell>

                  <md-table-cell md-label="Editar">
                    <md-button  @click="editar(editarpublicacion(item.id))" class="md-just-icon md-simple md-primary">
                      <md-icon>edit</md-icon>
                      <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>
                  </md-table-cell>

                  <md-table-cell md-label="Eliminar">
                    <md-button @click="EliminarPublicacion(item.id)" class="md-just-icon md-simple md-danger">
                      <md-icon>close</md-icon>
                      <md-tooltip md-direction="top">Close</md-tooltip>
                    </md-button>
                    
                  </md-table-cell>
                </md-table-row>
                
                
              
              </md-table> -->
              <b-form-input v-model="filter" type="search" placeholder="Buscar...">

               </b-form-input>
              <b-table  :filter="filter" id:="tablaEventos" :per-page="perpage" :current-page="currentPage" striped  hover responsive  class="mt-4" :fields="encabezado" :items="categoria">
                

                <template v-slot:cell(Editar)="row">
                  <md-button  @click="editar(editarpublicacion(row.item.id))" class="md-just-icon md-simple md-primary">
                      <md-icon>edit</md-icon>
                      <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>


                </template>
                <template v-slot:cell(Eliminar)="row">
                  <md-button @click="EliminarPublicacion(row.item.id)" class="md-just-icon md-simple md-danger">
                      <md-icon>close</md-icon>
                      <md-tooltip md-direction="top">Close</md-tooltip>
                    </md-button>
                </template>
          
                <template v-slot:cell(insertar)="row">
                  
                    <button  @click="Detalle(DetalleCategoria(row.item.id))" type="button" class="btn btn-primary">+</button>
                      
                    
                </template>
            
  
               </b-table>              
              

                  <b-pagination
                  v-model="currentPage"
               :total-rows="rows"
                :per-page="perpage"
                aria-controls="tablaEventos"
               ></b-pagination>
            </div>
          </md-card-content>
        </md-card>
      </div>

      
    </div>
  </div>
</template>

<script>

import { OrderedTable } from "@/components";
import Swal from 'sweetalert2'
import axios from "axios"
//import { response } from "express";
// el axios permite  llamar  todas las  apis  que se hayan creado
export default {
  name: "Eventos",
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
      perpage:10,
      currentPage:1,
       encabezado: [
                { key: "id", label: "Id"  },
                { key: "nombre", label: "Nombre" },
                { key: "descripcion", label: "Descripcion" },
                { key: "fecha_y_Hora", label: 'FECHA-HORA' },
                { key: "lugar", label: 'Lugar' },
                { key: "estado", label: 'Estado' },
                { key: "urlExterna", label: 'Url' },
                { key: "responsable", label: 'Responsable' },
                { key: "fecha_caducidad", label: 'fecha_caducidad' },
                { key: "tipo", label: 'Tipo' },
                { key: "Editar", label: "Editar" },
                { key: "Eliminar", label: "Eliminar" },
                { key: "insertar", label: "+" },

            ],
      
    }
    
  },
  components: {
  },
  mounted() {
    this.getcategorias()
    this.EliminarPublicacion(id)
  },

  computed: {
    rows() {
      return this.categoria.length

    }
  },
  methods: {
    updatePagination (page, pageSize, sort, sortOrder) {
        console.log('pagination has updated', page, pageSize, sort, sortOrder);
      },
    getcategorias() {
      this.axios.get("http://127.0.0.1:8000/api/publicacion").then((response) => {
        this.categoria = response.data;
      })
    },
    NuevaCategoria() {
      this.$router.push('/FormEventos')
    },
    editarpublicacion(id) {
     
      this.$router.push(`/EditarPEvento/${id}`)
    },

    DetalleCategoria(id) {
      this.$router.push(`/DetalleCategoria/${id}`)
    },
    EliminarPublicacion(id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: 'Seguro desea eliminar el evento?',
        text: "Esta accion no tiene reversa!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios.delete("http://127.0.0.1:8000/api/publicacion/" + id).then((response) => {
            this.axios.get("http://127.0.0.1:8000/api/publicacion").then((response) => {
            this.categoria = response.data;
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
    },
    
  }
}
</script>
<style>
.eventostable{
  display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}
</style>