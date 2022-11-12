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
            <!--div  class="table-responsive table">
              <b-table class="fixed" :fields="encabezado" :items="categoria"></b-table>
            </div-->
            <div>
              <md-table v-model="categoria" :table-header-color="tableHeaderColor" :filter="filter">
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
                <md-table-pagination md-label="Páginas" 
                    :md-size="10" 
                    :md-page="5" 
                    :md-total="categoria.length" 
                    md-separator="de" 
                    :md-page-options="[5, 10, 25, 50]" 
                    @pagination="onPagination">
                </md-table-pagination>
              
              </md-table>
            </div>
          </md-card-content>
        </md-card>
      </div>

      
    </div>
  </div>
</template>

<script>

import Swal from 'sweetalert2'
import axios from "axios"

//import { response } from "express";
// el axios permite  llamar  todas las  apis  que se hayan creado
export default {
  name: "Eventos",
  data() {
    return {
      conteo:null,
      categoria: [],
      encabezado: [
        { key: "id", label: "Id" },
        { key: "nombre", label: "Nombre" },
        { key: "descripcion", label: "Descripcion" },
        { key: "fecha_y_Hora", label: 'FECHA-HORA' },
        { key: "lugar", label: 'Lugar' },
        { key: "estado", label: 'Estado' },
        { key: "urlExterna", label: 'Url' },
        { key: "responsable", label: 'Responsable' },
        { key: "fecha_caducidad", label: 'fecha_caducidad' },
        { key: "tipo", label: 'Tipo' },

        { key: "insertar", label: "Insertar" },

        { key: "editar", label: "Editar" },

        { key: "eliminar", label: "Eliminar" },

      ],

    }
  },
  components: {

  },
  mounted() {
    this.getcategorias()
    this.EliminarPublicacion(id)



  },

  methods: {
    onPagination(pagination) {
      if (pagination) {
        this.limit = pagination.size;
        this.offset = (pagination.page - 1) * this.limit;
      }

      this.find()
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
    computed:{
      conteo(){
        this.conteo=this.categoria.length;
      }
    },


  }


}

</script>
