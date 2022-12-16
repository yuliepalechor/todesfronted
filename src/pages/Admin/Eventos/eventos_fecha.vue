<template>
    <div class="content">
      <div class="md-layout">
        <div
          class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        >
        <md-button class="md-info" @click="insertar(NuevaCategoria())" >Nuevo Evento</md-button>
          <md-card>
            <md-card-header data-background-color="blue">
              <h4 class="title">Eventos</h4>
              <p class="category">Lista de Eventos</p>
            </md-card-header>
            <md-card-content>
             
              <div>
                <md-table v-model="categoria" :table-header-color="tableHeaderColor" md-card md-sort="nombre" md-sort-order="asc">
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
                  <md-table-pagination
                   :md-page-size="2"
                   :md-page-options="[1,2,3,4,5,6]"
                   :md-update="updatePagination"
                   :md-data="categoria"
                   :md-paginated-data.sync="categoria" />
                  
                
                </md-table>
  
                    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
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
        
      }
      
    },
    components: {
    },
    mounted() {
      this.getcategorias()
      this.EliminarPublicacion(id)
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
      EliminarPublicacion(id) {
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
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